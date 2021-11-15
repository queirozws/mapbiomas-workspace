/**
 * @Author: Wildson Queiroz
 * 
 */

var metadataObj = require("users/queirozws/mb-workspace:initiative-assets/metadataList.js");

var dataObj = require("users/queirozws/mb-workspace:initiative-assets/getData.js");

var palette = require("users/mapbiomas/modules:Palettes.js").get('classification6');

var logos = require('users/mapbiomas/modules:Logos.js');

var painels = {};

var app = {
    view: {
        ui: {
            panel: [
                {
                    id: "main",
                    parentId: "root",
                    params: {
                        widgets: null,
                        layout: null,
                        style: {
                            width: "500px",
                            backgroundColor: "#222e3c",
                            // stretch: "horizontal"
                        }
                    },
                },
                {
                    id: "header",
                    parentId: "main",
                    params: {
                        widgets: null,
                        layout: ui.Panel.Layout.flow("vertical", false),
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
                        layout: null,
                        style: {
                            border: "1px solid black",
                            backgroundColor: "#222e3c",
                            margin: "5px 30px 5px 30px"
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
                        placeholder: "FILTER BY INITIATIVE",
                        // onChange: function() {print("olá")},
                        style: {
                            backgroundColor: "yellow",
                            stretch: "horizontal",
                            margin: "10px 10px 5px 10px"
                        },
                    },
                },
                {
                    id: "select2",
                    parentId: "auxiliar",
                    params: {
                        placeholder: "FILTER BY COLLECTION",
                        // onChange: function() {print("olá")},
                        style: {
                            stretch: "horizontal",
                            margin: "10px 10px 5px 10px"
                        },
                    },
                },
                {
                    id: "select3",
                    parentId: "auxiliar",
                    params: {
                        placeholder: "FILTER BY THEME",
                        // onChange: function() {print("olá")},
                        style: {
                            stretch: "horizontal",
                            margin: "10px 10px 5px 10px"
                        },
                    },
                },
                {
                    id: "select4",
                    parentId: "auxiliar",
                    params: {
                        placeholder: "FILTER BY TYPE",
                        // onChange: function() {print("olá")},
                        style: {
                            stretch: "horizontal",
                            margin: "10px 10px 5px 10px"
                        },
                    },
                },
                {
                    id: "select5",
                    parentId: "auxiliar",
                    params: {
                        placeholder: "FILTER BY COUNTRIES",
                        // onChange: function() {print("olá")},
                        style: {
                            stretch: "horizontal",
                            margin: "10px 10px 5px 10px"
                        },
                    },
                },
                {
                    id: "select6",
                    parentId: "auxiliar",
                    params: {
                        placeholder: "FILTER BY SOURCE",
                        // onChange: function() {print("olá")},
                        style: {
                            stretch: "horizontal",
                            margin: "10px 10px 5px 10px"
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
                        onClick: function() {print("Clear the map")},
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
                        onClick: function() {print("Clear the map")},
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
                        center: {lat: -6, lon: -54, zoom: 3},
                        onClick: null,
                        style: {
                            margin: "10px 15px 0px 15px"
                        }
                    },
                },
            ],
            chart: [],
            checkBox: [],
            dataSlider: [],
        },
    },
    init: function() {
        
        var render = this.view.render;
        
        this.view.ui.forEach(
            function (obj) {
                
                index = index + 1;
                
                render(obj, index);

            }
        );

    }
}

var widgets = app.ui;

// function render(text) {
//     print(text)
// }

function render(widgetType, obj, index) {

    var type = {
        "panel": {
            constructor: function (obj) {
                
                // var layout = ui.Panel.Layout.absolute();
                var layout = ui.Panel.Layout.flow("vertical", false);
                
                var params = {
                    widgets: obj.params.widgets || null, // || default params
                    layout: obj.params.layout || layout, // || default params
                    style: obj.params.style || {width: "700px"} // || default params
                }
                
                var panel = ui.Panel( params );
                
                if (obj.parentId === "root") {
                    
                    print(panel);
                    // Map.add(panel);
                    // ui.root.add(panel);
                    
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
                
                painels[obj.parentId].insert(index, map);
                
            }
        },

    };
    
    if (painels[obj.parentId] === "undefined" ) {
    
        print("O painel selecionado para o widget " + obj.id + " não existe!")

    } else {
        
        // print(obj.type)
        
        type[obj.type].constructor(obj);
        
    }
  
}

Object.keys(widgets).forEach(
    function (type) {
        
        var index = 0;

        var widgetList = widgets[type];
        
        widgetList.forEach(
            function(obj) {
                
                index++;
                
                obj.type = type;
                
                render(type, obj, index)
                
            }
        );
        
        
    }
);


print(ui.root.widgets().get(0).style().set({"background-color": "red", stretch: "both"}));


// 19:39