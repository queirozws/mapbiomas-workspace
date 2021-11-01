/**
 * @Author: Wildson Queiroz
 * 
 */
 
var products = require("users/queirozws/mb-workspace:initiative-assets/assetMetadataList.js").products;
// var products = obj.products;

var viewImages = require("users/queirozws/mb-workspace:initiative-assets/getAssetMetadata-v2.js").viewImages;

var selectedOptions = {}; // Object with selected options from select buttons

// print(products);

var label = ui.Label('Selecione uma das opções abaixo para filtrar os assets a serem exibidos:'); // TODO Melhorar redação
print(label);

Map.setCenter(-50, -10, 4);

/**
 * Interface
 * 
 */
var items = ["initiative", "collection", "theme"] // ui.Select() options

/**
 * 
 * @param {object}
 */

var metadataModel = {
    initiative: "string",
    collection: 0,
    theme: "string",
    asset_id: "string",
    description: "string",
    type: "string",
    countries: ["string", "string", "string"],
    source: [ "string", "string", "string", "string", "string", "string", "string", "string", "string" ],
    metadata: {
        bands: {
            prefix: "string_",
        },
        years:  [
            [ "0000", "0000" ], [ "0000", "0000" ], [ "0000", "0000" ]
        ],
        biome: ["string"],
        version: "0", // string || integer ?
    }
}

// Após escolha dos seletores, deverá ser retornado um objeto com as chaves correspondentes
var selector = {
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
    countries: ["Brasil", "Bolívia", "Colômbia", "Equador", "Guiana", "Guiana Francesa", "Peru", "Suriname", "Venezuela"],
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
    
    return (obj.initiative === this.initiative || obj.theme === this.theme)

}

var keys = Object.keys(selector);

keys.forEach(
    function(key) {
      
        var select = ui.Select({
            items: selector[key],
            onChange: function(option) {
                
                selectedOptions[key] = option
                
                // print(selectedOptions)
                
                

            },
            placeholder: key.toUpperCase() // TODO: 
        })

        print(select);

  })

var visualizeImages = ui.Button({
    label: '*** VISUALIZE IMAGES ***',
    onClick: function() {

        // ui.Panel().clear()
        
        Map.clear();
        
        print(selectedOptions);

        var selectedAssets = products.filter(selectAssets, selectedOptions);
        
        print(selectedAssets);
        
        // viewImages(selectedAssets);
        
        selectedAssets.forEach(viewImages);
        
    }
});

print(visualizeImages);


// 16:25