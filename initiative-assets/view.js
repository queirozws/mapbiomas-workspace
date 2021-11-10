/**
 * @Author: Wildson Queiroz
 * @module: 
 */

var loop = require("users/queirozws/packages:js/arrayFunctions.js").loop;

var App = {
    view: {
        ui: [
            {
                type: "panel",
                id: "main",
                params: {
                    widgets: null,
                    layout: null,
                    style: {
                        width: "450px",
                        backgroundColor: "#222e3c"
                    }
                },
                parentId: "root",
                child: [
                    {
                        type: "panel",
                        id: "header",
                        params: {
                            widgets: null,
                            layout: null,
                            style: {
                                border: "1px solid black",
                                backgroundColor: "#222e3c",
                                margin: "15px 30px 15px 30px"
                            }
                        },
                        parentId: "main",
                        child: []
                    },
                    {
                        type: "label",
                        id: "header",
                        params: {
                            label: "Insira aqui um título para o painel",
                            targetUrl: "",
                            style: {
                                backgroundColor: "#222e3c",
                                color: "white",
                                fontSize: "20px",
                                position: "bottom-center"
                            }
                        },
                        parentId: "auxiliar",
                        child: []
                    },
                    {
                        type: "select",
                        id: "select",
                        params: {
                            placeholder: "Escolha uma das opções",
                            // onChange: function() {print("olá")},
                            style: {
                                stretch: "horizontal"
                            },
                        },
                        parentId: "main",
                        child: [],
                    },
                    {
                        type: "button",
                        id: "button 1",
                        params: {
                            label: "button 1",
                            // onClick: function() {print("olá")},
                            style: {}
                        },
                        parentId: "main",
                        child: [],
                    },
                    {
                        type: "button",
                        id: "button 2",
                        params: {
                            label: "button 2",
                            // onClick: function() {print("olá")},
                            style: {}
                        },
                        parentId: "header",
                        child: [],
                    },
                    {
                        type: "button",
                        id: "button 3",
                        params: {
                            label: "button 3",
                            // onClick: function() {print("olá")},
                            style: {}
                        },
                        parentId: "header",
                        child: [],
                    },
                    {
                        type: "button",
                        id: "button 4",
                        params: {
                            label: "button 4",
                            // onClick: function() {print("olá")},
                            style: {
                                stretch: "horizontal"
                            }
                        },
                        parentId: "header",
                        child: [],
                    },
                    {
                        type: "map",
                        id: "Map 1",
                        params: {
                            center: {lat: -6, lon: -54, zoom: 3},
                            onClick: null,
                            style: {margin: "15px"}
                        },
                        parentId: "main",
                        child: [],
                    },
                ]
            },
            {
                type: "panel",
                id: "auxiliar",
                params: {
                    widgets: null,
                    // layout: ui.Panel.Layout.absolute(),
                    style: {
                        border: "1px solid black",
                        backgroundColor: "222e3c",
                        margin: "5px 10px 5px 10px",
                        position: "bottom-right"
                    }
                },
                index: 1,
                parentId: "main",
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
                    
                    // print(panel);
                    // Map.add(panel);
                    ui.root.add(panel);
                    
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
                
                painels[obj.parentId].insert(2, map);
                
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

// 01:07