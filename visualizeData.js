var products = [
    {
        initiative: 'brasil', // inglês, minúscula; nome composto usar "-";
        type: 'integration', // usar letras minúsculas
        collection: 6,
        assetId: "projects/mapbiomas-workspace/public/collection6/mapbiomas_collection60_integration_v1",
        description: 'Dados integrados da coleção 6 do Brasil', // Usar português
        metadata: {
            bands: {
                suffix: 'transitions_',
            },
            suffix: 'classification_',
            years: [
                "1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993",
                "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002",
                "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011",
                "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"
              ],
            biome: "biome",
            type: 'transitions-multiband', // | "classification-singleband" | "mosaic-multiband",
            version: '1' // exemplo | "1" (padrão usado João)
        },
    },
    {
        initiative: 'brazil',
        type: 'transitions',
        collection: 6,
        assetId: "projects/mapbiomas-workspace/public/collection6/mapbiomas_collection60_transitions_v1",
        description: 'Dados de transições da coleção 6 do Brasil',
        metadata: {
            bands: {
                suffix: 'transitions_',
            },
            years: [ ],
            biome: "biome",
            type: 'transitions-multiband',
            version: '1'
        },
    },
    {
        initiative: 'brazil',
        type: 'classification',
        collection: 6,
        assetId: "projects/mapbiomas-workspace/COLECAO6/classificacao",
        description: 'Dados de classificação da coleção 6 do Brasil',
        metadata: {
            bands: {
                suffix: 'classification_',
            },
            years: [
                "1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993",
                "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002",
                "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011",
                "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"
              ], // [first year, last year]
            biome: "biome",
            type: 'mosaic-singleband',
            version: '1'
        },
    },
    {
        initiative: 'pampa',
        type: 'transitions',
        collection: 6,
        assetId: "projects/MapBiomas_Pampa/public/collection1/mapbiomas_pampa_collection1_transitions_v1",
        description: '',
        metadata: {
            bands: {
                suffix: 'transitions_',
            },
            suffix: 'classification_',
            years: [2000, 2001, 2002, 2019], // fazer todos os anos
            biome: "biome",
            type: 'transitions-multiband',
            version: '1'
        },
    },
    {
        initiative: 'pampa',
        type: 'Integration',
        collection: 6,
        assetId: "projects/MapBiomas_Pampa/public/collection1/mapbiomas_pampa_collection1_integration_v1",
        description: '',
        metadata: {
            bands: {
                suffix: 'transitions_',
            },
            suffix: 'classification_',
            year: "year",
            biome: "biome",
            type: 'transitions-multiband',
            version: '1'
        },
    },
    {
        initiative: 'pampa',
        type: 'quality',
        collection: 6,
        assetId: "projects/MapBiomas_Pampa/public/collection1/mapbiomas_pampa_collection1_quality_v1",
        description: '',
        metadata: {
            bands: {
                suffix: 'transitions_',
            },
            suffix: 'classification_',
            year: "year",
            biome: "biome",
            type: 'transitions-multiband',
            version: '1'
        },
    },
    {
        initiative: 'chaco',
        type: 'transitions',
        collection: 6,
        assetId: "projects/mapbiomas-chaco/public/collection2/mapbiomas_chaco_collection2_transitions_v1",
        description: '',
        metadata: {
            bands: {
                suffix: 'transitions_',
            },
            suffix: 'classification_',
            year: "year",
            biome: "biome",
            type: 'transitions-multiband',
            version: '1'
        },
    },
    {
        initiative: 'chaco',
        type: 'Integration',
        collection: 6,
        assetId: "projects/mapbiomas-chaco/public/collection2/mapbiomas_chaco_collection2_integration_v1_",
        description: '',
        metadata: {
            bands: {
                suffix: 'transitions_',
            },
            suffix: 'classification_',
            year: "year",
            biome: "biome",
            type: 'transitions-multiband',
            version: '1'
        },
    },
    {
        initiative: 'chaco',
        type: 'Integration',
        collection: 6,
        assetId: "projects/mapbiomas-chaco/public/collection2/mapbiomas_chaco_collection2_integration_v1",
        description: '',
        metadata: {
            bands: {
                suffix: 'transitions_',
            },
            suffix: 'classification_',
            year: "year",
            biome: "biome",
            type: 'transitions-multiband',
            version: '1'
        },
    },
    {
        initiative: 'indonésia',
        type: 'Integration',
        collection: 6,
        assetId: "projects/mapbiomas-indonesia/public/collection1/mapbiomas_indonesia_collection1_integration_v1",
        description: '',
        metadata: {
            bands: {
                suffix: 'transitions_',
            },
            suffix: 'classification_',
            year: "year",
            biome: "biome",
            type: 'transitions-multiband',
            version: '1'
        },
    },
    {
        initiative: 'indonésia',
        type: 'quality',
        collection: 6,
        assetId: "projects/mapbiomas-indonesia/public/collection1/mapbiomas_indonesia_collection1_quality_v1",
        description: '',
        metadata: {
            bands: {
                suffix: 'transitions_',
            },
            suffix: 'classification_',
            year: "year",
            biome: "biome",
            type: 'transitions-multiband',
            version: '1'
        },
    },
    {
        initiative: 'indonésia',
        type: 'transitions',
        collection: 6,
        assetId: "projects/mapbiomas-indonesia/public/collection1/mapbiomas_indonesia_collection1_transitions_v1",
        description: '',
        metadata: {
            bands: {
                suffix: 'transitions_',
            },
            suffix: 'classification_',
            year: "year",
            biome: "biome",
            type: 'transitions-multiband',
            version: '1'
        },
    },
    {
        initiative: 'indonésia',
        type: 'transitions',
        collection: 6,
        assetId: "projects/mapbiomas-indonesia/public/collection1/mapbiomas_indonesia_collection1_transitions_v2",
        description: '',
        metadata: {
            bands: {
                suffix: 'transitions_',
            },
            year: "year",
            biome: "biome",
            type: 'transitions-multiband',
            version: '1'
        },
    },
    {
        initiative: 'raisg',
        type: 'quality',
        collection: 6,
        assetId: "projects/mapbiomas-raisg/public/collection3/mapbiomas_raisg_panamazonia_quality_v1",
        description: '',
        metadata: {
            bands: {
                suffix: 'transitions_',
            },
            year: "year",
            biome: "biome",
            type: 'transitions-multiband',
            version: '1'
        },
    },
    {
        initiative: 'raisg',
        type: 'Integration',
        collection: 6,
        assetId: "projects/mapbiomas-raisg/public/collection3/mapbiomas_raisg_panamazonia_collection3_integration_v1",
        description: '',
        metadata: {
            bands: {
                suffix: 'transitions_',
            },
            year: "year",
            biome: "biome",
            type: 'transitions-multiband',
            version: '1'
        },
    },
    {
        initiative: 'raisg',
        type: 'Integration',
        collection: 6,
        assetId: "projects/mapbiomas-raisg/public/collection3/mapbiomas_raisg_panamazonia_collection3_integration_v2",
        description: '',
        metadata: {
            bands: {
                suffix: 'transitions_',
            },
            year: "year",
            biome: "biome",
            type: 'transitions-multiband',
            version: '1'
        },
    },
    {
        initiative: 'raisg',
        type: 'transitions',
        collection: 6,
        assetId: "projects/mapbiomas-raisg/public/collection3/mapbiomas_raisg_panamazonia_collection3_transitions_v1",
        description: '',
        metadata: {
            bands: {
                suffix: 'transitions_',
            },
            year: "year",
            biome: "biome",
            type: 'transitions-multiband',
            version: '1'
        },
    },
    {
        initiative: 'raisg',
        type: 'transitions',
        collection: 6,
        assetId: "projects/mapbiomas-raisg/public/collection3/mapbiomas_raisg_panamazonia_collection3_transitions_v2",
        description: '',
        metadata: {
            bands: {
                suffix: 'transitions_',
            },
            year: "year",
            biome: "biome",
            type: 'transitions-multiband',
            version: '1'
        },
    },
    {
        initiative: 'af-trinacional',
        type: 'Integration',
        collection: 6,
        assetId: "projects/mapbiomas_af_trinacional/public/collection1/mapbiomas_atlantic_forest_collection1_integration_v1",
        description: '',
        metadata: {
            bands: {
                suffix: 'transitions_',
            },
            year: "year",
            biome: "biome",
            type: 'transitions-multiband',
            version: '1'
        },
    },
    {
        initiative: 'af-trinacional',
        type: 'quality',
        collection: 6,
        assetId: "projects/mapbiomas_af_trinacional/public/collection1/mapbiomas_atlantic_forest_collection1_quality_v1",
        description: '',
        metadata: {
            bands: {
                suffix: 'transitions_',
            },
            year: "year",
            biome: "biome",
            type: 'transitions-multiband',
            version: '1'
        },
    },
    {
        initiative: 'af-trinacional',
        type: 'transitions',
        collection: 6,
        assetId: "projects/mapbiomas_af_trinacional/public/collection1/mapbiomas_atlantic_forest_collection1_transitions_v1",
        description: '',
        metadata: {
            bands: {
                suffix: 'transitions_',
            },
            year: "year",
            biome: "biome",
            type: 'transitions-multiband',
            version: '1'
        },
    },

]

