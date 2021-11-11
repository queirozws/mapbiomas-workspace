/**
 * @Author: Wildson Queiroz
 * @module: 
 */

var loop = require("users/queirozws/packages:js/arrayFunctions.js").loop;
var logos = require('users/mapbiomas/modules:Logos.js');

var logo = logos.mapbiomas;

var App = {
    view: {
        ui: [
            {
                type: "panel",
                id: "main",
                parentId: "root",
                params: {
                    widgets: null,
                    layout: null,
                    style: {
                        // width: "450px",
                        backgroundColor: "#222e3c",
                        // stretch: "horizontal"
                    }
                },
                child: [
                    {
                        type: "panel",
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
                        child: []
                    },
                    {
                        type: "panel",
                        id: "auxiliar",
                        parentId: "main",
                        params: {
                            widgets: null,
                            layout: null,
                            style: {
                                border: "1px solid black",
                                backgroundColor: "#222e3c",
                                margin: "15px 30px 15px 30px"
                            }
                        },
                        child: []
                    },
                    {
                        type: "label",
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
                        child: []
                    },
                    {
                        type: "label",
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
                        child: []
                    },
                    {
                        type: "select",
                        id: "select",
                        parentId: "auxiliar",
                        params: {
                            placeholder: "Escolha uma das opções",
                            // onChange: function() {print("olá")},
                            style: {
                                stretch: "horizontal"
                            },
                        },
                        child: [],
                    },
                    {
                        type: "button",
                        id: "button 1",
                        parentId: "main",
                        params: {
                            label: "Clear the map",
                            onClick: function() {print("Clear the map")},
                            style: {
                                backgroundColor: "red",
                                color: "blue"
                            }
                        },
                        child: [],
                    },
                    {
                        type: "button",
                        id: "button 2",
                        parentId: "auxiliar",
                        params: {
                            label: "button 2",
                            // onClick: function() {print("olá")},
                            style: {
                                backgroundColor: "red",
                                // color: "black",
                            }
                        },
                        child: [],
                    },
                    {
                        type: "button",
                        id: "button 3",
                        parentId: "auxiliar",
                        params: {
                            label: "button 3",
                            // onClick: function() {print("olá")},
                            style: {
                                backgroundColor: "red",
                                // color: "blue"
                            }
                        },
                        child: [],
                    },
                    {
                        type: "button",
                        id: "button 4",
                        parentId: "auxiliar",
                        params: {
                            label: "button 4",
                            // onClick: function() {print("olá")},
                            style: {
                                stretch: "horizontal"
                            }
                        },
                        child: [],
                    },
                    {
                        type: "map",
                        id: "Map 1",
                        parentId: "main",
                        params: {
                            center: {lat: -6, lon: -54, zoom: 3},
                            onClick: null,
                            style: {margin: "15px"}
                        },
                        child: [],
                    },
                ]
            },
            {
                type: "panel",
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
                child: [],
            }
        ],
  
    }

}

var painels = {};

function render(obj) {
    
    // print(obj.id);
    
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
                  
                    painels[obj.parentId].add(panel);

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
                
                painels[obj.parentId].add(select);
                
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
                
                painels[obj.parentId].add(button);
                
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
                
                painels[obj.parentId].add(button);
                
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
                
                painels[obj.parentId].insert(3, map);
                
            }
        },

    };
    
    if (painels[obj.parentId] === "undefined" ) {
    
        print("O painel selecionado para o widget " + obj.id + " não existe!")

    } else {
        
        type[obj.type].constructor(obj);
        
    }
  
}

function isArray(currentLevel) {
    return currentLevel
}

loop(App.view.ui, render);

// print(painels);

// 22:17