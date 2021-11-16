/**
 * @Author: Wildson Queiroz
 * 
 */

var metadataObj = require("users/queirozws/mb-workspace:initiative-assets/metadataList.js");

var dataObj = require("users/queirozws/mb-workspace:initiative-assets/getData.js");

var palette = require("users/mapbiomas/modules:Palettes.js").get('classification6');

var logos = require('users/mapbiomas/modules:Logos.js');

var App = {
    data: metadataObj.products,
    functions: {
        getMapId: dataObj.getMapId,
    },
    view: {
        painels: {},
        dataModel: {
            initiative: null, // "brazil"
            collection: null, // "6"
            theme: null, // "classification"
            asset_id: null, // "projects/mapbiomas-workspace/COLECAO6/mapbiomas-collection60-integration-v0-12"
            description: null, // "Dados de classificação da coleção 6 do Brasil"
            type: null, // "multiband-classification-collection"
            countries: null,
            source: null,
            metadata: {
                bands: {
                    prefix: null,
                },
                years: [
                    [ null ]
                ],
                biome: null,
                version: null,
            }
        },
        ui: {
            panel: [
                {
                    id: "main",
                    parentId: "root",
                    params: {
                        widgets: null,
                        layout: null,
                        style: {
                            width: "440px",
                            backgroundColor: "#222e3c",
                            stretch: "horizontal"
                        }
                    },
                },
                {
                    id: "header",
                    parentId: "main",
                    params: {
                        widgets: null,
                        layout: null,
                        style: {
                            border: "1px solid black",
                            backgroundColor: "222e3c",
                            margin: "10px 10px 5px 10px",
                            // textAlign: "center",
                            position: "bottom-right",
                            // stretch: "horizontal"
                        }
                    },
                },
                {
                    id: "description",
                    parentId: "main",
                    params: {
                        widgets: null,
                        layout: null,
                        style: {
                            border: "1px solid black",
                            backgroundColor: "#222e3c",
                            margin: "5px 10px 5px 10px"
                        }
                    },
                },
                {
                    id: "auxiliar",
                    parentId: "main",
                    params: {
                        widgets: null,
                        layout: ui.Panel.Layout.flow("horizontal", true),
                        style: {
                            width: "360px",
                            border: "1px solid black",
                            backgroundColor: "#222e3c",
                            margin: "5px 30px 5px 30px",
                            padding: "5px 10px 5px 10px",
                            textAlign: "center"
                        }
                    },
                },
                {
                    id: "map",
                    parentId: "main",
                    params: {
                        widgets: null,
                        layout: null,
                        style: {
                            width: "360px",
                            border: "1px solid black",
                            backgroundColor: "#222e3c",
                            margin: "5px 30px 5px 30px"
                        }
                    },
                },
            ],
            label: [
                {
                    id: "label1",
                    parentId: "description",
                    params: {
                        label: "Selecione uma das opções abaixo",
                        targetUrl: "",
                        style: {
                            backgroundColor: "#222e3c",
                            color: "white",
                            fontSize: "14px",
                            // position: "bottom-center"
                        }
                    },
                },
                {
                    id: "label2",
                    parentId: "header",
                    params: {
                        label: "Painel de controle",
                        targetUrl: "",
                        style: {
                            backgroundColor: "#222e3c",
                            color: "white",
                            fontSize: "20px",
                            position: "top-center"
                        }
                    },
                },
                {
                    id: "label3",
                    parentId: "map",
                    params: {
                        label: "Preview:",
                        targetUrl: "",
                        style: {
                            backgroundColor: "#222e3c",
                            color: "white",
                            fontSize: "14px",
                            margin: "10px 0px 0px 15px"
                            // position: "bottom-center"
                        }
                    },
                },
            ],
            select: [
                {
                    id: "select1",
                    parentId: "auxiliar",
                    params: {
                        items: [ "brazil",  "pampa", "raisg", "chaco", "indonésia", "af-trinacional" ],
                        placeholder: "FILTER BY INITIATIVE",
                        onChange: function(selectedOption) {
                            App.view.dataModel.initiative = selectedOption;
                            print(App.view.dataModel)
                        },
                        style: {
                            width: "330px",
                            margin: "5px 0px 5px 0px",
                            // stretch: "horizontal",
                            // position: "top-center"
                        },
                    },
                },
                {
                    id: "select2",
                    parentId: "auxiliar",
                    params: {
                        items: ["1","2","3","4","5","6"],
                        placeholder: "FILTER BY COLLECTION",
                        onChange: function(selectedOption) {
                            App.view.dataModel.collection = selectedOption;
                            print(App.view.dataModel)
                        },
                        style: {
                            width: "330px",
                            margin: "5px 0px 5px 0px",
                            // stretch: "horizontal",
                            // position: "top-center"
                        },
                    },
                },
                {
                    id: "select3",
                    parentId: "auxiliar",
                    params: {
                        items: [ "classification", "integration", "transition", "quality" ],
                        placeholder: "FILTER BY THEME",
                        onChange: function(selectedOption) {
                            App.view.dataModel.theme = selectedOption;
                            print(App.view.dataModel)
                        },
                        style: {
                            width: "330px",
                            margin: "5px 0px 5px 0px",
                            // stretch: "horizontal",
                            // position: "top-center"
                        },
                    },
                },
                {
                    id: "select4",
                    parentId: "auxiliar",
                    params: {
                        items: ["1","2","3","4","5","6"],
                        placeholder: "FILTER BY TYPE",
                        onChange: function(selectedOption) {
                            App.view.dataModel.type = selectedOption;
                            print(App.view.dataModel)
                        },
                        style: {
                            width: "330px",
                            margin: "5px 0px 5px 0px",
                            // stretch: "horizontal",
                            // position: "top-center"
                        },
                    },
                },
                {
                    id: "select5",
                    parentId: "auxiliar",
                    params: {
                        items: [
                            "Brasil",
                            "Bolívia",
                            "Colômbia",
                            "Equador",
                            "Guiana",
                            "Guiana Francesa",
                            "Peru",
                            "Suriname",
                            "Venezuela",
                            "Paraguay"
                        ],
                        placeholder: "FILTER BY COUNTRIES",
                        onChange: function(selectedOption) {
                            App.view.dataModel.countries = selectedOption;
                            print(App.view.dataModel)
                        },
                        style: {
                            width: "330px",
                            margin: "5px 0px 5px 0px",
                            // stretch: "horizontal",
                            // position: "top-center"
                        },
                    },
                },
                {
                    id: "select6",
                    parentId: "auxiliar",
                    params: {
                        items: [ "imazon", "LAPIG/UFG", "Solved", "IPAM", "outros..." ],
                        placeholder: "FILTER BY SOURCE",
                        onChange: function(selectedOption) {
                            App.view.dataModel.source = selectedOption;
                            print(App.view.dataModel)
                        },
                        style: {
                            width: "330px",
                            margin: "5px 0px 5px 0px",
                            // stretch: "horizontal",
                            // position: "bottom-center",
                        },
                    },
                },
                {
                    id: "select7",
                    parentId: "auxiliar",
                    params: {
                        items: [
                            "1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993",
                            "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002",
                            "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011",
                            "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020",
                        ],
                        placeholder: "FILTER BY FIRST YEAR",
                        onChange: function(selectedOption) {
                            App.view.dataModel.metadata.years = [selectedOption];
                            print(App.view.dataModel)
                        },
                        style: {
                            width: "160px",
                            margin: "5px 5px 5px 0px",
                            // stretch: "horizontal",
                            // position: "bottom-center",
                        },
                    },
                },
                {
                    id: "select8",
                    parentId: "auxiliar",
                    params: {
                        items: [
                            "1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993",
                            "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002",
                            "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011",
                            "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020",
                        ],
                        placeholder: "FILTER BY SECOND YEAR",
                        onChange: function(selectedOption) {
                            App.view.dataModel.metadata.years = [ [selectedOption] ];
                            print(App.view.dataModel)
                        },
                        style: {
                            width: "160px",
                            margin: "5px 0px 5px 5px",
                            // stretch: "horizontal",
                            // position: "bottom-center",
                        },
                    },
                },
                {
                    id: "select9",
                    parentId: "auxiliar",
                    params: {
                        items: [ "amazonia", "mata atlantica", "cerrado", "caatinga", "pampa", "pantanal" ],
                        placeholder: "FILTER BY BIOME",
                        onChange: function(selectedOption) {
                            App.view.dataModel.metadata.years = [ [selectedOption] ];
                            print(App.view.dataModel)
                        },
                        style: {
                            width: "330px",
                            margin: "5px 0px 5px 0px",
                            // stretch: "horizontal",
                            // position: "bottom-center",
                        },
                    },
                },
            ],
            button: [
                {
                    id: "button1",
                    parentId: "map",
                    params: {
                        label: "Clear the map",
                        onClick: function() { Map.clear() },
                        style: {
                            backgroundColor: "yellow",
                            color: "blue",
                            position: "bottom-right", // ?
                            margin: "10px 0px 5px 15px"
                        }
                    },
                },
                {
                    id: "button2",
                    parentId: "map",
                    params: {
                        label: "Visualize assets",
                        onClick: function () { // function (obj, selectedYears) {
                            
                            var mapId;
                            
                            var selectedYears = 0;
                            
                            var dataModel = App.view.dataModel;
                            
                            // filter products List;
                            var filtered = App.data.filter( // TODO substituir .filter() por .some() ?
                                
                                function(obj) {
                                    
                                    // code
                                    
                                    
                                    
                                    return ( (App.data[key] === this[key]) )
                                    
                                }, dataModel
                            )
                            
                            print(filtered);

                            // Add data to Map
                            filtered.forEach(
                                function (obj) {
                                    
                                    mapId = App.functions.getMapId(obj, selectedYears) 
                                    // var mapId = App.functions.getMapId(obj, selectedYears);
                            
                                    
                                    var layerName = obj.initiative + "-" + "collection-" + obj.collection + "-" + obj.theme;
                            
                                    // Map.addLayer(mapId, visParams, layerName, true, 1);
                                    Map.addLayer(mapId, {}, layerName, true, 1);

                                }
                            )
                            
                        },
                        style: {
                            backgroundColor: "yellow",
                            color: "blue",
                            position: "bottom-right", // ?
                            margin: "5px 0px 10px 15px" // TOP | RIGHT | BOTTOM | LEFT
                        }
                    },
                },
            ],
            map: [
                {
                    id: "map1",
                    parentId: "map",
                    params: {
                        center: {lat: -14, lon: -57, zoom: 3},
                        onClick: null,
                        style: {
                            margin: "10px 15px 0px 15px",
                            height: "290px"
                        }
                    },
                },
            ],
            chart: [],
            checkBox: [],
            dataSlider: [],
        },
        render: function (widgetType, obj, index) {
            
            var painels = App.view.painels;
            
            var type = {
                "panel": {
                    constructor: function (obj) {
                        
                        // var layout = ui.Panel.Layout.absolute();
                        // var layout = ui.Panel.Layout.flow("vertical", true);
                        
                        var params = {
                            widgets: obj.params.widgets || null, // || default params
                            layout: obj.params.layout || null, // || default params
                            style: obj.params.style || {width: "700px"} // || default params
                        }
                        
                        var panel = ui.Panel( params );
                        
                        if (obj.parentId === "root") {
                            
                            // print(panel);
                            // Map.add(panel);
                            ui.root.add(panel);
                            
                            painels[obj.id] = panel;
                            
                        } else {
                          
                            painels[obj.parentId].insert(index, panel);
        
                            painels[obj.id] = panel;
        
                        }
                        
                    },
                },
                "select": {
                    constructor: function (obj) {
                      
                        obj.parentId
                      
                        var params = {
                            items: obj.params.items || ["1","2","3","4","5"],
                            placeholder: obj.params.placeholder || "Choose an option",
                            value: obj.params.value || null,
                            onChange: obj.params.onChange || null,
                            disabled: obj.params.disabled || null,
                            style: obj.params.style || null
                        }
                        
                        var select = ui.Select(params);
                        
                        painels[obj.parentId].insert(index, select);
                        
                    }
                      
                },
                "button": {
                    constructor: function (obj) {
                      
                        var params = {
                            label: obj.params.label || "button (" + obj.parentId + " panel)", // || default value
                            onClick: obj.params.onClick || function () {print("button (" + obj.parentId + " panel)")}, // || default value
                            disabled: obj.params.disabled || false, // || default value
                            style: obj.params.style || {} // || default value
                        };
                        
                        var button = ui.Button(params);
                        
                        painels[obj.parentId].insert(index, button);
                        
                    }
                },
                "label": {
                    constructor: function (obj) {
                      
                        var params = {
                            value: obj.params.label || "some label (" + obj.parentId + " panel)", // || default value
                            targetUrl: obj.params.targetUrl || "", // || default value
                            style: obj.params.style || {} // || default value
                        };
                        
                        var button = ui.Label( params );
                        
                        painels[obj.parentId].insert(index, button);
                        
                    }
                },
                "map": {
                    constructor: function (obj) {
                      
                        var params = {
                            center: obj.params.center || {lat: -6, lon: -54, zoom: 3}, // || default value
                            onClick: obj.params.onClick || null, // || default value
                            style: obj.params.style || {margin: "15px"} // || default value
                        };
                        
                        var map = ui.Map( params );
                        
                        map
                            .setControlVisibility(false)
                            .setLocked(true);
                        
                        painels[obj.parentId].insert(index, map);
                        
                    }
                },
        
            };
            
            if (painels[obj.parentId] === "undefined" ) {
            
                print("O painel selecionado para o widget " + obj.id + " não existe!")
        
            } else {
                
                // print(obj.type)
                
                type[widgetType].constructor(obj);
                
            }
          
        },
        // behavior: {
        //     select: function selectAssets(obj) {
    
        //         var keys = Object.keys(obj);
                
        //         var filtered = keys.filter( // TODO substituir .filter() por .some() ?
                    
        //             function(key) {
                      
        //                 return ( (obj[key] === this[key]) )
                        
        //             }, selectedOptions)
                
        //         // If the objects have some key with the same value, its size will be greater than 0
        //         return filtered.length > 0
            
        //     }
        // },
        init: function (text) {
            
            var widgets = App.view.ui;
            
            Object.keys(widgets).forEach(
                function (type) {
                    
                    var index = 0;
            
                    var widgetList = widgets[type];
                    
                    widgetList.forEach(
                        function(obj) {
                            
                            index++;
                            
                            App.view.render(type, obj, index)
                            
                        }
                    );
                    
                    
                }
            );
        },
    },
    init: function() {
        
        // Constrói a interface
        App.view.init();
        
        print(App.data)
        
    }
}

App.init();

// 01:39