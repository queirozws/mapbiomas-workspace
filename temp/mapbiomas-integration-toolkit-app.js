/**
 * @name
 *      MapBiomas Integration Toolkit 
 * 
 * @description
 *  
 * @author
 *      João Siqueira
 *      joaovsiqueira1@gmail.com
 *
 * @version
 *  1.0.0
 *  1.0.6
 *  1.1.0 - Atualização das regras de prevalência da integração
 *  1.2.0 - Atualização das regras de prevalência da integração para a coleção 4.0
 *  1.3.0 - Atualização das regras de prevalência da integração para a coleção 4.1
 *  1.3.1 - Atualização dos dados da Amazônia, Cerrado e Mata Atlântica para integração da coleção 4.1
 *  1.4.0 - Atualização dos dados da coleção 5.0
 *  1.4.1 - Otimização do filtro espacial
 *  1.5.0 - Atualização da regra de integração da mata atlântica
 *  1.6.0 - Otimização do tempo de exportação
 *  1.6.1 - Ajustes na interface
 *  1.7.0 - Atualização dos dados da coleção 6.0
 *  1.7.1 - Criação do inspetor da série temporal do píxel
 *
 */
var outputAsset = 'projects/mapbiomas-workspace/COLECAO6/mapbiomas-collection60-integration-v0-8';

// import modules
var Legend = require('users/joaovsiqueira1/packages:Legend.js');
var Palettes = require('users/mapbiomas/modules:Palettes.js');

var palette = Palettes.get('classification6');

