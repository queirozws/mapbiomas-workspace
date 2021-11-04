/**
 * @Author Wildson Queiroz
 * @module
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
 * Retorna uma imagem contendo uma banda do ano selecionado
 * @param {Object} obj
 * @param {number} selectedYears // adaptar para receber um array
 * @returns {ee.Image}
 */
function getImage(obj, selectedYears){

    var types = {
      
        "singleband-classification": {
            prefix: "classification_",
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
            selectedYears: selectedYears,
            bandName: getBandName,
            constructor: eeImageCollection
        },
        "multiband-integration-collection": {
            prefix: "classification_",
            selectedYears: selectedYears,
            bandName: getBandName,
            constructor: eeImageCollection
        },
        "multiband-transition-collection": {
            prefix: "classification_",
            selectedYears: selectedYears,
            bandName: getBandName,
            constructor: eeImageCollection
        },
        "multiband-quality-collection": {
            prefix: "quality_",
            selectedYears: selectedYears,
            bandName: getBandName,
            constructor: eeImageCollection
        }
    }
    
    var bandName = types[obj.type].bandName(obj);

    var image = types[obj.type].constructor(obj).select(bandName);
    
    return image // || imagem padrão quando erro?

}

/**
 * Retorna os resultados da chamada mapId
 * @param {Object} obj
 * @returns {RawMapId}
 */
exports.getMapId = function getMapId(obj, selectedYears) {
  
    selectedYears = 0;

    var image = getImage(obj, selectedYears);
    
    return ee.data.getMapId( {image: image} )

}


