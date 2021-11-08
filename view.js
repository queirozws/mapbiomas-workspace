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
            parent: this.,
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
            parent: this,
            style: {
              // height: "35",
              width: "100px",
            },
            child: "none",
          },
          {
            type: "button",
            name: "Visualize data",
            data: null,
            parent: this.,
            style: {
              // height: "35px",
              width: "100px",
            },
            child: "none",
          }          
        ]
      },
    ],
    uiData: null
  }
}

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
    "select": {
        constructor: function (obj) {
          
          var params = {
              items: null,
              placeholder: null,
              value: null,
              onChange: null,
              disabled: null,
              style: obj.style
          }
          
          ui.Select(params)
          
        },
    "button": {
        constructor: function (obj) {
          
          var params = obj
          
          ui.Button({
              label: null,
              onClick: null,
              disabled: null,
              style: obj.style
          })

    },
  }
  
}

ee.Select

function walk(obj, callback) {
  
  var nodeList = obj.view.ui;
  
  print(nodeList)
  
  var keyList = Object.keys(obj);
  
  keyList.forEach(
    function (key) {
      
      obj[key]
      
      console.log(key+" key")
    }
  )
  
  print(keyList)

  
  // callback()
}


render(App);