var App = {

    options: {
        // app version
        version: '1.7.0',

        // assets versions
        versions: {
            // biomes
            amz: '3',
            caa: '3',
            cer: '3',
            mat: '4',
            pam: '9',
            pan: '4',
            // transversais
            agr: '3',
            agi: '1',
            agu: '4',
            aqu: '1',
            fpt: '2',
            urb: '2',
            min: '5',
            pec: '3',
            znc: '3',
            // outros
            agr5: '3',
        },

        assets: {
            // biomes territory data
            biomes: 'projects/mapbiomas-workspace/AUXILIAR/biomas-2019-raster',

            // mosaic data
            mosaic: {
                'lx': 'projects/nexgenmap/MapBiomas2/LANDSAT/mosaics',
                'l7': 'projects/nexgenmap/MapBiomas2/LANDSAT/mosaics-landsat-7'
            },

            // past collection data
            collection31: 'projects/mapbiomas-workspace/public/collection3_1/mapbiomas_collection31_integration_v1',
            collection41: 'projects/mapbiomas-workspace/public/collection4_1/mapbiomas_collection41_integration_v1',
            collection50: 'projects/mapbiomas-workspace/public/collection5/mapbiomas_collection50_integration_v1',
            collection60: 'projects/mapbiomas-workspace/COLECAO6/mapbiomas-collection60-integration-v0-7',
            collection60f: 'projects/mapbiomas-workspace/COLECAO6/mapbiomas-collection60-integration-v0-8',

            // biomes data
            classification: 'projects/mapbiomas-workspace/COLECAO6/classificacao',

            // transversal data
            agr: 'projects/mapbiomas-workspace/TRANSVERSAIS/AGRICULTURA6-FT',
            agi: 'projects/mapbiomas-workspace/TRANSVERSAIS/AGRICULTURA-IRRIGADA6-FT',
            agu: 'projects/mapbiomas-workspace/TRANSVERSAIS/AGUA6-FT',
            aqu: 'projects/mapbiomas-workspace/TRANSVERSAIS/AQUICULTURA6-FT', // TODO: Os dados não estão em um asset separado
            fpt: 'projects/mapbiomas-workspace/TRANSVERSAIS/FLORESTAPLANTADA6-FT',
            urb: 'projects/mapbiomas-workspace/TRANSVERSAIS/INFRAURBANA6-FT',
            min: 'projects/mapbiomas-workspace/TRANSVERSAIS/MINERACAO6-FT',
            pec: 'projects/mapbiomas-workspace/TRANSVERSAIS/PECUARIA6-FT',
            znc: 'projects/mapbiomas-workspace/TRANSVERSAIS/ZONACOSTEIRA6-FT',

            // outros
            ucs: 'projects/mapbiomas-workspace/AUXILIAR/cerrado-unidades-de-conservacao-raster',
            agr5: 'projects/mapbiomas-workspace/TRANSVERSAIS/AGRICULTURA5-FT',

            // ancillary data
            tis: 'projects/mapbiomas-workspace/AUXILIAR/terras-indigenas-raster',
            anp: 'projects/mapbiomas-workspace/AUXILIAR/areas-protegidas-raster',

            // ESRI 2020 Global Land Use Land Cover from Sentinel-2
            esri: 'projects/sat-io/open-datasets/landcover/ESRI_Global-LULC_10m',

            // vector data
            grids: 'projects/mapbiomas-workspace/AUXILIAR/cartas',
            biomesVector: 'projects/mapbiomas-workspace/AUXILIAR/biomas-2019',
        },

        ids: {
            amz: 1,
            caa: 5,
            cer: 4,
            mat: 2,
            pam: 6,
            pan: 3,
        },

        prefix: {
            amz: '/AMAZONIA-',
            caa: '/CAATINGA-',
            cer: '/CERRADO-',
            mat: '/MATAATLANTICA-',
            pam: '/PAMPA-',
            pan: '/PANTANAL-'
        },

        year: '2020',

        layers: [],

        classification: null,
        integration: null,
        mosaics: null,
        biomes: null,
        collection31: null,
        collection41: null,
        collection50: null,
        collection60: null, //Beta
        collection60f: null, //filtered
        states: null,
        incidentes: null,
        difference: null,

        vis: {
            'integration': {
                'min': 0,
                'max': 49,
                'palette': palette,
                'format': 'png'
            },

            'mosaic': {
                'bands': ['swir1_median', 'nir_median', 'red_median'],
                'gain': [0.08, 0.06, 0.2],
                'gamma': 0.65
            },

            'vectors': {
                'color': 'ff0000',
                'fillColor': '00000000',
                'width': 2
            },

            'esri': {
                'min': 1,
                'max': 10,
                'palette': [
                    "#1A5BAB", // Water
                    "#358221", // Trees
                    "#A7D282", // Grass
                    "#87D19E", // Flooded Vegetation
                    "#FFDB5C", // Crops
                    "#EECFA8", // Scrub/Shrub
                    "#ED022A", // Built Area
                    "#EDE9E4", // Bare Ground
                    "#F2FAFF", // Snow/Ice
                    "#C8C8C8", // Cloud
                ],
                'format': 'png'
            },
            'incidents': {
                'min': 0,
                'max': 8,
                'palette': [
                    "#C8C8C8",
                    "#FED266",
                    "#FBA713",
                    "#cb701b",
                    "#cb701b",
                    "#a95512",
                    "#a95512",
                    "#662000",
                    "#662000",
                    "#cb181d"
                ],
                'format': 'png'
            },
            'states': {
                'min': 1,
                'max': 5,
                'palette': [
                    "#C8C8C8",
                    "#AE78B2",
                    "#772D8F",
                    "#4C226A",
                    "#22053A"
                ],
                'format': 'png'
            },
            'difference': {
                'min': 0,
                'max': 1,
                'palette': [
                    "#C8C8C8",
                    "#a20500"
                ],
                'format': 'png'
            },

        },

        'prevalenceList': [],

        'legend': {
            'params': {
                "title": null,
                "layers": [
                    [palette[0], 0, 'Ausência de dados'],
                    [palette[3], 3, 'Formação Florestal'],
                    [palette[4], 4, 'Formação Savânica'],
                    [palette[5], 5, 'Mangue'],
                    [palette[49], 49, 'Restinga Florestal'],
                    [palette[11], 11, 'Área Úmida Natural não Florestal'],
                    [palette[12], 12, 'Formação Campestre'],
                    [palette[32], 32, 'Apicum'],
                    [palette[29], 29, 'Afloramento Rochoso'],
                    [palette[13], 13, 'Outra Formação não Florestal'],
                    [palette[18], 18, 'Agricultura'],
                    [palette[39], 39, 'Soja'],
                    [palette[20], 20, 'Cana'],
                    [palette[40], 40, 'Arroz'],
                    [palette[41], 41, 'Outras Lavouras Temporárias'],
                    [palette[46], 46, 'Café'],
                    [palette[47], 47, 'Citrus'],
                    [palette[48], 48, 'Outras Lavaouras Perenes'],
                    [palette[9], 9, 'Silvicultura'],
                    [palette[15], 15, 'Pastagem'],
                    [palette[21], 21, 'Mosaico de Agricultura ou Pastagem'],
                    [palette[22], 22, 'Área não Vegetada'],
                    [palette[23], 23, 'Praia e Duna'],
                    [palette[24], 24, 'Infraestrutura Urbana'],
                    [palette[30], 30, 'Mineração'],
                    [palette[25], 25, 'Outra Área não Vegetada'],
                    [palette[33], 33, 'Rio, Lago e Oceano'],
                    [palette[31], 31, 'Aquicultura'],
                ],
                "style": {
                    "backgroundColor": "#ffffff",
                    "color": "#212121",
                    "fontSize": '10px',
                    "iconSize": '12px',
                },
                "orientation": "vertical"
            }
        }

    },

    init: function () {

        App.loadData();
        App.ui.init();

    },

    setVersion: function () {

        App.ui.form.labelTitle.setValue('MapBiomas Integration Toolkit ' + App.options.version);

    },

    getPrevalenceList: function () {

        var prevalenceList = [
            {
                'prevalence_id': 1,
                'label': 'Mineração',
                'rule': {
                    'class_input': 30,
                    'class_output': 30,
                    'source': App.options.assets.min + '/' + App.options.year + '-' + App.options.versions.min,
                    'source_mask': null
                },
                'exception': null
            },
            {
                'prevalence_id': 2,
                'label': 'Praias e Dunas',
                'rule': {
                    'class_input': 23,
                    'class_output': 23,
                    'source': App.options.assets.znc + '/' + App.options.year + '-' + App.options.versions.znc,
                    'source_mask': null
                },
                'exception': null
            },
            {
                'prevalence_id': 3,
                'label': 'Praias e Dunas',
                'rule': {
                    'class_input': 23,
                    'class_output': 23,
                    'source': App.options.classification,
                    'source_mask': null
                },
                'exception': null
            },
            {
                'prevalence_id': 4,
                'label': 'Mangue',
                'rule': {
                    'class_input': 5,
                    'class_output': 5,
                    'source': App.options.assets.znc + '/' + App.options.year + '-' + App.options.versions.znc,
                    'source_mask': null
                },
                'exception': null
            },
            {
                'prevalence_id': 5,
                'label': 'Aquicultura',
                'rule': {
                    'class_input': 31,
                    'class_output': 31,
                    'source': App.options.assets.znc + '/' + App.options.year + '-' + App.options.versions.znc, // TODO: definir asset e versão corretos
                    'source_mask': null
                },
                'exception': null
            },
            {
                'prevalence_id': 6,
                'label': 'Apicum',
                'rule': {
                    'class_input': 32,
                    'class_output': 32,
                    'source': App.options.assets.znc + '/' + App.options.year + '-' + App.options.versions.znc,
                    'source_mask': null
                },
                'exception': null
            },
            {
                'prevalence_id': 7,
                'label': 'Infraestrutura Urbana',
                'rule': {
                    'class_input': 24,
                    'class_output': 24,
                    'source': App.options.assets.urb + '/' + App.options.year + '-' + App.options.versions.urb,
                    'source_mask': null
                },
                'exception': {
                    'rule': [
                        {
                            'class_input': [33],
                            'source': App.options.classification
                        }, {
                            'class_input': [33],
                            'source': App.options.assets.agu + '/' + App.options.year + '-' + App.options.versions.agu,
                        }],
                    'class_output': 33
                }
            },
            {
                'prevalence_id': 8,
                'label': 'Silvicultura',
                'rule': {
                    'class_input': 9,
                    'class_output': 9,
                    'source': App.options.assets.fpt + '/' + App.options.year + '-' + App.options.versions.fpt,
                    'source_mask': null
                },
                'exception': null
            },
            {
                'prevalence_id': 9,
                'label': 'Floresta plantada (biomas)', // TODO: verificar a existência dessa classe nos biomas
                'rule': {
                    'class_input': 9,
                    'class_output': 9,
                    'source': App.options.classification,
                    'source_mask': null
                },
                'exception': null
            },
            {
                'prevalence_id': 10,
                'label': 'Cana',
                'rule': {
                    'class_input': 20,
                    'class_output': 20,
                    'source': App.options.assets.agr + '/' + App.options.year + '-' + App.options.versions.agr,
                    'source_mask': null
                },
                'exception': {
                    'rule': [
                        {
                            'class_input': [33],
                            'source': App.options.classification
                        }, {
                            'class_input': [33],
                            'source': App.options.assets.agu + '/' + App.options.year + '-' + App.options.versions.agu,
                        }],
                    'class_output': 33
                }
            },
            {
                'prevalence_id': 11,
                'label': 'Soja',
                'rule': {
                    'class_input': 39,
                    'class_output': 39,
                    'source': App.options.assets.agr + '/' + App.options.year + '-' + App.options.versions.agr,
                    'source_mask': null
                },
                'exception': {
                    'rule': [
                        {
                            'class_input': [33],
                            'source': App.options.classification
                        }, {
                            'class_input': [33],
                            'source': App.options.assets.agu + '/' + App.options.year + '-' + App.options.versions.agu,
                        }],
                    'class_output': 33
                }
            },
            {
                'prevalence_id': 12,
                'label': 'Arroz',
                'rule': {
                    'class_input': 40,
                    'class_output': 40,
                    'source': App.options.assets.agr + '/' + App.options.year + '-' + App.options.versions.agr,
                    'source_mask': null
                },
                'exception': {
                    'rule': [{
                        'class_input': [
                            App.options.ids.pam,
                        ],
                        'source': App.options.assets.biomes
                    },
                    {
                        'class_input': [11],
                        'source': App.options.classification
                    }],
                    'class_output': 11
                }
            },
            {
                'prevalence_id': 13,
                'label': 'Outras lavouras temporárias',
                'rule': {
                    'class_input': 41,
                    'class_output': 41,
                    'source': App.options.assets.agr + '/' + App.options.year + '-' + App.options.versions.agr,
                    'source_mask': null
                },
                'exception': {
                    'rule': [
                        {
                            'class_input': [33],
                            'source': App.options.classification
                        }, {
                            'class_input': [33],
                            'source': App.options.assets.agu + '/' + App.options.year + '-' + App.options.versions.agu,
                        }],
                    'class_output': 33
                }
            },
            {
                'prevalence_id': 14,
                'label': 'Café',
                'rule': {
                    'class_input': 46,
                    'class_output': 46,
                    'source': App.options.assets.agr + '/' + App.options.year + '-' + App.options.versions.agr,
                    'source_mask': null
                },
                'exception': {
                    'rule': [
                        {
                            'class_input': [33],
                            'source': App.options.classification
                        }, {
                            'class_input': [33],
                            'source': App.options.assets.agu + '/' + App.options.year + '-' + App.options.versions.agu,
                        }],
                    'class_output': 33
                }
            },
            {
                'prevalence_id': 15,
                'label': 'Citrus',
                'rule': {
                    'class_input': 47,
                    'class_output': 47,
                    'source': App.options.assets.agr + '/' + App.options.year + '-' + App.options.versions.agr,
                    'source_mask': null
                },
                'exception': {
                    'rule': [
                        {
                            'class_input': [33],
                            'source': App.options.classification
                        }, {
                            'class_input': [33],
                            'source': App.options.assets.agu + '/' + App.options.year + '-' + App.options.versions.agu,
                        }],
                    'class_output': 33
                }
            },
            {
                'prevalence_id': 16,
                'label': 'Outras lavouras perenes',
                'rule': {
                    'class_input': 48,
                    'class_output': 48,
                    'source': App.options.assets.agr + '/' + App.options.year + '-' + App.options.versions.agr,
                    'source_mask': null
                },
                'exception': {
                    'rule': [
                        {
                            'class_input': [33],
                            'source': App.options.classification
                        }, {
                            'class_input': [33],
                            'source': App.options.assets.agu + '/' + App.options.year + '-' + App.options.versions.agu,
                        }],
                    'class_output': 33
                }
            },
            {
                'prevalence_id': 17,
                'label': 'Lavoura temporaria (biomas)',
                'rule': {
                    'class_input': 19, // TODO: revisar com a equipe da Amazônia
                    'class_output': 41,
                    'source': App.options.classification,
                    'source_mask': null
                },
                'exception': {
                    'rule': [{
                        'class_input': [
                            App.options.ids.amz
                        ],
                        'source': App.options.assets.biomes
                    },
                    {
                        'class_input': [15],
                        'source': App.options.assets.pec + '/' + App.options.year + '-' + App.options.versions.pec
                    }
                    ],
                    'class_output': 15
                }
            },
            {
                'prevalence_id': 18,
                'label': 'Afloramento Rochoso',
                'rule': {
                    'class_input': 29,
                    'class_output': 29,
                    'source': App.options.classification,
                    'source_mask': null
                },
                'exception': null
            },
            {
                'prevalence_id': 19,
                'label': 'Outras Áreas não Vegetadas',
                'rule': {
                    'class_input': 25,
                    'class_output': 25,
                    'source': App.options.classification,
                    'source_mask': null
                },
                'exception': null
            },
            {
                'prevalence_id': 20,
                'label': 'Rios, Lagos e Oceanos',
                'rule': {
                    'class_input': 33,
                    'class_output': 33,
                    'source': App.options.assets.agu + '/' + App.options.year + '-' + App.options.versions.agu,
                    'source_mask': null
                },
                'exception': null
            },
            {
                'prevalence_id': 21,
                'label': 'Rios, Lagos e Oceanos (biomes)',
                'rule': {
                    'class_input': 33,
                    'class_output': 33,
                    'source': App.options.classification,
                    'source_mask': null
                },
                'exception': null
            },
            {
                'prevalence_id': 22,
                'label': 'Formação Florestal',
                'rule': {
                    'class_input': 3,
                    'class_output': 3,
                    'source': App.options.classification,
                    'source_mask': null
                },
                'exception': {
                    'rule': [{
                        'class_input': [
                            App.options.ids.amz
                        ],
                        'source': App.options.assets.biomes
                    },
                    // Pastagem sobre floresta na Amazônia e Cerrado
                    {
                        'class_input': [15],
                        'source': App.options.assets.pec + '/' + App.options.year + '-' + App.options.versions.pec
                    }
                    ],
                    'class_output': 15
                },
            },
            {
                'prevalence_id': 23,
                'label': 'Formação Savânica',
                'rule': {
                    'class_input': 4,
                    'class_output': 4,
                    'source': App.options.classification,
                    'source_mask': null
                },
                'exception': {
                    'rule': [{
                        'class_input': [
                            App.options.ids.amz,
                            App.options.ids.mat
                        ],
                        'source': App.options.assets.biomes
                    },
                    {
                        'class_input': [15],
                        'source': App.options.assets.pec + '/' + App.options.year + '-' + App.options.versions.pec
                    }
                    ],
                    'class_output': 15
                },
            },
            {
                'prevalence_id': 24,
                'label': 'Restinga Arborizada',
                'rule': {
                    'class_input': 49,
                    'class_output': 49,
                    'source': App.options.classification,
                    'source_mask': null
                },
                'exception': null,
            },
            {
                'prevalence_id': 25,
                'label': '  Área Úmida Natural não Florestal',
                // Dado classificado pelos biomas
                'rule': {
                    'class_input': 11,
                    'class_output': 11,
                    'source': App.options.classification,
                    'source_mask': null
                },
                'exception': {
                    'rule': [{
                        'class_input': [
                            App.options.ids.amz,
                            App.options.ids.cer
                        ],
                        'source': App.options.assets.biomes
                    },
                    {
                        'class_input': [15],
                        'source': App.options.assets.pec + '/' + App.options.year + '-' + App.options.versions.pec
                    }
                    ],
                    'class_output': 15
                },
            },
            {
                'prevalence_id': 26,
                'label': 'Formação Campestre',
                'rule': {
                    'class_input': 12,
                    'class_output': 12,
                    'source': App.options.classification,
                    'source_mask': null
                },
                // 
                'exception': {
                    'rule': [{
                        'class_input': [App.options.ids.cer],
                        'source': App.options.assets.biomes
                    },
                    {
                        'class_input': [0],
                        'source': ee.Image(App.options.assets.ucs).unmask()
                    },
                    {
                        'class_input': [15],
                        'source': App.options.assets.pec + '/' + App.options.year + '-' + App.options.versions.pec
                    }
                    ],
                    'class_output': 15
                }
            },
            {
                'prevalence_id': 27,
                'label': 'Formação Natural não Florestal',
                'rule': {
                    'class_input': 13,
                    'class_output': 13,
                    'source': App.options.classification,
                    'source_mask': null
                },
                'exception': {
                    'rule': [{
                        'class_input': [App.options.ids.mat],
                        'source': App.options.assets.biomes
                    },
                    {
                        'class_input': [15],
                        'source': App.options.assets.pec + '/' + App.options.year + '-' + App.options.versions.pec
                    }
                    ],
                    'class_output': 15
                }
            },
            /**
             * @Nota
             *      Esse é uma regra especial para realçar as regiões que deixaram de ser
             *      mapeadas como agricultura, mas não são pastagem. Essas regiões
             *      devem permanecer como mosaico de agicultura ou pastagem 
             */
            {
                'prevalence_id': 28,
                'label': 'Pastagem',
                'rule': {
                    'class_input': 15,
                    'class_output': 15,
                    'source': App.options.assets.pec + '/' + App.options.year + '-' + App.options.versions.pec,
                    'source_mask': {
                        'class_input': [
                            App.options.ids.caa,
                        ],
                        'source': App.options.assets.biomes
                    }
                },
                'exception': {
                    'rule': [
                        {
                            'class_input': [21],
                            'source': App.options.classification
                        },
                        {
                            'class_input': [41],
                            'source': App.options.assets.agr5 + '/' + App.options.year + '-' + App.options.versions.agr5
                        }
                    ],
                    'class_output': 21
                }
            },
            {
                'prevalence_id': 29,
                'label': 'Pastagem',
                'rule': {
                    'class_input': 15,
                    'class_output': 15,
                    'source': App.options.assets.pec + '/' + App.options.year + '-' + App.options.versions.pec,
                    'source_mask': null
                },
                'exception': {
                    'rule': [{
                        'class_input': [
                            App.options.ids.pam,
                        ],
                        'source': App.options.assets.biomes
                    }],
                    'class_output': 21
                }
            },
            {
                'prevalence_id': 30,
                'label': 'Pastagem',
                'rule': {
                    'class_input': 15,
                    'class_output': 15,
                    'source': App.options.classification,
                    'source_mask': null
                },
                'exception': null
            },
            {
                'prevalence_id': 31, // especifica para a exceção em ucs no cerrado
                'label': 'Mosaico de Agricultura e Pastagem',
                'rule': {
                    'class_input': 21,
                    'class_output': 21,
                    'source': App.options.classification,
                    'source_mask': {
                        'class_input': [1],
                        'source': App.options.assets.ucs
                    }
                },
                'exception': {
                    'rule': [{
                        'class_input': [
                            App.options.ids.cer
                        ],
                        'source': App.options.assets.biomes
                    },
                    ],
                    'class_output': 15
                }
            },
            {
                'prevalence_id': 32,
                'label': 'Mosaico de Agricultura e Pastagem',
                'rule': {
                    'class_input': 21,
                    'class_output': 21,
                    'source': App.options.classification,
                    'source_mask': null
                },
                'exception': {
                    'rule': [{
                        'class_input': [
                            App.options.ids.pan
                        ],
                        'source': App.options.assets.biomes
                    },
                    ],
                    'class_output': 15
                }
            },
            {
                'prevalence_id': 33,
                'label': 'Lavoura perene (biomas)',
                'rule': {
                    'class_input': 19,
                    'class_output': 41,
                    'source': App.options.classification,
                    'source_mask': null
                },
                'exception': null
            },
            {
                'prevalence_id': 34,
                'label': '4. Área não Vegetada',
                'rule': {
                    'class_input': 22,
                    'class_output': 25,
                    'source': App.options.classification,
                    'source_mask': null
                },
                'exception': null
            },
        ];

        return prevalenceList;
    },

    getClassifications: function () {

        var amz = ee.Image([App.options.assets.classification, App.options.prefix.amz, App.options.year, '-', App.options.versions.amz].join(''));
        var caa = ee.Image([App.options.assets.classification, App.options.prefix.caa, App.options.year, '-', App.options.versions.caa].join(''));
        var cer = ee.Image([App.options.assets.classification, App.options.prefix.cer, App.options.year, '-', App.options.versions.cer].join(''));
        var mat = ee.Image([App.options.assets.classification, App.options.prefix.mat, App.options.year, '-', App.options.versions.mat].join(''));
        var pam = ee.Image([App.options.assets.classification, App.options.prefix.pam, App.options.year, '-', App.options.versions.pam].join(''));
        var pan = ee.Image([App.options.assets.classification, App.options.prefix.pan, App.options.year, '-', App.options.versions.pan].join(''));

        var image = ee.ImageCollection.fromImages([
            amz.mask(App.options.biomes.eq(App.options.ids.amz)).rename('classification').byte(),
            caa.mask(App.options.biomes.eq(App.options.ids.caa)).rename('classification').byte(),
            cer.mask(App.options.biomes.eq(App.options.ids.cer)).rename('classification').byte(),
            mat.mask(App.options.biomes.eq(App.options.ids.mat)).rename('classification').byte(),
            pam.mask(App.options.biomes.eq(App.options.ids.pam)).rename('classification').byte(),
            pan.mask(App.options.biomes.eq(App.options.ids.pan)).rename('classification').byte(),
        ]).min();

        return image;
    },

    getMosaics: function () {

        var filterByYear = ee.Filter.eq('year', parseInt(App.options.year, 10));

        var collectionLx = ee.ImageCollection(App.options.assets.mosaic.lx)
            .filter(filterByYear);

        var collectionL7 = ee.ImageCollection(App.options.assets.mosaic.l7)
            .filter(filterByYear);

        var collection = collectionLx.merge(collectionL7);

        var amz = collection
            .filterMetadata('biome', 'equals', 'AMAZONIA')
            .filterMetadata('version', 'equals', '2')
            .mosaic();

        var caa = collection
            .filterMetadata('biome', 'equals', 'CAATINGA')
            .filterMetadata('version', 'equals', '5')
            .mosaic();

        var cer = collection
            .filterMetadata('biome', 'equals', 'CERRADO')
            .filterMetadata('version', 'equals', '2')
            .mosaic();

        var mat = collection
            .filterMetadata('biome', 'equals', 'MATAATLANTICA')
            .filterMetadata('version', 'equals', '3')
            .mosaic();

        var pam = collection
            .filterMetadata('biome', 'equals', 'PAMPA')
            .filterMetadata('version', 'equals', '4')
            .mosaic();

        var pan = collection
            .filterMetadata('biome', 'equals', 'PANTANAL')
            .filterMetadata('version', 'equals', '3')
            .mosaic();

        var image = ee.ImageCollection.fromImages([
            amz.mask(App.options.biomes.eq(App.options.ids.amz)),
            caa.mask(App.options.biomes.eq(App.options.ids.caa)),
            cer.mask(App.options.biomes.eq(App.options.ids.cer)),
            mat.mask(App.options.biomes.eq(App.options.ids.mat)),
            pam.mask(App.options.biomes.eq(App.options.ids.pam)),
            pan.mask(App.options.biomes.eq(App.options.ids.pan)),
        ]).mosaic();

        return image;
    },

    getRegions: function () {

        var regions = ee.Image(App.options.assets.biomes);

        return regions;
    },

    getCollections: function () {

        App.options.collection31 = ee.Image(App.options.assets.collection31)
            .select('classification_' + App.options.year);

        App.options.collection41 = ee.Image(App.options.assets.collection41)
            .select('classification_' + App.options.year);

        App.options.collection50 = ee.Image(App.options.assets.collection50)
            .select('classification_' + App.options.year);

        App.options.collection60 = ee.ImageCollection(App.options.assets.collection60)
            .min()
            .select('classification_' + App.options.year);

        App.options.collection60f = ee.ImageCollection(App.options.assets.collection60f)
            .min()
            .select('classification_' + App.options.year);

    },

    calculateStates: function () {

        var states = App.options.collection60f
            .reduce(ee.Reducer.countDistinctNonNull());

        return states;
    },

    calculateIncidents: function () {

        var incidentes = App.options.collection60f
            .reduce(ee.Reducer.countRuns()).subtract(1);

        return incidentes;
    },

    calculateFilterDiff: function () {

        var integrated = App.options.collection60;
        var filtered = App.options.collection60f;

        return integrated.neq(filtered);
    },

    loadLayers: function () {
        App.options.layers = [
            {
                'name': 'Mosaic',
                'data': App.options.mosaics,
                'shown': true,
                'vis': App.options.vis.mosaic,
                'legend': null
            },
            {
                'name': 'Classification',
                'data': App.options.classification,
                'shown': true,
                'vis': App.options.vis.integration,
                'legend': App.options.legend
            },
            {
                'name': 'Collection 6.0 (beta)',
                'data': App.options.collection60,
                'shown': false,
                'vis': App.options.vis.integration,
                'legend': App.options.legend
            },
            {
                'name': 'Collection 6.0 (filtered)',
                'data': App.options.collection60f,
                'shown': true,
                'vis': App.options.vis.integration,
                'legend': App.options.legend
            },
            {
                'name': 'Agriculture',
                'data': ee.Image(App.options.assets.agr + '/' + App.options.year + '-' + App.options.versions.agr).selfMask(),
                'shown': false,
                'vis': App.options.vis.integration,
                'legend': {
                    'params': {
                        "title": null,
                        "layers": [39, 20, 40, 41, 46, 47, 48].map(App.ui.filterLegend),
                        "style": App.options.legend.params.style,
                        "orientation": App.options.legend.params.orientation
                    }
                }
            },
            {
                'name': 'Agriculture (irrigated)',
                'data': ee.Image(App.options.assets.agi + '/' + App.options.year + '-' + App.options.versions.agi).selfMask(),
                'shown': false,
                'vis': App.options.vis.integration,
                'legend': null
            },
            {
                'name': 'Aquaculture',
                'data': ee.Image(App.options.assets.aqu + '/' + App.options.year + '-' + App.options.versions.aqu).selfMask(),
                'shown': false,
                'vis': App.options.vis.integration,
                'legend': {
                    'params': {
                        "title": null,
                        "layers": [31].map(App.ui.filterLegend),
                        "style": App.options.legend.params.style,
                        "orientation": App.options.legend.params.orientation
                    }
                }
            },
            {
                'name': 'Coastal Zone',
                'data': ee.Image(App.options.assets.znc + '/' + App.options.year + '-' + App.options.versions.znc).selfMask(),
                'shown': false,
                'vis': App.options.vis.integration,
                'legend': {
                    'params': {
                        "title": null,
                        "layers": [5, 33, 23, 32].map(App.ui.filterLegend),
                        "style": App.options.legend.params.style,
                        "orientation": App.options.legend.params.orientation
                    }
                }
            },
            {
                'name': 'Mining',
                'data': ee.Image(App.options.assets.min + '/' + App.options.year + '-' + App.options.versions.min).selfMask(),
                'shown': false,
                'vis': App.options.vis.integration,
                'legend': {
                    'params': {
                        "title": null,
                        "layers": [30].map(App.ui.filterLegend),
                        "style": App.options.legend.params.style,
                        "orientation": App.options.legend.params.orientation
                    }
                }
            },
            {
                'name': 'Pasture',
                'data': ee.Image(App.options.assets.pec + '/' + App.options.year + '-' + App.options.versions.pec).selfMask(),
                'shown': false,
                'vis': App.options.vis.integration,
                'legend': {
                    'params': {
                        "title": null,
                        "layers": [15].map(App.ui.filterLegend),
                        "style": App.options.legend.params.style,
                        "orientation": App.options.legend.params.orientation
                    }
                }
            },
            {
                'name': 'Planted Forest',
                'data': ee.Image(App.options.assets.fpt + '/' + App.options.year + '-' + App.options.versions.fpt).selfMask(),
                'shown': false,
                'vis': App.options.vis.integration,
                'legend': {
                    'params': {
                        "title": null,
                        "layers": [9].map(App.ui.filterLegend),
                        "style": App.options.legend.params.style,
                        "orientation": App.options.legend.params.orientation
                    }
                }
            },
            {
                'name': 'Urban',
                'data': ee.Image(App.options.assets.urb + '/' + App.options.year + '-' + App.options.versions.urb).selfMask(),
                'shown': false,
                'vis': App.options.vis.integration,
                'legend': {
                    'params': {
                        "title": null,
                        "layers": [24].map(App.ui.filterLegend),
                        "style": App.options.legend.params.style,
                        "orientation": App.options.legend.params.orientation
                    }
                }
            },
            {
                'name': 'Water',
                'data': ee.Image(App.options.assets.agu + '/' + App.options.year + '-' + App.options.versions.agu).selfMask(),
                'shown': false,
                'vis': App.options.vis.integration,
                'legend': {
                    'params': {
                        "title": null,
                        "layers": [33].map(App.ui.filterLegend),
                        "style": App.options.legend.params.style,
                        "orientation": App.options.legend.params.orientation
                    }
                }
            },
            {
                'name': 'Collection 3.1',
                'data': App.options.collection31,
                'shown': false,
                'vis': App.options.vis.integration,
                'legend': App.options.legend
            },
            {
                'name': 'Collection 4.1',
                'data': App.options.collection41,
                'shown': false,
                'vis': App.options.vis.integration,
                'legend': App.options.legend
            },
            {
                'name': 'Collection 5.0',
                'data': App.options.collection50,
                'shown': false,
                'vis': App.options.vis.integration,
                'legend': App.options.legend
            },
            {
                'name': 'Incidents',
                'data': App.options.incidents,
                'shown': false,
                'vis': App.options.vis.incidents,
                'legend': {
                    'params': {
                        "title": null,
                        "layers": [
                            ["#C8C8C8", 0, " 0 incident"],
                            ["#FED266", 1, " 1 incident"],
                            ["#FBA713", 2, " 2 incidents"],
                            ["#cb701b", 3, " 3 incidents"],
                            ["#cb701b", 4, " 4 incidents"],
                            ["#a95512", 5, " 5 incidents"],
                            ["#a95512", 6, " 6 incidents"],
                            ["#662000", 7, " 7 incidents"],
                            ["#662000", 8, " 8 incidents"],
                            ["#cb181d", 9, ">9 incidents"]
                        ],
                        "style": {
                            "backgroundColor": "#ffffff",
                            "color": "#212121",
                            "fontSize": '10px',
                            "iconSize": '12px',
                        },
                        "orientation": "vertical"
                    }
                }
            },
            {
                'name': 'States',
                'data': App.options.states,
                'shown': false,
                'vis': App.options.vis.states,
                'legend': {
                    'params': {
                        "title": null,
                        "layers": [
                            ["#C8C8C8", 1, " 1 State"],
                            ["#AE78B2", 2, " 2 States"],
                            ["#772D8F", 3, " 3 States"],
                            ["#4C226A", 4, " 4 States"],
                            ["#22053A", 5, ">5 States"],
                        ],
                        "style": {
                            "backgroundColor": "#ffffff",
                            "color": "#212121",
                            "fontSize": '10px',
                            "iconSize": '12px',
                        },
                        "orientation": "vertical"
                    }
                }
            },
            {
                'name': 'Difference',
                'data': App.options.difference,
                'shown': false,
                'vis': App.options.vis.difference,
                'legend': {
                    'params': {
                        "title": null,
                        "layers": [
                            ["#C8C8C8", 0, "No change"],
                            ["#a20500", 1, "Change"],
                        ],
                        "style": {
                            "backgroundColor": "#ffffff",
                            "color": "#212121",
                            "fontSize": '10px',
                            "iconSize": '12px',
                        },
                        "orientation": "vertical"
                    }
                }
            },
            {
                'name': 'Grids',
                'data': ee.Image().paint(ee.FeatureCollection(App.options.assets.grids), 25, 2),
                'shown': false,
                'vis': App.options.vis.vectors,
                'legend': null
            },
            {
                'name': 'Biomes',
                'data': ee.Image().paint(ee.FeatureCollection(App.options.assets.biomesVector), 25, 2),
                'shown': false,
                'vis': App.options.vis.vectors,
                'legend': null
            },
            {
                'name': 'Indigenous Land',
                'data': ee.Image(App.options.assets.tis).randomVisualizer(),
                'shown': false,
                'vis': { 'format': 'png', 'opacity': 0.4 },
                'legend': null
            },
            {
                'name': 'Protected Areas',
                'data': ee.Image(App.options.assets.anp).randomVisualizer(),
                'shown': false,
                'vis': { 'format': 'png', 'opacity': 0.4 },
                'legend': null
            },
            {
                'name': 'ESRI 2020',
                'data': ee.ImageCollection(App.options.assets.esri),
                'shown': false,
                'vis': App.options.vis.esri,
                'legend': {
                    'params': {
                        "title": null,
                        "layers": [
                            ['#1A5BAB', 1, 'Water'],
                            ['#358221', 2, 'Trees'],
                            ['#A7D282', 3, 'Grass'],
                            ['#87D19E', 4, 'Flooded Vegetation'],
                            ['#FFDB5C', 5, 'Crops'],
                            ['#EECFA8', 6, 'Scrub/Shrub'],
                            ['#ED022A', 7, 'Built Area'],
                            ['#EDE9E4', 8, 'Bare Ground'],
                            ['#F2FAFF', 9, 'Snow/Ice'],
                            ['#C8C8C8', 10, 'Cloud'],
                        ],
                        "style": {
                            "backgroundColor": "#ffffff00",
                            "color": "#212121",
                            "fontSize": '10px',
                            "iconSize": '12px',
                        },
                        "orientation": "vertical"
                    }
                }
            },
        ];
    },

    loadData: function () {

        App.getCollections();

        App.options.biomes = App.getRegions();

        App.options.classification = App.getClassifications();

        App.options.mosaics = App.getMosaics();

        App.options.prevalenceList = App.getPrevalenceList();

        App.options.states = App.calculateStates();

        App.options.incidents = App.calculateIncidents();

        App.options.difference = App.calculateFilterDiff();

        App.loadLayers();
    },

    ui: {

        init: function () {

            App.ui.form.init();
            App.ui.update();
            Map.centerObject(App.options.biomes, 5);
        },

        clear: function () {

            Map.layers().reset([]);

        },

        update: function () {

            var layersState = App.options.layers;

            App.loadData();

            App.options.layers.forEach(
                function (layer, index) {

                    App.options.layers[index].shown = layersState[index].shown;

                    App.ui.manageLayers(
                        App.options.layers[index]
                    );

                }
            );
        },

        filterLegend: function (classid) {
            var layer = App.options.legend.params.layers.filter(
                function (layer) {
                    return layer[1] === classid;
                }
            );
            return layer[0];
        },

        addImageLayer: function (layer) {
            var imageLayer = ui.Map.Layer({
                'eeObject': layer.data,
                'visParams': layer.vis,
                'name': layer.name,
                'shown': layer.shown,
                'opacity': 1.0
            });

            Map.add(imageLayer);

        },

        removeImageLayer: function (layer) {

            for (var i = 0; i < Map.layers().length(); i++) {

                var mapItem = Map.layers().get(i);

                if (layer.name === mapItem.get('name')) {
                    Map.remove(mapItem);
                }
            }

        },

        manageLayers: function (layer) {

            if (layer.shown) {
                App.ui.addImageLayer(layer);
            } else {
                App.ui.removeImageLayer(layer);
            }

        },

        buildLayerList: function () {

            App.options.layers.forEach(
                function (layer) {

                    if (layer.legend !== null) {
                        var legend = Legend.getLegend(layer.legend.params);
                    } else {
                        var legend = ui.Label({
                            'value': 'No legend.',
                            'style': {
                                'margin': '0px 0px 0px 100px',
                                'fontSize': '10px'
                            }
                        });
                    }

                    var panelBase = ui.Panel();
                    var panelCheckbox = ui.Panel({
                        'layout': ui.Panel.Layout.flow('horizontal')
                    });

                    var foldableLabels = ['➕', '➖'];

                    var foldable = ui.Checkbox({
                        "label": foldableLabels[+false],
                        "value": false,
                        "onChange": function (checked) {

                            foldable.set("label", foldableLabels[+checked]);

                            if (checked) {
                                legend.style().set("margin", "0px 4px 2px 15px");
                                panelBase.add(legend);
                            } else {
                                panelBase.remove(legend);
                            }
                        },
                        "disabled": false,
                        "style": {
                            'margin': '10px 0px 0px -15px',
                            'fontSize': '8px',
                            'backgroundColor': '#dddddd00',
                        }
                    });

                    var checkbox = ui.Checkbox({
                        "label": layer.name,
                        "value": false,
                        "onChange": function (checked) {

                            App.options.layers = App.options.layers.map(
                                function (obj) {
                                    if (obj.name === layer.name) {
                                        obj.shown = checked;
                                    }

                                    return obj;
                                }
                            );

                            App.ui.manageLayers(
                                layer
                            );
                        },
                        "disabled": false,
                        "style": {
                            'padding': '2px',
                            'stretch': 'horizontal',
                            'backgroundColor': '#dddddd',
                            'fontSize': '12px'
                        }
                    });

                    panelBase.add(panelCheckbox);
                    panelCheckbox.add(foldable);
                    panelCheckbox.add(checkbox);

                    App.ui.form.panelLayersList.add(panelBase);

                    checkbox.setValue(layer.shown, true);
                }
            );
        },

        form: {

            init: function () {

                // App.ui.buildLayerList();

                App.ui.form.panelMain.add(App.ui.form.labelTitle);
                App.ui.form.panelMain.add(App.ui.form.selectYear0);
                // App.ui.form.panelMain.add(App.ui.form.labelLayers);
                App.ui.form.panelMain.add(App.ui.form.panelLayersList);

                App.ui.form.panelLegend.add(Legend.getLegend(App.options.legend.params));
                // App.ui.form.panelLegend.add(App.ui.form.buttonHideLegend);

               App.ui.form.panelMain.add(App.ui.form.panelLegend);

                // Map.add(App.ui.form.panelMain);
                ui.root.add(App.ui.form.panelMain);

            },

            panelMain: ui.Panel({
                'layout': ui.Panel.Layout.flow('vertical'),
                'style': {
                    'width': '270px',
                    'position': 'bottom-right',
                    'margin': '0px 0px 0px 0px',
                },
            }),

            panelLayersList: ui.Panel({
                'layout': ui.Panel.Layout.flow('vertical'),
                'style': {
                    // 'height': '660px',
                    'stretch': 'vertical',
                    'backgroundColor': '#cccccc',
                    'margin': '0px 0px 0px 15px',
                },
            }),

            panelLegend: ui.Panel({
                'layout': ui.Panel.Layout.flow('vertical'),
                'style': {
                    'height': '650px',
                    'stretch': 'vertical',
                    'position': 'bottom-right'
                },
            }),

            labelTitle: ui.Label('MapBiomas Integration Toolkit', {
                'fontWeight': 'bold',
                // 'padding': '1px',
                'fontSize': '14px'
            }),

            labelLayers: ui.Label('Layers:', {
                // 'padding': '1px',
                'fontSize': '16px'
            }),

            selectYear0: ui.Select({
                'items': [
                    '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992',
                    '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000',
                    '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008',
                    '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016',
                    '2017', '2018', '2019', '2020'
                ],
                'placeholder': 'select year',
                'value': '2020',
                'onChange': function (year) {

                    App.ui.clear();

                    App.options.year = year;

                    App.ui.update();

                },
                'style': {
                    'stretch': 'horizontal'
                }
            }),

            // buttonHideLegend: ui.Button({
            //     'label': '➖️',
            //     'onClick': function () {
            //         Map.remove(App.ui.form.panelLegend);
            //         Map.add(App.ui.form.buttonShowLegend);
            //     },
            //     'style': {
            //         'position': 'bottom-right',
            //         'padding': '0px',
            //     }
            // }),

            // buttonShowLegend: ui.Button({
            //     'label': '➕️',
            //     'onClick': function () {
            //         Map.remove(App.ui.form.buttonShowLegend);
            //         Map.add(App.ui.form.panelLegend);
            //     },
            //     'style': {
            //         'position': 'bottom-right',
            //         'padding': '0px',
            //     }
            // }),

        },
    }
};

