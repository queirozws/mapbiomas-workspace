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
                name: "main",
                params: {
                    widgets: null,
                    layout: null,
                    style: {
                        width: "450px"
                    }
                },
                parent: "root",
                child: [
                    {
                        type: "panel",
                        name: "header",
                        params: {
                            widgets: null,
                            layout: null,
                            style: {
                                border: "1px solid black",
                                backgroundColor: "blue",
                                margin: "15px 30px 15px 30px"
                            }
                        },
                        parent: "main",
                        child: []
                    },
                    {
                        type: "label",
                        name: "header",
                        params: {
                            label: "Insira aqui um título para o painel",
                            targetUrl: "",
                            style: {
                                backgroundColor: "yellow"
                            }
                        },
                        parent: "auxiliar",
                        child: []
                    },
                    {
                        type: "select",
                        name: "select",
                        params: {
                            placeholder: "Escolha uma das opções",
                            onChange: function() {print("olá")},
                            style: {
                                stretch: "horizontal"
                            },
                        },
                        parent: "main",
                        child: [],
                    },
                    {
                        type: "button",
                        name: "button 1",
                        params: {
                            label: "button 1",
                            // onClick: function() {print("olá")},
                            style: {}
                        },
                        parent: "main",
                        child: [],
                    },
                    {
                        type: "button",
                        name: "button 2",
                        params: {
                            label: "button 2",
                            // onClick: function() {print("olá")},
                            style: {}
                        },
                        parent: "header",
                        child: [],
                    },
                    {
                        type: "button",
                        name: "button 3",
                        params: {
                            label: "button 3",
                            // onClick: function() {print("olá")},
                            style: {}
                        },
                        parent: "header",
                        child: [],
                    },
                    {
                        type: "button",
                        name: "button 4",
                        params: {
                            label: "button 4",
                            // onClick: function() {print("olá")},
                            style: {
                                stretch: "horizontal"
                            }
                        },
                        parent: "header",
                        child: [],
                    },
                    {
                        type: "map",
                        name: "Map 1",
                        params: {
                            eeObject: ee.Image(),
                            visParams: {},
                            name: "Map",
                            shown: true,
                            opacity: 1
                        },
                        parent: "main",
                        child: [],
                    },
                ]
            },
            {
                type: "panel",
                name: "auxiliar",
                params: {
                    widgets: null,
                    layout: ui.Panel.Layout.Flow("horizontal"),
                    style: {
                        border: "1px solid black",
                        backgroundColor: "red",
                        margin: "5px 10px 5px 10px"
                    }
                },
                index: 1,
                parent: "main",
                child: [],
            }
        ],
  
    }

}

var painels = {};

function render(obj) {
    
    print(obj.name);
    
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
                
                if (obj.parent === "root") {
                    
                    ui.root.add(panel);
                    
                    painels[obj.name] = panel;
                    
                } else {
                  
                    painels[obj.parent].add(panel);

                    painels[obj.name] = panel;

                }
                
            },
        },
        "select": {
            constructor: function (obj) {
              
                obj.parent
              
                var params = {
                    items: obj.params.items || ["1","2","3","4","5"],
                    placeholder: obj.params.placeholder || "Choose an option",
                    value: obj.params.value || null,
                    onChange: obj.params.onChange || null,
                    disabled: obj.params.disabled || null,
                    style: obj.params.style || null
                }
                
                var select = ui.Select(params);
                
                painels[obj.parent].add(select);
                
            }
              
        },
        "button": {
            constructor: function (obj) {
              
                var params = {
                    label: obj.params.label || "button (" + obj.parent + " panel)", // || default value
                    onClick: obj.params.onClick || function () {print("button (" + obj.parent + " panel)")}, // || default value
                    disabled: obj.params.disabled || false, // || default value
                    style: obj.params.style || {} // || default value
                };
                
                var button = ui.Button(params);
                
                painels[obj.parent].add(button);
                
            }
        },
        "label": {
            constructor: function (obj) {
              
                var params = {
                    value: obj.params.label || "some label (" + obj.parent + " panel)", // || default value
                    targetUrl: obj.params.targetUrl || "", // || default value
                    style: obj.params.style || {} // || default value
                };
                
                var button = ui.Label( params );
                
                painels[obj.parent].add(button);
                
            }
        },
        "map": {
            constructor: function (obj) {
              
                var params = {
                    center: obj.params.value || {lat: -6, lon: -50, zoom: 3}, // || default value
                    onClick: obj.params.targetUrl || null, // || default value
                    style: obj.params.style || {margin: "15px"} // || default value
                };
                
                var map = ui.Map( params );
                
                painels[obj.parent].insert(1, map);
                
            }
        },

    };
    
    if (painels[obj.parent] === "undefined" ) {
    
        print("O painel selecionado para o widget " + obj.name + " não existe!")

    } else {
        
        type[obj.type].constructor(obj);
        
    }
  
}

function isArray(currentLevel) {
    return currentLevel
}

loop(App.view.ui, render);

print(painels);

// 19:49