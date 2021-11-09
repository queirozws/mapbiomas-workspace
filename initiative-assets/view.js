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
                data: null,
                style: {width: "450px"},
                parent: "root",
                child: [
        
                    {
                        type: "panel",
                        name: "header",
                        data: null,
                        parent: "mainPanel",
                        style: {border: "1px solid black", backgroundColor: "blue"},
                        child: []
                    },
                    {
                        type: "select",
                        name: "select",
                        data: null,
                        parent: "mainPanel",
                        style: {},
                        child: [],
                    },
                    {
                        type: "button",
                        name: "button 1",
                        data: null,
                        parent: "mainPanel",
                        style: {},
                        child: [],
                    },
                    {
                        type: "button",
                        name: "button 2",
                        data: null,
                        parent: "auxPanel",
                        style: {},
                        child: [],
                    },
                    {
                        type: "button",
                        name: "button 3",
                        data: null,
                        parent: "header",
                        style: {},
                        child: [],
                    },
                ]
            },
            {
                type: "panel",
                name: "auxPanel",
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
              
                var params = {
                    widgets: null,
                    layout: "flow",
                    style: obj.style
                }
                
                var panel = ui.Panel( params );
                
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

// function loop(currentLevel, callback) {
    
//     print(currentLevel);
    
//     var filtered = currentLevel.filter(
        
//         function(obj) {

//             render(obj);
            
//             print(obj.type + "/" + obj.name); // || render function
            
//             // ( (child > 0) && print(obj.type + "/" + obj.name + " has child") );
            
//             // ( (child !== 0) || print(obj.type + "/" + obj.name + " hasn't child") );
            
//             // loop(obj.child);
            
//             return obj.child.length > 0
        
//         }
        
//     )
    
//     // var child = obj.child.length;
    
//     // var filtered = currentLevel.filter(function(obj) {return obj.child.length > 0});
    
//     filtered.forEach(
//         function (obj) {
            
//             var nextLevel = obj.child;
            
//             nextLevel.filter(
//                 function (obj) {
                    
//                     // render(obj)
                    
//                     print(obj.type + "/" + obj.name);
                    
//                     return obj.child.length > 0
//                 }
//             );
            
            
//         });
    
//     // add sub elements
//     // filtered.forEach(
//     //     function (obj){
            
//     //         var newList = obj.child;
            
//     //         newList.forEach(
//     //             function (obj) {
                    
//     //                 render(obj)
                    
//     //             }
//     //         );
            
//     //     }
//     // )
    
    
//   // var keyList = Object.keys(obj);
  
//   // keyList.forEach(
//   //     function (key) {
        
//   //       // obj[key];
        
//   //       console.log(key+" key")
        
//   //     }
//   // )
  
//   // print(keyList);


  
//   // callback()
// }

loop(App.view.ui, render);

print(painels);

// 19:49