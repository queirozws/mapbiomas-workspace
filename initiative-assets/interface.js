/**
 * @Author: Wildson Queiroz
 * Interface
 */

// TODO: replace products to metadataList {}
// var products = require("users/queirozws/mb-workspace:initiative-assets/assetMetadataList.js").products; // OR >> var products = obj.products; ?
var metadataObj = require("users/queirozws/mb-workspace:initiative-assets/metadataList.js"); // OR >> var products = obj.products; ?

// var viewImages = require("users/queirozws/mb-workspace:initiative-assets/getAssetMetadata-v2.js").viewImages;
var dataObj = require("users/queirozws/mb-workspace:initiative-assets/getData.js");

var products = metadataObj.products;

var getMapId = dataObj.getMapId;

var selectedAssets = [1];

var selectedOptions = {}; // Object with selected options from select buttons

var options = {
    initiative: [
        "brazil",
        "pampa",
        "raisg",
        "chaco",
        "indonésia",
        "af-trinacional"
    ],
    collection: ["1", "2", "3", "4", "5", "6"],
    theme: [
        "classification",
        "integration",
        "transition",
        "quality"
    ],
    // asset_id: "string",
    // description: "string",
    type: [
        "singleband-classification",
        "singleband-integration",
        "singleband-transition",
        "singleband-quality",
        "multiband-classification",
        "multiband-integration",
        "multiband-transition",
        "multiband-quality",
        "multiband-classification-collection",
        "multiband-integration-collection",
        "multiband-transition-collection",
        "multiband-quality-collection",
    ],
    countries: [
        "Brasil",
        "Bolívia",
        "Colômbia",
        "Equador",
        "Guiana",
        "Guiana Francesa",
        "Peru",
        "Suriname",
        "Venezuela",
        "Paraguay"
    ],
    source: [ "imazon", "LAPIG/UFG", "Solved", "IPAM", "outros..." ],
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

/**
 * Após escolha dos seletores, deverá ser retornado um objeto com as chaves correspondentes
 * @param {object}
 */
function selectAssets(obj) {
    
    // var compare = {
    //     "string": obj[key] === this
    // };
    
    var keys = Object.keys(obj);
    
    // var hasValue = keys.some(
    //     function(key) {
    //         obj[key]
    //     })
    
    var filtered = keys.filter( // TODO substituir .filter() por .some() ?
        
        function(key) {
          
            // print(this[key], typeof obj[key])
          
            return ( (obj[key] === this[key]) /*||*/ /*obj[key].some(function() {return el === this[key]})*/ )
            
        }, selectedOptions)
    
    return filtered.length > 0 // If the objects have some key with the same value, its size will be greater than 0

}

var label = ui.Label('Utilize as opções abaixo para selecionar os assets a serem exibidos:'); // TODO Melhorar redação
print(label);

Map.setCenter(-50, -10, 4);

var keys = Object.keys(options);

var quantidade = 0;
  
keys.forEach(
    function(key) {

        var select = ui.Select({
            items: options[key],
            onChange: function(option) {
                
                // print(options, key)
                
                selectedOptions = {};
                
                selectedOptions[key] = option;
                
                // print(selectedOptions);
                
                // print(typeof options[key])
                
                products = products.filter(selectAssets, selectedOptions);
                
                console.log("Os critérios acima retornaram: " + products.length + " assets", products);
                
                // ( (products.length === 0) && print("Não existe asset que atenda as categorias escolhidas") );
                
            },
            placeholder: "FILTER BY " + key.toUpperCase(), // TODO:
            style: {"width": "350px"}
        })

        print(select);

  })

var visualizeImages = ui.Button({
    label: 'VISUALIZE IMAGES',
    onClick: function() {

        // ui.Panel().clear()
        
        Map.clear();
        
        // var selectedAssets = products.filter(selectAssets, selectedOptions);
        
        ( (products.length === 0) && print("Selecione alguma das opções acima!") );
        
        ( (products.length === 0) || products.forEach(getMapId) );

        // if (products.length === 0) {
  
        //     print("Selecione alguma das opções acima!")
          
        // } else {
            
        //     products.forEach(viewImages);
            
        // }
        
    },
    style: {"color": "blue", "width": "350px"}
});

print(visualizeImages);


// Usar Image.visualize() ou paleta de cores última coleção 6;

// function viewImages(obj) { // TODO: Melhorar nome função; inserir segundo param selectedYears
  
//     var selectedYears = 0; // 0: first year / period; 1: second year / period...

//     var layerName = obj.initiative + "-" + "collection-" + obj.collection + "-" + obj.theme;
    
//     var image = getImage(obj, selectedYears);
    
//     // Map.addLayer(image, {}, layerName, true, 1);

//     return ee.data.getMapId({image: image})

// }


// var options = {
//     "brazil": {
//         "collection 6": {
//             "type": {
//                 "classification-singleband": {
                    
//                 },
//                 "transition-singleband": {
                    
//                 },
//                 "classification-multiband": {
                    
//                 },
//                 "transition-multiband": {
                    
//                 },
//                 "quality-singleband": {
                    
//                 },
//                 "quality-multiband": {
                    
//                 },
//                 "collection-classification-multiband": {
                    
//                 },
//             }
//             "theme": [
//                 "classification": {
//                     "type": [
//                         "singleband-classification",
//                         "multiband-classification",
//                         "singleband-classification-collection",
//                         "multiband-classification-collection"
//                     ],
//                 },
//                 "transition": {
//                     "type": [
//                         "singleband-transition",
//                         "multiband-transition",
//                         "singleband-transition-collection",
//                         "multiband-transition-collection"
//                     ],
//                 },
//                 "integration":: {
//                     "type": [
//                         "singleband-integration",
//                         "multiband-integration",
//                         "singleband-integration-collection",
//                         "multiband-integration-collection"
//                     ],
//                 },
//                 "quality": {
//                     "type": [
//                         "singleband-quality",
//                         "multiband-quality",
//                         "singleband-quality-collection",
//                         "multiband-quality-collection"
//                     ],
//                 },
//             ]
//         }
//     }
// }




// 01:32