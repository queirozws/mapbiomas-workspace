/**
 * @Author: Wildson Queiroz
 * 
 */

var loop = require("users/queirozws/packages:js/arrayFunctions.js").loop;

var App = {

    view: {
  
        ui: [
            {
                type: "panel",
                name: "mainPanel",
                params: {},
                data: null,
                style: {width: "450px"},
                parent: "root",
                child: [
        
                    {
                        type: "panel",
                        name: "header",
                        params: null,
                        data: null,
                        parent: "mainPanel",
                        style: {border: "1px solid black", backgroundColor: "blue"},
                        child: []
                    },
                    {
                        type: "select",
                        name: "select",
                        params: null,
                        data: null,
                        parent: "mainPanel",
                        style: {},
                        child: [],
                    },
                    {
                        type: "button",
                        name: "button 1",
                        params: null,
                        data: null,
                        parent: "mainPanel",
                        style: {},
                        child: [],
                    },
                    {
                        type: "button",
                        name: "button 2",
                        params: null,
                        data: null,
                        parent: "auxPanel",
                        style: {},
                        child: [],
                    },
                    {
                        type: "button",
                        name: "button 3",
                        params: null,
                        data: null,
                        parent: "header",
                        style: {},
                        child: [],
                    },
                    {
                        type: "button",
                        name: "button 3",
                        params: null,
                        data: null,
                        parent: "auxPanel",
                        style: {},
                        child: [],
                    },
                ]
            },
            {
                type: "panel",
                name: "auxPanel",
                params: null,
                data: null,
                style: {border: "1px solid black", backgroundColor: "red"},
                parent: "mainPanel",
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
                
                var defaultParams = {
                    widgets: null,
                    layout: layout,
                    style: obj.style
                }
                
                var panel = ui.Panel( obj.params || defaultParams );
                
                if (obj.parent === "root") {
                    
                    print("root");
                    
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
                    items: ["1","2","3","4","5"],
                    placeholder: "Choose an option",
                    value: null,
                    onChange: null,
                    disabled: null,
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