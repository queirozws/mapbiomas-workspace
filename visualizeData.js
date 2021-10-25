/**
 * @Author: Wildson Queiroz
 * @Data: 18/10/2021
 * @Name: visualizeData.js
 */
 
var products = [
    {
        asset_id: "projects/mapbiomas-workspace/COLECAO6/classificacao",
        description: 'Dados de classificação da coleção 6 do Brasil',
        collection: 6,
        initiative: 'brazil',
        theme: 'classification',
        type: 'mosaic-singleband',
        countries: ['brazil'],
        source: ["source1", "source2"],
        metadata: {
            bands: {
                prefix: 'classification',
            },
            years: [
                "1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993",
                "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002",
                "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011",
                "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"
              ],
            biome: ["biome"],
            version: '1',
        }
    },
    {
        asset_id: "projects/mapbiomas-workspace/public/collection6/mapbiomas_collection60_integration_v1",
        description: 'Dados integrados da coleção 6 do Brasil',
        collection: 6,
        initiative: 'brazil',
        theme: 'integration',
        type: 'transitions-multiband', // | "classification-singleband" | "mosaic-multiband",
        countries: ['brazil'],
        source: ["source1", "source2"],
        metadata: {
            bands: {
                prefix: 'classification_',
            },
            years: [
                "1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993",
                "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002",
                "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011",
                "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"
              ],
            biome: ["biome"],
            version: '1',
        }
    },
    {
        asset_id: "projects/mapbiomas-workspace/public/collection6/mapbiomas_collection60_transitions_v1",
        description: 'Dados de transições da coleção 6 do Brasil',
        collection: 6,
        initiative: 'brazil',
        theme: 'transitions',
        type: 'transitions-multiband',
        countries: ['brazil'],
        source: ["source1", "source2"],
        metadata: {
            bands: {
                prefix: 'transitions_',
            },
            years: [ ],
            biome: ["biome"],
            version: '1',
        }
    },
    {
        asset_id: "projects/MapBiomas_Pampa/public/collection1/mapbiomas_pampa_collection1_transitions_v1",
        description: 'Dados de transição da coleção 1 do Pampa',
        collection: 1,
        initiative: 'pampa',
        theme: 'transitions',
        type: 'transitions-multiband',
        countries: ['brazil', 'argentina', 'uruguay'],
        source: ["source1", "source2"],
        metadata: {
            bands: {
                prefix: 'transition_',
            },
            years: [
                [2000, 2001], [2001, 2002], [2002, 2003], [2003, 2004], [2004, 2005], [2005, 2006],
                [2006, 2007], [2007, 2008], [2008, 2009], [2009, 2010], [2010, 2011], [2011, 2012],
                [2012, 2013], [2013, 2014], [2014, 2015], [2015, 2016], [2016, 2017], [2017, 2018],
                [2018, 2019], [2000, 2005], [2005, 2010], [2010, 2015], [2015, 2019], [2000, 2010],
                [2010, 2019], [2000, 2019]
              ],
            biome: ["biome"],
            version: '1',
        }
    },
    {
        asset_id: "projects/MapBiomas_Pampa/public/collection1/mapbiomas_pampa_collection1_integration_v1",
        description: 'Dados de integração da coleção 1 do Pampa',
        collection: 1,
        initiative: 'pampa',
        theme: 'Integration',
        type: 'transitions-multiband',
        countries: ['brazil', 'argentina', 'uruguay'],
        source: ["source1", "source2"],
        metadata: {
            bands: {
                prefix: 'classification_',
            },
            year: [
                "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009",
                "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"
            ],
            biome: ["biome"],
            version: '1',
        }
    },
    {
        asset_id: "projects/MapBiomas_Pampa/public/collection1/mapbiomas_pampa_collection1_quality_v1",
        description: 'Dados de qualidade da coleção 1 do Pampa',
        collection: 1,
        initiative: 'pampa',
        theme: 'quality',
        type: 'transitions-multiband',
        countries: ['brazil', 'argentina', 'uruguay'],
        source: ["source1", "source2"],
        metadata: {
            bands: {
                prefix: 'transitions_',
            },
            suffix: 'classification_',
            year: "year",
            biome: ["biome"],
            version: '1',
        }
    },
    {
        asset_id: "projects/mapbiomas-chaco/public/collection2/mapbiomas_chaco_collection2_transitions_v1",
        description: '',
        collection: 2,
        initiative: 'chaco',
        theme: 'transitions',
        type: 'transitions-multiband',
        countries: [],
        source: ["source1", "source2"],
        metadata: {
            bands: {
                prefix: 'transition_',
            },
            suffix: 'classification_',
            year: "year",
            biome: ["biome"],
            version: '1',
        }
    },
    {
        asset_id: "projects/mapbiomas-chaco/public/collection2/mapbiomas_chaco_collection2_integration_v1",
        description: '',
        collection: 2,
        initiative: 'chaco',
        theme: 'Integration',
        type: 'transitions-multiband',
        countries: [],
        source: ["source1", "source2"],
        metadata: {
            bands: {
                prefix: 'transitions_',
            },
            suffix: 'classification_',
            year: "year",
            biome: ["biome"],
            version: '1',
        }
    },
    {
        asset_id: "projects/mapbiomas-indonesia/public/collection1/mapbiomas_indonesia_collection1_transitions_v1",
        description: '',
        collection: 1,
        initiative: 'indonésia',
        theme: 'transitions',
        type: 'transitions-multiband',
        countries: ['indonésia'],
        source: ["source1", "source2"],
        metadata: {
            bands: {
                prefix: 'transition_',
            },
            suffix: 'classification_',
            year: "year",
            biome: ["biome"],
            version: '1',
        }
    },
    {
        asset_id: "projects/mapbiomas-indonesia/public/collection1/mapbiomas_indonesia_collection1_integration_v1",
        description: '',
        collection: 1,
        initiative: 'indonésia',
        theme: 'Integration',
        type: 'transitions-multiband',
        countries: ['indonésia'],
        source: ["source1", "source2"],
        metadata: {
            bands: {
                prefix: 'classification_',
            },
            suffix: 'classification_',
            year: "year",
            biome: ["biome"],
            version: '1',
        }
    },
    {
        asset_id: "projects/mapbiomas-indonesia/public/collection1/mapbiomas_indonesia_collection1_quality_v1",
        description: '',
        collection: 1,
        initiative: 'indonésia',
        theme: 'quality',
        type: 'transitions-multiband',
        countries: ['indonésia'],
        source: ["source1", "source2"],
        metadata: {
            bands: {
                prefix: 'quality_',
            },
            suffix: 'classification_',
            year: "year",
            biome: ["biome"],
            version: '1',
        }
    },
    {
        asset_id: "projects/mapbiomas-indonesia/public/collection1/mapbiomas_indonesia_collection1_transitions_v2",
        description: '',
        collection: 1,
        initiative: 'indonésia',
        theme: 'transitions',
        type: 'transitions-multiband',
        countries: ['indonésia'],
        source: ["source1", "source2"],
        metadata: {
            bands: {
                prefix: 'transition_',
            },
            year: "year",
            biome: ["biome"],
            version: '1',
        }
    },
    {
        asset_id: "projects/mapbiomas-raisg/public/collection3/mapbiomas_raisg_panamazonia_quality_v1",
        description: '',
        collection: 3,
        initiative: 'raisg',
        theme: 'quality',
        type: 'transitions-multiband',
        countries: [],
        source: ["source1", "source2"],
        metadata: {
            bands: {
                prefix: 'quality_',
            },
            year: "year",
            biome: ["biome"],
            version: '1',
        }
    },
    {
        asset_id: "projects/mapbiomas-raisg/public/collection3/mapbiomas_raisg_panamazonia_collection3_integration_v1",
        description: '',
        collection: 3,
        initiative: 'raisg',
        theme: 'Integration',
        type: 'transitions-multiband',
        countries: [],
        source: ["source1", "source2"],
        metadata: {
            bands: {
                prefix: 'classification_',
            },
            year: "year",
            biome: ["biome"],
            version: '1',
        }
    },
    {
        asset_id: "projects/mapbiomas-raisg/public/collection3/mapbiomas_raisg_panamazonia_collection3_integration_v2",
        description: '',
        collection: 3,
        initiative: 'raisg',
        theme: 'Integration',
        type: 'transitions-multiband',
        countries: [],
        source: ["source1", "source2"],
        metadata: {
            bands: {
                prefix: 'classification_',
            },
            year: "year",
            biome: ["biome"],
            version: '1',
        }
    },
    {
        asset_id: "projects/mapbiomas-raisg/public/collection3/mapbiomas_raisg_panamazonia_collection3_transitions_v1",
        description: '',
        collection: 3,
        initiative: 'raisg',
        theme: 'transitions',
        type: 'transitions-multiband',
        countries: [],
        source: ["source1", "source2"],
        metadata: {
            bands: {
                prefix: 'transition_',
            },
            year: "year",
            biome: ["biome"],
            version: '1',
        }
    },
    {
        asset_id: "projects/mapbiomas-raisg/public/collection3/mapbiomas_raisg_panamazonia_collection3_transitions_v2",
        description: '',
        collection: 3,
        initiative: 'raisg',
        theme: 'transitions',
        type: 'transitions-multiband',
        countries: [],
        source: ["source1", "source2"],
        metadata: {
            bands: {
                prefix: 'transition_',
            },
            year: "year",
            biome: ["biome"],
            version: '1',
        }
    },
    {
        asset_id: "projects/mapbiomas_af_trinacional/public/collection1/mapbiomas_atlantic_forest_collection1_integration_v1",
        description: '',
        collection: 1,
        initiative: 'af-trinacional',
        theme: 'Integration',
        type: 'transitions-multiband',
        countries: [],
        source: ["source1", "source2"],
        metadata: {
            bands: {
                prefix: 'transition_',
            },
            year: "year",
            biome: ["biome"],
            version: '1',
        }
    },
    {
        asset_id: "projects/mapbiomas_af_trinacional/public/collection1/mapbiomas_atlantic_forest_collection1_quality_v1",
        description: '',
        collection: 1,
        initiative: 'af-trinacional',
        theme: 'quality',
        type: 'transitions-multiband',
        countries: [],
        source: ["source1", "source2"],
        metadata: {
            bands: {
                prefix: 'transition_',
            },
            year: "year",
            biome: ["biome"],
            version: '1',
        }
    },
    {
        asset_id: "projects/mapbiomas_af_trinacional/public/collection1/mapbiomas_atlantic_forest_collection1_transitions_v1",
        description: '',
        collection: 1,
        initiative: 'af-trinacional',
        theme: 'transitions',
        type: 'transitions-multiband',
        countries: [],
        source: ["source1", "source2"],
        metadata: {
            bands: {
                prefix: 'transition_',
            },
            year: "year",
            biome: ["biome"],
            version: '1',
        }
    },

]


function callback(assetInfo, failure) {

    if (assetInfo) {
      
        var id = assetInfo.id;
        
        var assetName = id.split('/').slice(-1)[0];
        
        var image = ee.Image(id);
        
        switch ( assetInfo.type ) {
          
            case "Image":
              
                image = ee.Image(id);
                
                print(assetName, 'bandas: ', image.bandNames())
                
                Map.addLayer(image, {}, assetName, true, 1);
                
                // break;
                return 'Image'
        
            case "ImageCollection":

                print('imageCollection:', assetName)
              
                image = ee.ImageCollection(assetInfo.id).mosaic()
                
                Map.addLayer(image, {}, assetName, true, 1);
              
                // break;
                return 'ImageCollection'
        
            default:
                print('Não é uma Image ou ImageCollection');
        
        }
        
    } else {
      
        console.log('Asset não encontrado: ', assetInfo)
    
    }

}

products.forEach(
    function(obj) {
      
        ee.data.getAsset(obj.assetId, callback)

    })