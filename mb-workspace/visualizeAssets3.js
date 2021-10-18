var products = [
    {
        initiative: 'Brasil',
        // name: 'Brasil Integration',
        type: 'Integration',
        assetId: "projects/mapbiomas-workspace/public/collection6/mapbiomas_collection60_integration_v1",
        metadata: {
            year: [1985, 2020], // [first year, last year]
            biome: "biome"
        },
    },
    {
        initiative: 'Brasil',
        // name: 'Brasil Integration',
        type: 'Transitions',
        assetId: "projects/mapbiomas-workspace/public/collection6/mapbiomas_collection60_transitions_v1",
        metadata: {
            year: [1985, 2020], // [first year, last year]
            biome: "biome"
        },
    },
    {
        initiative: 'Pampa',
        // name: 'Pampa Transitions',
        type: 'Transitions',
        assetId: "projects/MapBiomas_Pampa/public/collection1/mapbiomas_pampa_collection1_transitions_v1",
        metadata: {
            year: "year",
            biome: "biome"
        },
    },
    {
        initiative: 'Pampa',
        // name: 'Pampa Integration',
        type: 'Integration',
        assetId: "projects/MapBiomas_Pampa/public/collection1/mapbiomas_pampa_collection1_integration_v1",
        metadata: {
            year: "year",
            biome: "biome"
        },
    },
    {
        initiative: 'Pampa',
        // name: 'Pampa Quality',
        type: 'Quality',
        assetId: "projects/MapBiomas_Pampa/public/collection1/mapbiomas_pampa_collection1_quality_v1",
        metadata: {
            year: "year",
            biome: "biome"
        },
    },
    {
        initiative: 'Chaco',
        // name: 'Chaco Transitions',
        type: 'Transitions',
        assetId: "projects/mapbiomas-chaco/public/collection2/mapbiomas_chaco_collection2_transitions_v1",
        metadata: {
            year: "year",
            biome: "biome"
        },
    },
    {
        initiative: 'Chaco',
        // name: 'Chaco Integration',
        type: 'Integration',
        assetId: "projects/mapbiomas-chaco/public/collection2/mapbiomas_chaco_collection2_integration_v1_",
        metadata: {
            year: "year",
            biome: "biome"
        },
    },
    {
        initiative: 'Chaco',
        // name: 'Chaco Integration',
        type: 'Integration',
        assetId: "projects/mapbiomas-chaco/public/collection2/mapbiomas_chaco_collection2_integration_v1",
        metadata: {
            year: "year",
            biome: "biome"
        },
    },
    {
        initiative: 'Indonésia',
        // name: 'Indonésia Integration',
        type: 'Integration',
        assetId: "projects/mapbiomas-indonesia/public/collection1/mapbiomas_indonesia_collection1_integration_v1",
        metadata: {
            year: "year",
            biome: "biome"
        },
    },
    {
        initiative: 'Indonésia',
        // name: 'Indonésia Quality',
        type: 'Quality',
        assetId: "projects/mapbiomas-indonesia/public/collection1/mapbiomas_indonesia_collection1_quality_v1",
        metadata: {
            year: "year",
            biome: "biome"
        },
    },
    {
        initiative: 'Indonésia',
        // name: 'Indonésia Transitions',
        type: 'Transitions',
        assetId: "projects/mapbiomas-indonesia/public/collection1/mapbiomas_indonesia_collection1_transitions_v1",
        metadata: {
            year: "year",
            biome: "biome"
        },
    },
    {
        initiative: 'Indonésia',
        // name: 'Indonésia Transitions',
        type: 'Transitions',
        assetId: "projects/mapbiomas-indonesia/public/collection1/mapbiomas_indonesia_collection1_transitions_v2",
        metadata: {
            year: "year",
            biome: "biome"
        },
    },
    {
        initiative: 'RAISG',
        // name: 'RAISG Quality',
        type: 'Quality',
        assetId: "projects/mapbiomas-raisg/public/collection3/mapbiomas_raisg_panamazonia_quality_v1",
        metadata: {
            year: "year",
            biome: "biome"
        },
    },
    {
        initiative: 'RAISG',
        // name: 'RAISG Integration',
        type: 'Integration',
        assetId: "projects/mapbiomas-raisg/public/collection3/mapbiomas_raisg_panamazonia_collection3_integration_v1",
        metadata: {
            year: "year",
            biome: "biome"
        },
    },
    {
        initiative: 'RAISG',
        // name: 'RAISG Integration',
        type: 'Integration',
        assetId: "projects/mapbiomas-raisg/public/collection3/mapbiomas_raisg_panamazonia_collection3_integration_v2",
        metadata: {
            year: "year",
            biome: "biome"
        },
    },
    {
        initiative: 'RAISG',
        // name: 'RAISG Transitions',
        type: 'Transitions',
        assetId: "projects/mapbiomas-raisg/public/collection3/mapbiomas_raisg_panamazonia_collection3_transitions_v1",
        metadata: {
            year: "year",
            biome: "biome"
        },
    },
    {
        initiative: 'RAISG',
        // name: 'RAISG Transitions',
        type: 'Transitions',
        assetId: "projects/mapbiomas-raisg/public/collection3/mapbiomas_raisg_panamazonia_collection3_transitions_v2",
        metadata: {
            year: "year",
            biome: "biome"
        },
    },
    {
        initiative: 'AF Trinacional',
        // name: 'AF Trinacional Integration',
        type: 'Integration',
        assetId: "projects/mapbiomas_af_trinacional/public/collection1/mapbiomas_atlantic_forest_collection1_integration_v1",
        metadata: {
            year: "year",
            biome: "biome"
        },
    },
    {
        initiative: 'AF Trinacional',
        // name: 'AF Trinacional Quality',
        type: 'Quality',
        assetId: "projects/mapbiomas_af_trinacional/public/collection1/mapbiomas_atlantic_forest_collection1_quality_v1",
        metadata: {
            year: "year",
            biome: "biome"
        },
    },
    {
        initiative: 'AF Trinacional',
        // name: 'AF Trinacional Transitions',
        type: 'Transitions',
        assetId: "projects/mapbiomas_af_trinacional/public/collection1/mapbiomas_atlantic_forest_collection1_transitions_v1",
        metadata: {
            year: "year",
            biome: "biome"
        },
    },

]

products.forEach(
    function(obj) {
        print(obj.initiative)
        
        // Map.addLayer(ee.Image(obj.assetId), {}, obj.initiative, true, 1)
    })
    
print(ee.List(products).length())

var layersList = Map.layers();

// 
print(layersList);
