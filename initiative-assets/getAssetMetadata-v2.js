/**
 * @Author Wildson Queiroz
 * 
 */
 
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

    // print(obj);

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
    
    return image // || retornar imagem com os limites do Brasil quando erro?

}

/**
 * 
 */
exports.viewImages = function viewImages(obj) {
  
    var selectedYears = 0; // 0: first year / period; 1: second year / period...

    var layerName = obj.initiative+"-"+"collection-" + obj.collection+"-"+obj.theme;
    
    var image = getImage(obj, selectedYears);
    
    Map.addLayer(image, {}, layerName, true, 1);
}


// 14:08