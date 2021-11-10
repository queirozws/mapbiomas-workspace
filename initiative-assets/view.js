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
                                backgroundColor: "blue"
                            }
                        },
                        parent: "main",
                        child: []
                    },
                    {
                        type: "select",
                        name: "select",
                        params: {
                            onChange: function() {print("olá")},
                            style: {
                                placeholder: "Escolha uma das opções"
                            },
                        },
                        parent: "main",
                        child: [],
                    },
                    {
                        type: "button",
                        name: "button 1",
                        params: {
                            onClick: function() {print("olá")},
                            style: {
                                
                            }
                        },
                        parent: "main",
                        child: [],
                    },
                    {
                        type: "button",
                        name: "button 2",
                        params: {
                            onClick: function() {print("olá")},
                            style: {
                                
                            }
                        },
                        parent: "header",
                        child: [],
                    },
                    {
                        type: "button",
                        name: "button 3",
                        params: {
                            onClick: function() {print("olá")},
                            style: {
                                
                            }
                        },
                        parent: "auxiliar",
                        child: [],
                    },
                    {
                        type: "button",
                        name: "button 4",
                        params: {
                            onClick: function() {print("olá")},
                            style: {
                                
                            }
                        },
                        parent: "auxiliar",
                        child: [],
                    },
                ]
            },
            {
                type: "panel",
                name: "auxiliar",
                params: {
                    widgets: null,
                    layout: null,
                    style: {
                        border: "1px solid black",
                        backgroundColor: "red"
                    }
                },
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
                    style: obj.style
                }
                
                var select = ui.Select(params);
                
                var parent = obj.parent;
                
                painels[parent].add(select);
                
            }
              
        },
        "button": {
            constructor: function (obj) {
              
                var params = {
                    label: obj.name,
                    onClick: null,
                    disabled: null,
                    style: obj.style
                };
                
                var button = ui.Button(params);
                
                var parent = obj.parent;
                
                painels[parent].add(button);
                
            }
        },

    };
    
    type[obj.type].constructor(obj);
  
}

function isArray(currentLevel) {
    return currentLevel
}

loop(App.view.ui, render);

print(painels);

// 19:49