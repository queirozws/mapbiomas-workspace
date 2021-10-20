/**
 * @Author: Wildson Queiroz
 * 
 */

var assetIdList = [
    "projects/mapbiomas-workspace/public/collection6/mapbiomas_collection60_integration_v1",
    "projects/mapbiomas-workspace/public/collection6/mapbiomas_collection60_transitions_v1",
    "projects/mapbiomas-workspace/COLECAO6/classificacao",
    "projects/MapBiomas_Pampa/public/collection1/mapbiomas_pampa_collection1_transitions_v1",
    "projects/MapBiomas_Pampa/public/collection1/mapbiomas_pampa_collection1_integration_v1",
    "projects/MapBiomas_Pampa/public/collection1/mapbiomas_pampa_collection1_quality_v1",
    "projects/mapbiomas-chaco/public/collection2/mapbiomas_chaco_collection2_transitions_v1",
    "projects/mapbiomas-chaco/public/collection2/mapbiomas_chaco_collection2_integration_v1_",
    "projects/mapbiomas-chaco/public/collection2/mapbiomas_chaco_collection2_integration_v1",
    "projects/mapbiomas-indonesia/public/collection1/mapbiomas_indonesia_collection1_integration_v1",
    "projects/mapbiomas-indonesia/public/collection1/mapbiomas_indonesia_collection1_quality_v1",
    "projects/mapbiomas-indonesia/public/collection1/mapbiomas_indonesia_collection1_transitions_v1",
    "projects/mapbiomas-indonesia/public/collection1/mapbiomas_indonesia_collection1_transitions_v2",
    "projects/mapbiomas-raisg/public/collection3/mapbiomas_raisg_panamazonia_quality_v1",
    "projects/mapbiomas-raisg/public/collection3/mapbiomas_raisg_panamazonia_collection3_integration_v1",
    "projects/mapbiomas-raisg/public/collection3/mapbiomas_raisg_panamazonia_collection3_integration_v2",
    "projects/mapbiomas-raisg/public/collection3/mapbiomas_raisg_panamazonia_collection3_transitions_v1",
    "projects/mapbiomas-raisg/public/collection3/mapbiomas_raisg_panamazonia_collection3_transitions_v2",
    "projects/mapbiomas_af_trinacional/public/collection1/mapbiomas_atlantic_forest_collection1_integration_v1",
    "projects/mapbiomas_af_trinacional/public/collection1/mapbiomas_atlantic_forest_collection1_quality_v1",
    "projects/mapbiomas_af_trinacional/public/collection1/mapbiomas_atlantic_forest_collection1_transitions_v1",
]

