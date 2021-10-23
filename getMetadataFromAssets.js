/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var imageCollection = ee.ImageCollection("projects/mapbiomas-workspace/COLECAO6/classificacao");
/***** End of imports. If edited, may not auto-convert in the playground. *****/

// print(imageCollection.first().propertyNames())

// var images = imageCollection.filterMetadata('CAATINGA', 'starts_with', )



var assetIdList = [
    'id1',
    'id2',
    'id3',
]



var objList = assetIdList.map(
    function(el) {
        
        
        return {
          initiative: '',
          assetiD: el,
          key: 'value'
        }
    })
    
    
print(objList)