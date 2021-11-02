/**
 * @Author: Wildson Queiroz
 * Interface
 */
 
var products = require("users/queirozws/mb-workspace:initiative-assets/assetMetadataList.js").products;
// OR >> var products = obj.products; ?

var viewImages = require("users/queirozws/mb-workspace:initiative-assets/getAssetMetadata-v2.js").viewImages;

var selectedOptions = {}; // Object with selected options from select buttons

var label = ui.Label('Utilize as opções abaixo para selecionar os assets a serem exibidos:'); // TODO Melhorar redação
print(label);

Map.setCenter(-50, -10, 4);

/**
 * Após escolha dos seletores, deverá ser retornado um objeto com as chaves correspondentes
 * @param {object}
 */
var selectors = {
    initiative: ["brazil", "pampa", "raisg", "chaco", "indonésia", "af-trinacional"],
    collection: ["1","2","3","4","5","6"],
    theme: ["classification", "transition", "integration", "quality"],
    // asset_id: "string",
    // description: "string",
    type: [
        "classification-singleband",
        "transition-singleband",
        "classification-multiband",
        "transition-multiband",
        "quality-singleband",
        "quality-multiband",
        "collection-classification-multiband"
    ],
    countries: ["Brasil", "Bolívia", "Colômbia", "Equador", "Guiana", "Guiana Francesa", "Peru", "Suriname", "Venezuela", "Paraguay"],
    source: [ "imazon", "LAPIG/UFG", "Solved", "IPAM", "outros..."],
    // metadata: {
    //     bands: {
    //         prefix: "string_",
    //     },
    //     years:  [
    //         [ "0000", "0000" ], [ "0000", "0000" ], [ "0000", "0000" ]
    //     ],
    //     biome: ["string"],
    //     version: "0", // string || integer?
    // }
}


function selectAssets(obj) {
  
    var keys = Object.keys(obj);
    
    var filtered = keys.filter(
        
        function(key) {
          
            return (obj[key] === this[key])
            
        }, selectedOptions)
    
    return filtered.length > 0 // If the objects have some key with the same value, its size will be greater than 0

}

var keys = Object.keys(selectors);

keys.forEach(
    function(key) {
      
        var select = ui.Select({
            items: selectors[key],
            onChange: function(option) {
                
                selectedOptions[key] = option
                
                // print(selectedOptions)
                
            },
            placeholder: "FILTER BY " + key.toUpperCase() // TODO:
        })

        print(select);

  })

var visualizeImages = ui.Button({
    label: '*** VISUALIZE IMAGES ***',
    onClick: function() {

        // ui.Panel().clear()
        
        Map.clear();
        
        var selectedAssets = products.filter(selectAssets, selectedOptions);
        
        if (selectedAssets.length === 0) {
  
            print("Selecione alguma das opções acima!")
          
        } else {
            
            selectedAssets.forEach(viewImages);
            
        }
        
    }
});

print(visualizeImages);




// 21:02