var products = [
    {
        initiative: 'brazil',
        theme: 'classification',
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
            biome: "all",
            countries: [],
            type: 'mosaic-singleband',
            version: '1'
        },
    },
    {
        initiative: 'brazil', // inglês, minúscula; nome composto usar "-";
        theme: 'integration', // usar letras minúsculas
        collection: 6,
        assetId: "projects/mapbiomas-workspace/public/collection6/mapbiomas_collection60_integration_v1",
        description: 'Dados integrados da coleção 6 do Brasil', // Usar português
        metadata: {
            bands: {
                suffix: 'classification_',
            },
            years: [
                "1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993",
                "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002",
                "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011",
                "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"
              ],
            biome: "all",
            countries: [],
            type: 'transitions-multiband', // | "classification-singleband" | "mosaic-multiband",
            version: '1' // exemplo | "1" (padrão usado João)
        },
    },
    {
        initiative: 'brazil',
        theme: 'transitions',
        collection: 6,
        assetId: "projects/mapbiomas-workspace/public/collection6/mapbiomas_collection60_transitions_v1",
        description: 'Dados de transições da coleção 6 do Brasil',
        metadata: {
            bands: {
                suffix: 'transitions_',
            },
            years: [ ],
            biome: "all",
            countries: [],
            type: 'transitions-multiband',
            version: '1'
        },
    },
    {
        initiative: 'pampa',
        theme: 'Integration',
        collection: 1,
        assetId: "projects/MapBiomas_Pampa/public/collection1/mapbiomas_pampa_collection1_integration_v1",
        description: 'Dados de integração da coleção 1 do Pampa',
        metadata: {
            bands: {
                suffix: 'classification_',
            },
            year: [
                "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009",
                "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"
            ],
            biome: "pampa",
            countries: ['brazil', 'argentina', 'uruguay'],
            type: 'transitions-multiband',
            version: '1'
        },
    },
    {
        initiative: 'pampa',
        theme: 'transitions',
        collection: 1,
        assetId: "projects/MapBiomas_Pampa/public/collection1/mapbiomas_pampa_collection1_transitions_v1",
        description: 'Dados de transição da coleção 1 do Pampa',
        metadata: {
            bands: {
                suffix: 'transition_',
                bandNames: [
                    "transition_2000_2001", "transition_2001_2002", "transition_2002_2003",
                    "transition_2003_2004", "transition_2004_2005", "transition_2005_2006",
                    "transition_2006_2007", "transition_2007_2008", "transition_2008_2009",
                    "transition_2009_2010", "transition_2010_2011", "transition_2011_2012",
                    "transition_2012_2013", "transition_2013_2014", "transition_2014_2015",
                    "transition_2015_2016", "transition_2016_2017", "transition_2017_2018",
                    "transition_2018_2019", "transition_2000_2005", "transition_2005_2010",
                    "transition_2010_2015", "transition_2015_2019", "transition_2000_2010",
                    "transition_2010_2019", "transition_2000_2019"
                  ]
            },
            years: [
                [2000, 2001], [2001, 2002], [2002, 2003], [2003, 2004], [2004, 2005], [2005, 2006],
                [2006, 2007], [2007, 2008], [2008, 2009], [2009, 2010], [2010, 2011], [2011, 2012],
                [2012, 2013], [2013, 2014], [2014, 2015], [2015, 2016], [2016, 2017], [2017, 2018],
                [2018, 2019], [2000, 2005], [2005, 2010], [2010, 2015], [2015, 2019], [2000, 2010],
                [2010, 2019], [2000, 2019]
              ],
            biome: "biome",
            countries: ['brazil', 'argentina', 'uruguay'],
            type: 'transitions-multiband',
            version: '1'
        },
    },
    {
        initiative: 'pampa',
        theme: 'quality',
        collection: 1,
        assetId: "projects/MapBiomas_Pampa/public/collection1/mapbiomas_pampa_collection1_quality_v1",
        description: 'Dados de qualidade da coleção 1 do Pampa',
        metadata: {
            bands: {
                suffix: 'transitions_',
            },
            suffix: 'classification_',
            year: "year",
            biome: "biome",
            countries: ['brazil', 'argentina', 'uruguay'],
            type: 'transitions-multiband',
            version: '1'
        },
    },
    {
        initiative: 'chaco',
        theme: 'transitions',
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
            countries: [],
            type: 'transitions-multiband',
            version: '1'
        },
    },
    {
        initiative: 'chaco',
        theme: 'Integration',
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
            countries: [],
            type: 'transitions-multiband',
            version: '1'
        },
    },
    {
        initiative: 'chaco',
        theme: 'Integration',
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
            countries: [],
            type: 'transitions-multiband',
            version: '1'
        },
    },
    {
        initiative: 'indonésia',
        theme: 'Integration',
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
            countries: [],
            type: 'transitions-multiband',
            version: '1'
        },
    },
    {
        initiative: 'indonésia',
        theme: 'quality',
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
            countries: [],
            type: 'transitions-multiband',
            version: '1'
        },
    },
    {
        initiative: 'indonésia',
        theme: 'transitions',
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
            countries: [],
            type: 'transitions-multiband',
            version: '1'
        },
    },
    {
        initiative: 'indonésia',
        theme: 'transitions',
        collection: 6,
        assetId: "projects/mapbiomas-indonesia/public/collection1/mapbiomas_indonesia_collection1_transitions_v2",
        description: '',
        metadata: {
            bands: {
                suffix: 'transitions_',
            },
            year: "year",
            biome: "biome",
            countries: [],
            type: 'transitions-multiband',
            version: '1'
        },
    },
    {
        initiative: 'raisg',
        theme: 'quality',
        collection: 6,
        assetId: "projects/mapbiomas-raisg/public/collection3/mapbiomas_raisg_panamazonia_quality_v1",
        description: '',
        metadata: {
            bands: {
                suffix: 'transitions_',
            },
            year: "year",
            biome: "biome",
            countries: [],
            type: 'transitions-multiband',
            version: '1'
        },
    },
    {
        initiative: 'raisg',
        theme: 'Integration',
        collection: 6,
        assetId: "projects/mapbiomas-raisg/public/collection3/mapbiomas_raisg_panamazonia_collection3_integration_v1",
        description: '',
        metadata: {
            bands: {
                suffix: 'transitions_',
            },
            year: "year",
            biome: "biome",
            countries: [],
            type: 'transitions-multiband',
            version: '1'
        },
    },
    {
        initiative: 'raisg',
        theme: 'Integration',
        collection: 6,
        assetId: "projects/mapbiomas-raisg/public/collection3/mapbiomas_raisg_panamazonia_collection3_integration_v2",
        description: '',
        metadata: {
            bands: {
                suffix: 'transitions_',
            },
            year: "year",
            biome: "biome",
            countries: [],
            type: 'transitions-multiband',
            version: '1'
        },
    },
    {
        initiative: 'raisg',
        theme: 'transitions',
        collection: 6,
        assetId: "projects/mapbiomas-raisg/public/collection3/mapbiomas_raisg_panamazonia_collection3_transitions_v1",
        description: '',
        metadata: {
            bands: {
                suffix: 'transitions_',
            },
            year: "year",
            biome: "biome",
            countries: [],
            type: 'transitions-multiband',
            version: '1'
        },
    },
    {
        initiative: 'raisg',
        theme: 'transitions',
        collection: 6,
        assetId: "projects/mapbiomas-raisg/public/collection3/mapbiomas_raisg_panamazonia_collection3_transitions_v2",
        description: '',
        metadata: {
            bands: {
                suffix: 'transitions_',
            },
            year: "year",
            biome: "biome",
            countries: [],
            type: 'transitions-multiband',
            version: '1'
        },
    },
    {
        initiative: 'af-trinacional',
        theme: 'Integration',
        collection: 6,
        assetId: "projects/mapbiomas_af_trinacional/public/collection1/mapbiomas_atlantic_forest_collection1_integration_v1",
        description: '',
        metadata: {
            bands: {
                suffix: 'transitions_',
            },
            year: "year",
            biome: "biome",
            countries: [],
            type: 'transitions-multiband',
            version: '1'
        },
    },
    {
        initiative: 'af-trinacional',
        theme: 'quality',
        collection: 6,
        assetId: "projects/mapbiomas_af_trinacional/public/collection1/mapbiomas_atlantic_forest_collection1_quality_v1",
        description: '',
        metadata: {
            bands: {
                suffix: 'transitions_',
            },
            year: "year",
            biome: "biome",
            countries: [],
            type: 'transitions-multiband',
            version: '1'
        },
    },
    {
        initiative: 'af-trinacional',
        theme: 'transitions',
        collection: 6,
        assetId: "projects/mapbiomas_af_trinacional/public/collection1/mapbiomas_atlantic_forest_collection1_transitions_v1",
        description: '',
        metadata: {
            bands: {
                suffix: 'transitions_',
            },
            year: "year",
            biome: "biome",
            countries: [],
            type: 'transitions-multiband',
            version: '1'
        },
    },

]

