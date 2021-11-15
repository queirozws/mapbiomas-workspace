/**
 * App interface
 * @Author: Wildson Queiroz
 */

var metadataObj = require("users/queirozws/mb-workspace:initiative-assets/metadataList.js");

var dataObj = require("users/queirozws/mb-workspace:initiative-assets/getData.js");

var palette = require("users/mapbiomas/modules:Palettes.js").get('classification6');

var products = metadataObj.products;

var getMapId = dataObj.getMapId;

var visParams = {min: null, max: null, palette: null};

// Object with initial selected options
var selectedOptions = {
    initiative: null,
    collection: null,
    theme: null,
    type: null,
    countries: null,
    source: null,
};

// Object with select button options
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
    years: [
        "1985",
        "1986",
        "1987",
        "1988",
        "1989",
        
        "1990",
        "1991",
        "1992",
        "1993",
        "1994",
        "1995",
        "1996",
        "1997",
        "1998",
        "1999",
        
        "2000",
        "2001",
        "2002",
        "2003",
        "2004",
        "2005",
        "2006",
        "2007",
        "2008",
        "2009",
        
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        
    ]
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
    
    var keys = Object.keys(obj);
    
    var filtered = keys.filter( // TODO substituir .filter() por .some() ?
        
        function(key) {
          
            return ( (obj[key] === this[key]) )
            
        }, selectedOptions)
    
    // If the objects have some key with the same value, its size will be greater than 0
    return filtered.length > 0

}

/**
 * Visualiza os assets selecionados
 * @param {object}
 */
function visualizeData(obj, selectedYears) {
  
    selectedYears = 0;

    var mapId = getMapId(obj, selectedYears);
    
    var layerName = obj.initiative + "-" + "collection-" + obj.collection + "-" + obj.theme;
    
    
    
    Map.addLayer(mapId, visParams, layerName, true, 1);

}

var label = ui.Label('Utilize as opções abaixo para selecionar os assets a serem exibidos:');
print(label);

Map.setCenter(-50, -10, 4);

var keys = Object.keys(options);

var quantidade = 0;
  
keys.forEach(
    function(key) {

        var select = ui.Select({
            items: options[key],
            onChange: function(option) {
                
                selectedOptions = {};
                
                selectedOptions[key] = option;
                
                ( (option === 'classification') && (visParams = {min: 0, max: 49, palette: palette}));
                
                products = products.filter(selectAssets, selectedOptions);
                
                console.log("Os critérios acima retornaram: " + products.length + " assets", products);
                
            },
            placeholder: "FILTER BY " + key.toUpperCase(),
            style: {"width": "350px"}
        })

        print(select);

  })

var visualizeImages = ui.Button({
    label: 'VISUALIZE IMAGES',
    onClick: function() {

        // ui.Panel().clear()
        
        Map.clear();
        
        ( (products.length === 0) && print("Selecione alguma das opções acima!") );
        
        ( (products.length === 0) || products.forEach( visualizeData ) );

        // if (products.length === 0) {
  
        //     print("Selecione alguma das opções acima!")
          
        // } else {
            
        //     products.forEach(viewImages);
            
        // }
        
    },
    style: {"color": "blue", "width": "350px"}
});

//

print(visualizeImages);

