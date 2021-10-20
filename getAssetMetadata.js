var assetIdList = [
    "projects/mapbiomas-workspace/public/collection6/mapbiomas_collection60_integration_v1",
    // "projects/mapbiomas-workspace/public/collection6/mapbiomas_collection60_transitions_v1",
    // "projects/mapbiomas-workspace/COLECAO6/classificacao",
    // "projects/MapBiomas_Pampa/public/collection1/mapbiomas_pampa_collection1_transitions_v1",
    // "projects/MapBiomas_Pampa/public/collection1/mapbiomas_pampa_collection1_integration_v1",
    // "projects/MapBiomas_Pampa/public/collection1/mapbiomas_pampa_collection1_quality_v1",
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

var metadataList = assetIdList.map(
    function(assetId) {
        
        var image = ee.Image(assetId);

        return {
            assetId: assetId,
            metadata: {
                suffix: 'suffix_',
                bandNames: image.bandNames(),
            }
        }
    }
)

print(metadataList);