/**
 * 
 */
var Chart = {

    options: {
        'title': 'Inspector',
        'legend': 'none',
        'chartArea': {
            left: 30,
            right: 2,
        },
        'titleTextStyle': {
            color: '#ffffff',
            fontSize: 10,
            bold: true,
            italic: false
        },
        'tooltip': {
            textStyle: {
                fontSize: 10,
            },
            // isHtml: true
        },
        'backgroundColor': '#21242E',
        'pointSize': 6,
        'crosshair': {
            trigger: 'both',
            orientation: 'vertical',
            focused: {
                color: '#dddddd'
            }
        },
        'hAxis': {
            // title: 'Date', //muda isso aqui
            slantedTextAngle: 90,
            slantedText: true,
            textStyle: {
                color: '#ffffff',
                fontSize: 8,
                fontName: 'Arial',
                bold: false,
                italic: false
            },
            titleTextStyle: {
                color: '#ffffff',
                fontSize: 10,
                fontName: 'Arial',
                bold: true,
                italic: false
            },
            viewWindow: {
                max: 36,
                min: 0
            },
            gridlines: {
                color: '#21242E',
                interval: 1
            },
            minorGridlines: {
                color: '#21242E'
            }
        },
        'vAxis': {
            title: 'Class', // muda isso aqui
            textStyle: {
                color: '#ffffff',
                fontSize: 10,
                bold: false,
                italic: false
            },
            titleTextStyle: {
                color: '#ffffff',
                fontSize: 10,
                bold: false,
                italic: false
            },
            viewWindow: {
                max: 50,
                min: 0
            },
            gridlines: {
                color: '#21242E',
                interval: 2
            },
            minorGridlines: {
                color: '#21242E'
            }
        },
        'lineWidth': 0,
        // 'width': '300px',
        // 'height': '200px',
        'margin': '0px 0px 0px 0px',
        'series': {
            0: { color: '#21242E' }
        },

    },

    assets: {
        image: App.options.assets.collection60f
    },

    data: {
        image: null,
        point: null
    },

    legend: {
        0: { 'color': palette[0], 'name': 'Ausência de dados' },
        3: { 'color': palette[3], 'name': 'Formação Florestal' },
        4: { 'color': palette[4], 'name': 'Formação Savânica' },
        5: { 'color': palette[5], 'name': 'Mangue' },
        49: { 'color': palette[49], 'name': 'Restinga Florestal' },
        11: { 'color': palette[11], 'name': 'Área Úmida Natural não Florestal' },
        12: { 'color': palette[12], 'name': 'Formação Campestre' },
        32: { 'color': palette[32], 'name': 'Apicum' },
        29: { 'color': palette[29], 'name': 'Afloramento Rochoso' },
        13: { 'color': palette[13], 'name': 'Outra Formação não Florestal' },
        18: { 'color': palette[18], 'name': 'Agricultura' },
        39: { 'color': palette[39], 'name': 'Soja' },
        20: { 'color': palette[20], 'name': 'Cana' },
        40: { 'color': palette[40], 'name': 'Arroz' },
        41: { 'color': palette[41], 'name': 'Outras Lavouras Temporárias' },
        46: { 'color': palette[46], 'name': 'Café' },
        47: { 'color': palette[47], 'name': 'Citrus' },
        48: { 'color': palette[48], 'name': 'Outras Lavaouras Perenes' },
        9: { 'color': palette[9], 'name': 'Silvicultura' },
        15: { 'color': palette[15], 'name': 'Pastagem' },
        21: { 'color': palette[21], 'name': 'Mosaico de Agricultura ou Pastagem' },
        22: { 'color': palette[22], 'name': 'Área não Vegetada' },
        23: { 'color': palette[23], 'name': 'Praia e Duna' },
        24: { 'color': palette[24], 'name': 'Infraestrutura Urbana' },
        30: { 'color': palette[30], 'name': 'Mineração' },
        25: { 'color': palette[25], 'name': 'Outra Área não Vegetada' },
        33: { 'color': palette[33], 'name': 'Rio, Lago e Oceano' },
        31: { 'color': palette[31], 'name': 'Aquicultura' },
    },

    loadData: function () {
        Chart.data.image = ee.ImageCollection(Chart.assets.image).min();
    },

    init: function () {
        Chart.loadData();
        Chart.ui.init();
    },

    getSamplePoint: function (image, points) {

        var sample = image.sampleRegions({
            'collection': points,
            'scale': 30,
            'geometries': true
        });

        return sample;
    },

    ui: {

        init: function () {

            Chart.ui.form.init();
            Chart.ui.activateMapOnClick();

        },

        activateMapOnClick: function () {

            Map.onClick(
                function (coords) {
                    var point = ee.Geometry.Point(coords.lon, coords.lat);

                    var bandNames = Chart.data.image.bandNames();

                    var newBandNames = bandNames.map(
                        function (bandName) {
                            var name = ee.String(ee.List(ee.String(bandName).split('_')).get(1));

                            return name;
                        }
                    );

                    var image = Chart.data.image.select(bandNames, newBandNames);

                    Chart.ui.inspect(image, point);
                }
            );
        },

        refreshGraph: function (sample) {

            sample.evaluate(
                function (featureCollection) {

                    if (featureCollection !== null) {
                        // print(featureCollection.features);

                        var pixels = featureCollection.features.map(
                            function (features) {
                                return features.properties;
                            }
                        );

                        var bands = Object.getOwnPropertyNames(pixels[0]);

                        // Add class value
                        var dataTable = bands.map(
                            function (band) {
                                var value = pixels.map(
                                    function (pixel) {
                                        return pixel[band];
                                    }
                                );

                                return [band].concat(value);
                            }
                        );

                        // Add point style and tooltip
                        dataTable = dataTable.map(
                            function (point) {
                                var color = Chart.legend[point[1]].color;
                                var name = Chart.legend[point[1]].name;
                                var value = String(point[1]);

                                var style = 'point {size: 4; fill-color: ' + color + '}';
                                var tooltip = 'year: ' + point[0] + ', class: [' + value + '] ' + name;

                                return point.concat(style).concat(tooltip);
                            }
                        );

                        var headers = [
                            'serie',
                            'id',
                            { 'type': 'string', 'role': 'style' },
                            { 'type': 'string', 'role': 'tooltip' }
                        ];

                        dataTable = [headers].concat(dataTable);

                        Chart.ui.form.chartInspector.setDataTable(dataTable);

                    }
                }
            );
        },

        refreshMap: function () {

            var pointLayer = Map.layers().filter(
                function (layer) {
                    return layer.get('name') === 'Point';
                }
            );

            if (pointLayer.length > 0) {
                Map.remove(pointLayer[0]);
                Map.addLayer(Chart.data.point, {}, 'Point');
            } else {
                Map.addLayer(Chart.data.point, {}, 'Point');
            }

        },

        inspect: function (image, point) {

            // aqui pode fazer outras coisas além de atualizar o gráfico
            Chart.data.point = Chart.getSamplePoint(image, ee.FeatureCollection(point));

            Chart.ui.refreshMap(Chart.data.point);
            Chart.ui.refreshGraph(Chart.data.point);

        },

        form: {

            init: function () {

                Chart.ui.form.panelChart.add(Chart.ui.form.chartInspector);
                Chart.ui.form.chartInspector.setOptions(Chart.options);

                Chart.ui.form.chartInspector.onClick(
                    function (xValue, yValue, seriesName) {
                        print(xValue, yValue, seriesName);
                    }
                );

                Map.add(Chart.ui.form.panelChart);
            },

            panelChart: ui.Panel({
                'layout': ui.Panel.Layout.flow('vertical'),
                'style': {
                    'width': '450px',
                    // 'height': '200px',
                    'position': 'bottom-right',
                    'margin': '0px 0px 0px 0px',
                    'padding': '0px',
                    'backgroundColor': '#21242E'
                },
            }),

            chartInspector: ui.Chart([
                ['Serie', ''],
                ['', -1000], // número menor que o mínimo para não aparecer no gráfico na inicialização
            ])
        }
    }
};

App.init();
Chart.init();
