/**
 * @Author Wildson Queiroz
 * 
 */
 
/**
 * Retorna o nome da banda
 * @param {Object} obj
 * @return {string}
 */
function getBandName(obj) {
    
    var prefix = this.prefix
    
    var firstYear = obj.metadata.years[ this.selectedYears ][0];
    
    // print( 'First year: ', ( firstYear || "doesn't exist" ) );
    
    // if secondYear === undefined: return ""
    var secondYear = obj.metadata.years[ this.selectedYears ][1] || "";
    
    // print( 'Second year: ', (secondYear || "doesn't exist") );

    // if secondYear !== undefined: return "_" + secondYear
    var bandName = prefix + firstYear + (secondYear && "_" + secondYear);
    
    // print( "Selected band is: ", bandName);
    
    return bandName;
    
}

/**
 * Retorna uma imagem
 * @param {Object} obj
 * @return {ee.Image}
 */
function eeImage(obj) {
    
    return ee.Image(obj.asset_id)
    
}

/**
 * Retorna uma coleção de imagens
 * @param {Object} obj
 * @return {ee.ImageCollection}
 */
function eeImageCollection(obj) {
    
    return ee.ImageCollection(obj.asset_id).mosaic()
    
}

/**
 * 
 * @param {Object} obj
 * @param {number} selectedYears // adaptar para receber um array
 * @returns {ee.Image}
 */
function getImage(obj, selectedYears){

    var types = {
      
        "singleband-classification": {
            prefix: "classification_", // Usar prefix de types ou prefix do objeto assets?
            selectedYears: selectedYears,
            bandName: getBandName,
            constructor: eeImage
        },
        "singleband-integration": {
            prefix: "transition_",
            selectedYears: selectedYears,
            bandName: getBandName,
            constructor: eeImage
        },
        "singleband-transition": {
            prefix: "transition_",
            selectedYears: selectedYears,
            bandName: getBandName,
            constructor: eeImage
        },
        "singleband-quality": {
            prefix: "quality_",
            selectedYears: selectedYears,
            bandName: getBandName,
            constructor: eeImage
        },
        "multiband-classification": {
            prefix: "classification_",
            selectedYears: selectedYears,
            bandName: getBandName,
            constructor: eeImage
        },
        "multiband-integration": {
            prefix: "classification_",
            selectedYears: selectedYears,
            bandName: getBandName,
            constructor: eeImage
        },
        "multiband-transition": {
            prefix: "transition_",
            selectedYears: selectedYears,
            bandName: getBandName,
            constructor: eeImage
        },
        "multiband-quality": {
            prefix: "quality_",
            selectedYears: selectedYears,
            bandName: getBandName,
            constructor: eeImage
        },
        "multiband-classification-collection": {
            prefix: "classification_",
            selectedYears: selectedYears, //
            bandName: getBandName,
            constructor: eeImageCollection
        },
        "multiband-integration-collection": {
            prefix: "classification_",
            selectedYears: selectedYears, //
            bandName: getBandName,
            constructor: eeImageCollection
        },
        "multiband-transition-collection": {
            prefix: "classification_",
            selectedYears: selectedYears, //
            bandName: getBandName,
            constructor: eeImageCollection
        },
        "multiband-quality-collection": {
            prefix: "quality_",
            selectedYears: selectedYears, //
            bandName: getBandName,
            constructor: eeImageCollection
        },
        // "multiband-transitions-collection": {
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
    
    // print(image);
    
    // Usar Image.visualize() ou paleta de cores última coleção 6;
    // Map.addLayer(image, {}, layerName, true, 1);
    
    return image // || retornar imagem com os limites do Brasil quando erro?

}

/**
 * 
 */
exports.viewImages = function viewImages(obj) { // TODO: Melhorar nome função; inserir segundo param selectedYears
  
    var selectedYears = 0; // 0: first year / period; 1: second year / period...

    var layerName = obj.initiative + "-" + "collection-" + obj.collection + "-" + obj.theme;
    
    var image = getImage(obj, selectedYears);
    
    Map.addLayer(image, {}, layerName, true, 1);

    // TODO: return url mapId

}


// 14:50