// Function: Identify the data type AND return de asset (e.g.: Image, ImageCollection...)

// function getDataType(assetId, callback) {
    
//     ee.data.getAsset(assetId, callback)
// }

function callback(asset, failure) {
    if (asset) {
        
        var id = asset.id
        
        // switch ( ee.data.getAsset(assetId, callback).type ) {
        switch ( asset.type ) {
          
            case "Image":
              
                // print(ee.String(id).split('/').get(2))
                print('image:', id.split('/').slice(-1)[0])
              
                var image = ee.Image(id)
                
                Map.addLayer(image)
                
                // ui.Map.Layer(image, {}, 'name')
              
                return null
        
            case "ImageCollection":

                print('imageCollection:', id.split('/').slice(-1)[0])
                
                var imgColl = ee.ImageCollection(asset.id)
                
                Map.addLayer(imgColl)
              
                return null
        
            default:
                print('Não é uma Image nem ImageCollection');
        
        }

    } else {
        console.log('Asset não encontrado!')
    }
}


products.forEach(
    function(asset) {
      
        // console.log(asset.assetId)
        
        ee.data.getAsset(asset.assetId, callback)
        
        // Map.addLayer(ee.Image(obj.assetId), {}, obj.initiative, true, 1)
    })
    
// print(ee.List(products).length())

// var layersList = Map.layers();

// 
// print(layersList);