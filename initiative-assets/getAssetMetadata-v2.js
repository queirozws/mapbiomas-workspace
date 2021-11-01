/**
 * @Author Wildson Queiroz
 * 
 */
 
var products = require("users/queirozws/mb-workspace:initiative-assets/assetMetadataList.js").products;
// var products = obj.products;

// print(products);

Map.setCenter(-50, -10, 4);

/**
 * 
 */
function getBandName(obj) {
    
    var prefix = obj.metadata.bands.prefix; // OR this.prefix ???
    
    var firstYear = obj.metadata.years[ this.selectedYears ][0];
    print( 'First year: ', ( firstYear || "doesn't exist" ) );
    
    var secondYear = obj.metadata.years[ this.selectedYears ][1] || ""; // if secondYear === undefined: return ""
    print( 'Second year: ', (secondYear || "doesn't exist") );

    var bandName = prefix + firstYear + (secondYear && "_" + secondYear); // if secondYear !== undefined: return "_" + secondYear
    print( "Selected band is: ", bandName);
    
    return bandName;
    
}

/**
 * 
 */
function eeImage(obj) {
    
    return ee.Image(obj.asset_id)
    
}

/**
 * 
 */
function eeImageCollection(obj) {
    
    return ee.ImageCollection(obj.asset_id).mosaic()
    
}

/**
 * 
 * @param {Object} obj 
 * @param {number} selectedYears 
 * @returns {ee.Image}
 */
function getImage(obj, selectedYears){

    print(obj);

    var types = {
      
        "classification-singleband": {
            // prefix: "classification_", // Usar prefix de types ou prefix do objeto assets?
            selectedYears: selectedYears,
            bandName: getBandName,
            constructor: eeImage
        },
        "transition-singleband": {
            // prefix: "transition_",
            selectedYears: selectedYears,
            bandName: getBandName,
            constructor: eeImage
        },
        "classification-multiband": {
            // prefix: "classification_",
            selectedYears: selectedYears,
            bandName: getBandName,
            constructor: eeImage
        },
        "transition-multiband": {
            // prefix: "transition_",
            selectedYears: selectedYears,
            bandName: getBandName,
            constructor: eeImage
        },
        "quality-singleband": {
            // prefix: "classification_",
            selectedYears: selectedYears,
            bandName: getBandName,
            constructor: eeImage
        },
        "quality-multiband": {
            // prefix: "classification_",
            selectedYears: selectedYears,
            bandName: getBandName,
            constructor: eeImage
        },
        "collection-classification-multiband": {
            // prefix: "classification_",
            selectedYears: selectedYears, //
            bandName: getBandName,
            constructor: eeImageCollection
        },
        // "collection-transitions-multiband": {
        //     prefix: "_{year1}_{year2}",
        //     func: function (years) {
        //         return obj.prefix + types[obj.type].sufix
        //             .replace("{year1}", years[0])
        //             .replace("{year2}", years[1])// "transition_2019_2020"
        //     }
        // }
    }
    
    var bandName = types[obj.type].bandName(obj);

    var image = types[obj.type].constructor(obj).select(bandName);
    
    print(image);
    
    // Usar Image.visualize() ou paleta de cores última coleção 6;
    // Map.addLayer(image, {}, layerName, true, 1);
    
    return ( image || ee.Image(1) ) // || retornar imagem com os limites do Brasil quando erro?

}

/**
 * 
 */
function viewImages(obj) {
  
    var selectedYears = 0; // 0: first year / period; 1: second year / period...

    var layerName = obj.initiative+"-"+"collection-" + obj.collection+"-"+obj.theme;
    
    var image = getImage(obj, selectedYears);
    
    Map.addLayer(image, {}, layerName, true, 1);
}

/**
 * Interface
 * 
 */

var items = ["initiative", "collection", "theme"] // ui.Select() options

/**
 * 
 * @param {object}
 */

// var selector = function(???) {


//     return obj
// }

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

var objeto = {};

var keys = Object.keys(selector);

keys.forEach(
    function(key) {
      
        var select = ui.Select({
            items: selector[key],
            onChange: function(option) {
                
                objeto[key] = option
                
                print(objeto)
                
                

            },
            placeholder: "Choose a " + key
        })

        print(select);

  })

var visualizeImages = ui.Button({
    label: '*** VISUALIZE IMAGES ***',
    onClick: function() {
        
        var selectedAssets = products.filter(selectAssets, objeto);
        
        print(selectedAssets)
        
        viewImages(selectedAssets);
        
        // selectedAssets.forEach(viewImages);
        
    }
});

print(visualizeImages);


//