// Function: Identify the data type AND return de asset (e.g.: Image, ImageCollection...)

// function getDataType(assetId, callback) {
    
//     ee.data.getAsset(assetId, callback)
// }


function callback(assetInfo, failure) {

    if (assetInfo) {
            
        var id = assetInfo.id;
        
        // print(asset);
        
        var assetName = id.split('/').slice(-1)[0];
        
        var image = ee.Image();
            
        // switch ( ee.data.getAsset(assetId, callback).type ) {
        switch ( assetInfo.type ) {
          
            case "Image":
              
                // print(ee.String(id).split('/').get(2))
                // print('image:', assetName)
              
                image = ee.Image(id);
                
                print(assetName, image.bandNames())
                
                // Map.addLayer(image, {}, assetName, true, 1);s
                
                // ui.Map.Layer(image, {}, 'name')
              
                // break;
                return 'Image'
        
            case "ImageCollection":

                print('imageCollection:', assetName)
              
                image = ee.ImageCollection(assetInfo.id).mosaic()
                
                // Map.addLayer(image, {}, assetName, true, 1);
              
                // break;
                return 'ImageCollection'
        
            default:
                print('Não é uma Image ou ImageCollection');
        
        }
        
    } else {
      
        console.log('Asset não encontrado: ', assetName)
    
    }

}


products.forEach(
// var output = products.map(
    function(obj) {
      
        var foo = 'string'
      
        // print(obj.initiative)
        
        ee.data.getAsset(obj.assetId, callback)
        // var output = ee.data.getAsset(obj.assetId)//, callback)
        
        // return ee.data.getAsset(asset.assetId)//, callback)
        
        // Map.addLayer(ee.Image(obj.assetId), {}, obj.initiative, true, 1)
    })
    
// print('output', output);

//  0: Image projects/mapbiomas-workspace/public/collection6/mapbiomas_collection60_integration_v1 (36 bands)
//    type: Image
//    id: projects/mapbiomas-workspace/public/collection6/mapbiomas_collection60_integration_v1
//    version: 1630036058990000
//    bands: List (36 elements)
//    properties: Object (2 properties)

// var layersList = Map.layers();

// 
// print(layersList);