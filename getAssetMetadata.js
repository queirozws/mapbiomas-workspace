var assetIdList = [
    "projects/mapbiomas-workspace/public/collection6/mapbiomas_collection60_integration_v1",
    "projects/mapbiomas-workspace/public/collection6/mapbiomas_collection60_transitions_v1",
    "projects/mapbiomas-workspace/COLECAO6/classificacao",
    "projects/MapBiomas_Pampa/public/collection1/mapbiomas_pampa_collection1_transitions_v1",
    "projects/MapBiomas_Pampa/public/collection1/mapbiomas_pampa_collection1_integration_v1",
    "projects/MapBiomas_Pampa/public/collection1/mapbiomas_pampa_collection1_quality_v1",
    // "projects/mapbiomas-chaco/public/collection2/mapbiomas_chaco_collection2_transitions_v1",
    // "projects/mapbiomas-chaco/public/collection2/mapbiomas_chaco_collection2_integration_v1_",
    // "projects/mapbiomas-chaco/public/collection2/mapbiomas_chaco_collection2_integration_v1",
    // "projects/mapbiomas-indonesia/public/collection1/mapbiomas_indonesia_collection1_integration_v1",
    // "projects/mapbiomas-indonesia/public/collection1/mapbiomas_indonesia_collection1_quality_v1",
    // "projects/mapbiomas-indonesia/public/collection1/mapbiomas_indonesia_collection1_transitions_v1",
    // "projects/mapbiomas-indonesia/public/collection1/mapbiomas_indonesia_collection1_transitions_v2",
    // "projects/mapbiomas-raisg/public/collection3/mapbiomas_raisg_panamazonia_quality_v1",
    // "projects/mapbiomas-raisg/public/collection3/mapbiomas_raisg_panamazonia_collection3_integration_v1",
    // "projects/mapbiomas-raisg/public/collection3/mapbiomas_raisg_panamazonia_collection3_integration_v2",
    // "projects/mapbiomas-raisg/public/collection3/mapbiomas_raisg_panamazonia_collection3_transitions_v1",
    // "projects/mapbiomas-raisg/public/collection3/mapbiomas_raisg_panamazonia_collection3_transitions_v2",
    // "projects/mapbiomas_af_trinacional/public/collection1/mapbiomas_atlantic_forest_collection1_integration_v1",
    // "projects/mapbiomas_af_trinacional/public/collection1/mapbiomas_atlantic_forest_collection1_quality_v1",
    // "projects/mapbiomas_af_trinacional/public/collection1/mapbiomas_atlantic_forest_collection1_transitions_v1",
]

var obj = {
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
    }
}


var metadataList = assetIdList.map(
    function(assetId) {
        
        var image = ee.Image(assetId);

        return {
            initiative: 'pampa',
            theme: 'transitions',
            collection: 1,
            assetId: assetId,
            metadata: {
                suffix: 'suffix_',
                bandNames: image.bandNames(),
            }
        }
    }
)

print(metadataList);

var str = 'Ouviram do Ipiranga às margens plácidas, de um povo um heróico brado retumbante';

print(ee.String(str).match("marg"));


