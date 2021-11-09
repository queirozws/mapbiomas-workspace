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
                style: {width: "90px"},
                parent: "root",
                child: [
        
                    {
                        type: "panel",
                        name: "header",
                        data: null,
                        parent: "mainPanel",
                        style: {width: "450px",},
                        child: []
                    },
                    {
                        type: "select",
                        name: "Choose an option",
                        data: null,
                        parent: "mainPanel",
                        style: {},
                        child: [],
                    },
                    {
                        type: "button",
                        name: "Visualize data",
                        data: null,
                        parent: "mainPanel",
                        style: {},
                        child: [],
                    }          
        
                ]
            },
            {
                type: "panel",
                name: "auxPanel",
                data: null,
                style: {width: "90px", border: "1px solid black", backgroundColor: "red"},
                parent: "root",
                child: [],
            }
        ],
  
    }

}

// print(App);
// print(App.view.ui[0].child[0].parent)

var widgets = [];

function render(obj) {
  
    var type = {
        "panel": {
            constructor: function (obj) {
              
                var params = {
                    widgets: null,
                    layout: null,
                    style: obj.style
                }
                
                var panel = ui.Panel( params );
                
                // print(obj.name, panel)
                
                var key = obj.name;
                
                widgets.push( {key: panel} );
                
                ui.root.add(panel);
                
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
                
                widgets[parent].add(select);
                
                // print(select);

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
                
                widgets[parent].add(select);
                
                // print(button);

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

// render(App.view.ui[0].child[0]);
// render(App.view.ui[0].child[1]);
// render(App.view.ui[0].child[2]);

// print(ui.root.widgets())
// print(panel.widgets())


// 17:28