function component(obj, type) {

    var obj2 = {
        type: "panel",
        name: "header",
        data: null,
        parent: "mainPanel",
        style: {
            width: "450px",
        },
        child: "none"
    }
    
    this.type = "string";

    // print(this.type)

}

component(null, "olá").type;


var App = {
  view: {
    ui: [
      {
        type: "panel",
        name: "mainPanel",
        data: null,
        parent: "root",
        child: [
          {
            type: "panel",
            name: "header",
            data: null,
            parent: "mainPanel",
            style: {
              width: "450px",
            },
            child: "none"
          },
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
    ],
    uiData: null
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

function walk(obj, callback) {
  
  var nodeList = obj.view.ui;
  
  print(nodeList);
  
  var keyList = Object.keys(obj);
  
  keyList.forEach(
      function (key) {
        
        // obj[key];
        
        console.log(key+" key")
        
      }
  )
  
  print(keyList);

  
  // callback()
}


render(App.view.ui[0].child[0]);
render(App.view.ui[0].child[1]);
render(App.view.ui[0].child[2]);

// print(ui.root.widgets())
// print(panel.widgets())







