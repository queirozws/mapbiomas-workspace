/**
 * 
 * 
 */

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
        
                    // {
                    //     type: "panel",
                    //     name: "header",
                    //     data: null,
                    //     parent: "mainPanel",
                    //     style: {width: "450px",},
                    //     child: "none"
                    // },
                    {
                        type: "select",
                        name: "Choose an option",
                        data: null,
                        parent: "mainPanel",
                        style: {},
                        child: "none",
                    },
                    {
                        type: "button",
                        name: "Visualize data",
                        data: null,
                        parent: "mainPanel",
                        style: {},
                        child: "none",
                    }          
        
                ]
            },
            {
                type: "panel",
                name: "auxPanel",
                data: null,
                style: {width: "90px", border: "1px solid black", backgroundColor: "gray"},
                parent: "root",
                child: [],
            }
        ],
  
    }

}

// print(App);
// print(App.view.ui[0].child[0].parent)

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
                
                ui.root.add(panel);
                
            },
        },
        "select": {
            constructor: function (obj) {
              
                var params = {
                    items: ["1","2","3","4","5"],
                    placeholder: "Choose an option",
                    value: null,
                    onChange: null,
                    disabled: null,
                    style: obj.style
                }
                
                var select = ui.Select(params);
                
                // panel.add(select);
                
                print(select);

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
                
                print(button);

            }
        },

    };
    
    type[obj.type].constructor(obj);
  
}

function loop(list, callback) {
  
    // var list = obj.view.ui;
    
    print(list);
    
    list.forEach(
        
        function(obj) {

            render(obj);
            
            print(obj.type + "/" + obj.name); // || render function
            
            var child = obj.child.length;
            
            var filtered = list.filter(function(obj) {return obj.child.length > 0});
            
            // add sub elements
            filtered.forEach(
                function (obj){
                    
                    var newList = obj.child;
                    
                    newList.forEach(
                        function (obj) {
                            
                            render(obj)
                            
                        }
                    );
                    
                }
            )
            
            // ( (child > 0) && print(obj.type + "/" + obj.name + " has child") );
            
            // ( (child !== 0) || print(obj.type + "/" + obj.name + " hasn't child") );
            
            // loop(obj.child);
        
        }
        
    )
  
  // var keyList = Object.keys(obj);
  
  // keyList.forEach(
  //     function (key) {
        
  //       // obj[key];
        
  //       console.log(key+" key")
        
  //     }
  // )
  
  // print(keyList);

  
  // callback()
}

loop(App.view.ui)

// render(App.view.ui[0].child[0]);
// render(App.view.ui[0].child[1]);
// render(App.view.ui[0].child[2]);

// print(ui.root.widgets())
// print(panel.widgets())






