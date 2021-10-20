/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var imageCollection = ee.ImageCollection("projects/mapbiomas-workspace/COLECAO6/classificacao");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
/**
 * @Author: Wildson Queiroz
 * 
 */
 
// print(imageCollection.mosaic());

var products = [
    {
        initiative: 'brazil',
        theme: 'classification',
        collection: 6,
        assetId: "projects/mapbiomas-workspace/COLECAO6/classificacao",
        description: 'Dados de classificação da coleção 6 do Brasil',
        metadata: {
            bands: {
                suffix: 'classification',
                bandNames: [],
            },
            years: [
                "1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993",
                "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002",
                "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011",
                "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"
              ],
            biome: "all",
            countries: [],
            type: 'mosaic-singleband',
            version: '1'
        },
    },
    {
        initiative: 'brazil',
        theme: 'integration',
        collection: 6,
        assetId: "projects/mapbiomas-workspace/public/collection6/mapbiomas_collection60_integration_v1",
        description: 'Dados integrados da coleção 6 do Brasil', // Usar português
        metadata: {
            bands: {
                suffix: 'classification_',
                bandNames: [
                    "classification_1985",
                    "classification_1986",
                    "classification_1987",
                    "classification_1988",
                    "classification_1989",
                    "classification_1990",
                    "classification_1991",
                    "classification_1992",
                    "classification_1993",
                    "classification_1994",
                    "classification_1995",
                    "classification_1996",
                    "classification_1997",
                    "classification_1998",
                    "classification_1999",
                    "classification_2000",
                    "classification_2001",
                    "classification_2002",
                    "classification_2003",
                    "classification_2004",
                    "classification_2005",
                    "classification_2006",
                    "classification_2007",
                    "classification_2008",
                    "classification_2009",
                    "classification_2010",
                    "classification_2011",
                    "classification_2012",
                    "classification_2013",
                    "classification_2014",
                    "classification_2015",
                    "classification_2016",
                    "classification_2017",
                    "classification_2018",
                    "classification_2019",
                    "classification_2020"
                  ],
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
                bandNames: [
                    "transition_1985_1986",
                    "transition_1986_1987",
                    "transition_1987_1988",
                    "transition_1988_1989",
                    "transition_1989_1990",
                    "transition_1990_1991",
                    "transition_1991_1992",
                    "transition_1992_1993",
                    "transition_1993_1994",
                    "transition_1994_1995",
                    "transition_1995_1996",
                    "transition_1996_1997",
                    "transition_1997_1998",
                    "transition_1998_1999",
                    "transition_1999_2000",
                    "transition_2000_2001",
                    "transition_2001_2002",
                    "transition_2002_2003",
                    "transition_2003_2004",
                    "transition_2004_2005",
                    "transition_2005_2006",
                    "transition_2006_2007",
                    "transition_2007_2008",
                    "transition_2008_2009",
                    "transition_2009_2010",
                    "transition_2010_2011",
                    "transition_2011_2012",
                    "transition_2012_2013",
                    "transition_2013_2014",
                    "transition_2014_2015",
                    "transition_2015_2016",
                    "transition_2016_2017",
                    "transition_2017_2018",
                    "transition_2018_2019",
                    "transition_2019_2020",
                    "transition_1985_1990",
                    "transition_1990_1995",
                    "transition_1995_2000",
                    "transition_2000_2005",
                    "transition_2005_2010",
                    "transition_2010_2015",
                    "transition_2015_2020",
                    "transition_1990_2000",
                    "transition_2000_2010",
                    "transition_2010_2020",
                    "transition_1985_2020",
                    "transition_2008_2020",
                    "transition_2012_2020",
                    "transition_1994_2002",
                    "transition_2002_2010",
                    "transition_2010_2016",
                    "transition_1990_2008",
                    "transition_1990_2020",
                    "transition_2000_2020",
                    "transition_2008_2018",
                    "transition_1986_2015",
                    "transition_2001_2016",
                    "transition_1996_2015"
                  ],
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
        theme: 'transitions',
        collection: 1,
        assetId: "projects/MapBiomas_Pampa/public/collection1/mapbiomas_pampa_collection1_transitions_v1",
        description: 'Dados de transição da coleção 1 do Pampa',
        metadata: {
            bands: {
                suffix: 'transition_',
                bandNames: [
                    "transition_2000_2001",
                    "transition_2001_2002",
                    "transition_2002_2003",
                    "transition_2003_2004",
                    "transition_2004_2005",
                    "transition_2005_2006",
                    "transition_2006_2007",
                    "transition_2007_2008",
                    "transition_2008_2009",
                    "transition_2009_2010",
                    "transition_2010_2011",
                    "transition_2011_2012",
                    "transition_2012_2013",
                    "transition_2013_2014",
                    "transition_2014_2015",
                    "transition_2015_2016",
                    "transition_2016_2017",
                    "transition_2017_2018",
                    "transition_2018_2019",
                    "transition_2000_2005",
                    "transition_2005_2010",
                    "transition_2010_2015",
                    "transition_2015_2019",
                    "transition_2000_2010",
                    "transition_2010_2019",
                    "transition_2008_2019",
                    "transition_2012_2019",
                    "transition_2002_2010",
                    "transition_2000_2019"
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
        theme: 'Integration',
        collection: 1,
        assetId: "projects/MapBiomas_Pampa/public/collection1/mapbiomas_pampa_collection1_integration_v1",
        description: 'Dados de integração da coleção 1 do Pampa',
        metadata: {
            bands: {
                suffix: 'classification_',
                bandNames: [
                    "classification_2000",
                    "classification_2001",
                    "classification_2002",
                    "classification_2003",
                    "classification_2004",
                    "classification_2005",
                    "classification_2006",
                    "classification_2007",
                    "classification_2008",
                    "classification_2009",
                    "classification_2010",
                    "classification_2011",
                    "classification_2012",
                    "classification_2013",
                    "classification_2014",
                    "classification_2015",
                    "classification_2016",
                    "classification_2017",
                    "classification_2018",
                    "classification_2019"
                  ],
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
        theme: 'quality',
        collection: 1,
        assetId: "projects/MapBiomas_Pampa/public/collection1/mapbiomas_pampa_collection1_quality_v1",
        description: 'Dados de qualidade da coleção 1 do Pampa',
        metadata: {
            bands: {
                suffix: 'transitions_',
                bandNames: [
                    "quality_2000",
                    "quality_2001",
                    "quality_2002",
                    "quality_2003",
                    "quality_2004",
                    "quality_2005",
                    "quality_2006",
                    "quality_2007",
                    "quality_2008",
                    "quality_2009",
                    "quality_2010",
                    "quality_2011",
                    "quality_2012",
                    "quality_2013",
                    "quality_2014",
                    "quality_2015",
                    "quality_2016",
                    "quality_2017",
                    "quality_2018",
                    "quality_2019"
                  ],
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
        collection: 2,
        assetId: "projects/mapbiomas-chaco/public/collection2/mapbiomas_chaco_collection2_transitions_v1",
        description: '',
        metadata: {
            bands: {
                suffix: 'transition_',
                bandNames: [
                    "transition_2000_2001",
                    "transition_2001_2002",
                    "transition_2002_2003",
                    "transition_2003_2004",
                    "transition_2004_2005",
                    "transition_2005_2006",
                    "transition_2006_2007",
                    "transition_2007_2008",
                    "transition_2008_2009",
                    "transition_2009_2010",
                    "transition_2010_2011",
                    "transition_2011_2012",
                    "transition_2012_2013",
                    "transition_2013_2014",
                    "transition_2014_2015",
                    "transition_2015_2016",
                    "transition_2016_2017",
                    "transition_2017_2018",
                    "transition_2018_2019",
                    "transition_2000_2005",
                    "transition_2005_2010",
                    "transition_2010_2015",
                    "transition_2015_2019",
                    "transition_2000_2010",
                    "transition_2010_2019",
                    "transition_2000_2019"
                  ],
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
        collection: 2,
        assetId: "projects/mapbiomas-chaco/public/collection2/mapbiomas_chaco_collection2_integration_v1",
        description: '',
        metadata: {
            bands: {
                suffix: 'transitions_',
                bandNames: [
                    "classification_2000",
                    "classification_2001",
                    "classification_2002",
                    "classification_2003",
                    "classification_2004",
                    "classification_2005",
                    "classification_2006",
                    "classification_2007",
                    "classification_2008",
                    "classification_2009",
                    "classification_2010",
                    "classification_2011",
                    "classification_2012",
                    "classification_2013",
                    "classification_2014",
                    "classification_2015",
                    "classification_2016",
                    "classification_2017",
                    "classification_2018",
                    "classification_2019"
                  ],
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
        collection: 1,
        assetId: "projects/mapbiomas-indonesia/public/collection1/mapbiomas_indonesia_collection1_transitions_v1",
        description: '',
        metadata: {
            bands: {
                suffix: 'transition_',
                bandNames: [
                    "transition_2000_2001",
                    "transition_2001_2002",
                    "transition_2002_2003",
                    "transition_2003_2004",
                    "transition_2004_2005",
                    "transition_2005_2006",
                    "transition_2006_2007",
                    "transition_2007_2008",
                    "transition_2008_2009",
                    "transition_2009_2010",
                    "transition_2010_2011",
                    "transition_2011_2012",
                    "transition_2012_2013",
                    "transition_2013_2014",
                    "transition_2014_2015",
                    "transition_2015_2016",
                    "transition_2016_2017",
                    "transition_2017_2018",
                    "transition_2018_2019",
                    "transition_2000_2005",
                    "transition_2005_2010",
                    "transition_2010_2015",
                    "transition_2015_2019",
                    "transition_2000_2010",
                    "transition_2010_2019",
                    "transition_2000_2019",
                    "transition_2011_2019",
                    "transition_2013_2019",
                    "transition_2014_2019",
                    "transition_2015_2019_1",
                    "transition_2004_2019"
                  ],
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
        collection: 1,
        assetId: "projects/mapbiomas-indonesia/public/collection1/mapbiomas_indonesia_collection1_integration_v1",
        description: '',
        metadata: {
            bands: {
                suffix: 'classification_',
                bandNames: [
                    "classification_2000",
                    "classification_2001",
                    "classification_2002",
                    "classification_2003",
                    "classification_2004",
                    "classification_2005",
                    "classification_2006",
                    "classification_2007",
                    "classification_2008",
                    "classification_2009",
                    "classification_2010",
                    "classification_2011",
                    "classification_2012",
                    "classification_2013",
                    "classification_2014",
                    "classification_2015",
                    "classification_2016",
                    "classification_2017",
                    "classification_2018",
                    "classification_2019"
                  ],
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
        collection: 1,
        assetId: "projects/mapbiomas-indonesia/public/collection1/mapbiomas_indonesia_collection1_quality_v1",
        description: '',
        metadata: {
            bands: {
                suffix: 'quality_',
                bandNames: [
                    "quality_2000",
                    "quality_2001",
                    "quality_2002",
                    "quality_2003",
                    "quality_2004",
                    "quality_2005",
                    "quality_2006",
                    "quality_2007",
                    "quality_2008",
                    "quality_2009",
                    "quality_2010",
                    "quality_2011",
                    "quality_2012",
                    "quality_2013",
                    "quality_2014",
                    "quality_2015",
                    "quality_2016",
                    "quality_2017",
                    "quality_2018",
                    "quality_2019"
                  ],
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
        collection: 1,
        assetId: "projects/mapbiomas-indonesia/public/collection1/mapbiomas_indonesia_collection1_transitions_v2",
        description: '',
        metadata: {
            bands: {
                suffix: 'transition_',
                bandNames: [
                    "transition_2000_2001",
                    "transition_2001_2002",
                    "transition_2002_2003",
                    "transition_2003_2004",
                    "transition_2004_2005",
                    "transition_2005_2006",
                    "transition_2006_2007",
                    "transition_2007_2008",
                    "transition_2008_2009",
                    "transition_2009_2010",
                    "transition_2010_2011",
                    "transition_2011_2012",
                    "transition_2012_2013",
                    "transition_2013_2014",
                    "transition_2014_2015",
                    "transition_2015_2016",
                    "transition_2016_2017",
                    "transition_2017_2018",
                    "transition_2018_2019",
                    "transition_2000_2005",
                    "transition_2005_2010",
                    "transition_2010_2015",
                    "transition_2015_2019",
                    "transition_2000_2010",
                    "transition_2010_2019",
                    "transition_2000_2019",
                    "transition_2011_2019",
                    "transition_2013_2019",
                    "transition_2014_2019",
                    "transition_2015_2019_1",
                    "transition_2004_2019"
                  ],
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
        collection: 3,
        assetId: "projects/mapbiomas-raisg/public/collection3/mapbiomas_raisg_panamazonia_quality_v1",
        description: '',
        metadata: {
            bands: {
                suffix: 'quality_',
                bandNames: [
                    "quality_1985",
                    "quality_1986",
                    "quality_1987",
                    "quality_1988",
                    "quality_1989",
                    "quality_1990",
                    "quality_1991",
                    "quality_1992",
                    "quality_1993",
                    "quality_1994",
                    "quality_1995",
                    "quality_1996",
                    "quality_1997",
                    "quality_1998",
                    "quality_1999",
                    "quality_2000",
                    "quality_2001",
                    "quality_2002",
                    "quality_2003",
                    "quality_2004",
                    "quality_2005",
                    "quality_2006",
                    "quality_2007",
                    "quality_2008",
                    "quality_2009",
                    "quality_2010",
                    "quality_2011",
                    "quality_2012",
                    "quality_2013",
                    "quality_2014",
                    "quality_2015",
                    "quality_2016",
                    "quality_2017",
                    "quality_2018",
                    "quality_2019",
                    "quality_2020"
                  ],
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
        collection: 3,
        assetId: "projects/mapbiomas-raisg/public/collection3/mapbiomas_raisg_panamazonia_collection3_integration_v1",
        description: '',
        metadata: {
            bands: {
                suffix: 'classification_',
                bandNames: [
                    "classification_1985",
                    "classification_1986",
                    "classification_1987",
                    "classification_1988",
                    "classification_1989",
                    "classification_1990",
                    "classification_1991",
                    "classification_1992",
                    "classification_1993",
                    "classification_1994",
                    "classification_1995",
                    "classification_1996",
                    "classification_1997",
                    "classification_1998",
                    "classification_1999",
                    "classification_2000",
                    "classification_2001",
                    "classification_2002",
                    "classification_2003",
                    "classification_2004",
                    "classification_2005",
                    "classification_2006",
                    "classification_2007",
                    "classification_2008",
                    "classification_2009",
                    "classification_2010",
                    "classification_2011",
                    "classification_2012",
                    "classification_2013",
                    "classification_2014",
                    "classification_2015",
                    "classification_2016",
                    "classification_2017",
                    "classification_2018",
                    "classification_2019",
                    "classification_2020"
                  ],
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
        collection: 3,
        assetId: "projects/mapbiomas-raisg/public/collection3/mapbiomas_raisg_panamazonia_collection3_integration_v2",
        description: '',
        metadata: {
            bands: {
                suffix: 'classification_',
                bandNames: [
                    "classification_1985",
                    "classification_1986",
                    "classification_1987",
                    "classification_1988",
                    "classification_1989",
                    "classification_1990",
                    "classification_1991",
                    "classification_1992",
                    "classification_1993",
                    "classification_1994",
                    "classification_1995",
                    "classification_1996",
                    "classification_1997",
                    "classification_1998",
                    "classification_1999",
                    "classification_2000",
                    "classification_2001",
                    "classification_2002",
                    "classification_2003",
                    "classification_2004",
                    "classification_2005",
                    "classification_2006",
                    "classification_2007",
                    "classification_2008",
                    "classification_2009",
                    "classification_2010",
                    "classification_2011",
                    "classification_2012",
                    "classification_2013",
                    "classification_2014",
                    "classification_2015",
                    "classification_2016",
                    "classification_2017",
                    "classification_2018",
                    "classification_2019",
                    "classification_2020"
                  ],
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
        collection: 3,
        assetId: "projects/mapbiomas-raisg/public/collection3/mapbiomas_raisg_panamazonia_collection3_transitions_v1",
        description: '',
        metadata: {
            bands: {
                suffix: 'transition_',
                bandNames: [
                    "transition_1985_1986",
                    "transition_1986_1987",
                    "transition_1987_1988",
                    "transition_1988_1989",
                    "transition_1989_1990",
                    "transition_1990_1991",
                    "transition_1991_1992",
                    "transition_1992_1993",
                    "transition_1993_1994",
                    "transition_1994_1995",
                    "transition_1995_1996",
                    "transition_1996_1997",
                    "transition_1997_1998",
                    "transition_1998_1999",
                    "transition_1999_2000",
                    "transition_2000_2001",
                    "transition_2001_2002",
                    "transition_2002_2003",
                    "transition_2003_2004",
                    "transition_2004_2005",
                    "transition_2005_2006",
                    "transition_2006_2007",
                    "transition_2007_2008",
                    "transition_2008_2009",
                    "transition_2009_2010",
                    "transition_2010_2011",
                    "transition_2011_2012",
                    "transition_2012_2013",
                    "transition_2013_2014",
                    "transition_2014_2015",
                    "transition_2015_2016",
                    "transition_2016_2017",
                    "transition_2017_2018",
                    "transition_2018_2019",
                    "transition_2019_2020",
                    "transition_1985_1990",
                    "transition_1990_1995",
                    "transition_1995_2000",
                    "transition_2000_2005",
                    "transition_2005_2010",
                    "transition_2010_2015",
                    "transition_2015_2020",
                    "transition_1990_2000",
                    "transition_2000_2010",
                    "transition_2010_2020",
                    "transition_1985_2020",
                    "transition_2008_2017",
                    "transition_1994_2002",
                    "transition_2002_2010",
                    "transition_2010_2016",
                    "transition_1986_2015",
                    "transition_1990_2020",
                    "transition_2000_2020",
                    "transition_2008_2020",
                    "transition_2012_2020"
                  ],
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
        collection: 3,
        assetId: "projects/mapbiomas-raisg/public/collection3/mapbiomas_raisg_panamazonia_collection3_transitions_v2",
        description: '',
        metadata: {
            bands: {
                suffix: 'transition_',
                bandNames: [
                    "transition_1985_1986",
                    "transition_1986_1987",
                    "transition_1987_1988",
                    "transition_1988_1989",
                    "transition_1989_1990",
                    "transition_1990_1991",
                    "transition_1991_1992",
                    "transition_1992_1993",
                    "transition_1993_1994",
                    "transition_1994_1995",
                    "transition_1995_1996",
                    "transition_1996_1997",
                    "transition_1997_1998",
                    "transition_1998_1999",
                    "transition_1999_2000",
                    "transition_2000_2001",
                    "transition_2001_2002",
                    "transition_2002_2003",
                    "transition_2003_2004",
                    "transition_2004_2005",
                    "transition_2005_2006",
                    "transition_2006_2007",
                    "transition_2007_2008",
                    "transition_2008_2009",
                    "transition_2009_2010",
                    "transition_2010_2011",
                    "transition_2011_2012",
                    "transition_2012_2013",
                    "transition_2013_2014",
                    "transition_2014_2015",
                    "transition_2015_2016",
                    "transition_2016_2017",
                    "transition_2017_2018",
                    "transition_2018_2019",
                    "transition_2019_2020",
                    "transition_1985_1990",
                    "transition_1990_1995",
                    "transition_1995_2000",
                    "transition_2000_2005",
                    "transition_2005_2010",
                    "transition_2010_2015",
                    "transition_2015_2020",
                    "transition_1990_2000",
                    "transition_2000_2010",
                    "transition_2010_2020",
                    "transition_1985_2020",
                    "transition_2008_2017",
                    "transition_1994_2002",
                    "transition_2002_2010",
                    "transition_2010_2016",
                    "transition_1986_2015",
                    "transition_1990_2020",
                    "transition_2000_2020",
                    "transition_2008_2020",
                    "transition_2012_2020"
                  ],
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
        collection: 1,
        assetId: "projects/mapbiomas_af_trinacional/public/collection1/mapbiomas_atlantic_forest_collection1_integration_v1",
        description: '',
        metadata: {
            bands: {
                suffix: 'transition_',
                bandNames: [
                    "classification_2000",
                    "classification_2001",
                    "classification_2002",
                    "classification_2003",
                    "classification_2004",
                    "classification_2005",
                    "classification_2006",
                    "classification_2007",
                    "classification_2008",
                    "classification_2009",
                    "classification_2010",
                    "classification_2011",
                    "classification_2012",
                    "classification_2013",
                    "classification_2014",
                    "classification_2015",
                    "classification_2016",
                    "classification_2017",
                    "classification_2018",
                    "classification_2019"
                  ],
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
        collection: 1,
        assetId: "projects/mapbiomas_af_trinacional/public/collection1/mapbiomas_atlantic_forest_collection1_quality_v1",
        description: '',
        metadata: {
            bands: {
                suffix: 'transition_',
                bandNames: [
                    "quality_2000",
                    "quality_2001",
                    "quality_2002",
                    "quality_2003",
                    "quality_2004",
                    "quality_2005",
                    "quality_2006",
                    "quality_2007",
                    "quality_2008",
                    "quality_2009",
                    "quality_2010",
                    "quality_2011",
                    "quality_2012",
                    "quality_2013",
                    "quality_2014",
                    "quality_2015",
                    "quality_2016",
                    "quality_2017",
                    "quality_2018",
                    "quality_2019"
                  ],
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
        collection: 1,
        assetId: "projects/mapbiomas_af_trinacional/public/collection1/mapbiomas_atlantic_forest_collection1_transitions_v1",
        description: '',
        metadata: {
            bands: {
                suffix: 'transition_',
                bandNames: [
                    "transition_2000_2001",
                    "transition_2001_2002",
                    "transition_2002_2003",
                    "transition_2003_2004",
                    "transition_2004_2005",
                    "transition_2005_2006",
                    "transition_2006_2007",
                    "transition_2007_2008",
                    "transition_2008_2009",
                    "transition_2009_2010",
                    "transition_2010_2011",
                    "transition_2011_2012",
                    "transition_2012_2013",
                    "transition_2013_2014",
                    "transition_2014_2015",
                    "transition_2015_2016",
                    "transition_2016_2017",
                    "transition_2017_2018",
                    "transition_2018_2019",
                    "transition_2000_2005",
                    "transition_2005_2010",
                    "transition_2010_2015",
                    "transition_2015_2019",
                    "transition_2000_2010",
                    "transition_2010_2019",
                    "transition_2008_2019",
                    "transition_2012_2019",
                    "transition_2002_2010",
                    "transition_2010_2016",
                    "transition_2000_2019"
                  ],
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
        
        var bandNames = assetInfo.metadata.bands.bandNames;
        
        var image = ee.Image();
            
        // switch ( ee.data.getAsset(assetId, callback).type ) {
        switch ( assetInfo.type ) {
          
            case "Image":
              
                // print(ee.String(id).split('/').get(2))
                // print('image:', assetName)
              
                image = ee.Image(id);
                
                print(assetName, image.bandNames())
                
                Map.addLayer(image.select(bandNames), {}, assetName, true, 1);s
                
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