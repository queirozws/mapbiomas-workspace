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
              height: "350px",
              width: "350px",
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

var obj = {
  a: "nome",
  b: this
}

var params = {
    widgets: null,
    layout: null,
    style: {
        height: "350px",
        width: "350px",
    }
}

var panel = ui.Panel( params );

var header = ui.Panel({ style: {width: "100px"} });

// ui.root.add(panel);

var params = {
    items: null,
    placeholder: null,
    value: null,
    onChange: null,
    disabled: null,
    style: obj.style
}

var select = ui.Select();

var select2 = ui.Select();

// panel.add(header);

// panel.add(select);

// panel.add(select2);



// print(obj);
print(App.view.ui[0].child[0].parent)

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

print(ui.root.widgets())
// print(panel.widgets())







