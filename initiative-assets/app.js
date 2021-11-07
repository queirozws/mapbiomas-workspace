/**
 * 
 * 
 */


var init = function () {
    
    print("Iniciando o app...");
    
}

var function2 = function () {}

var App = {
    data: {
        uiData: {
            selectedOptions: {
                initiative: null,
                collection: null,
                theme: null,
                type: null,
                countries: null,
                source: null,
            },
            select1: {
                initiative: [
                    "brazil",
                    "pampa",
                    "raisg",
                    "chaco",
                    "indonésia",
                    "af-trinacional"
                ],
                collection: ["1", "2", "3", "4", "5", "6"],
                theme: [
                    "classification",
                    "integration",
                    "transition",
                    "quality"
                ],
                // asset_id: "string",
                // description: "string",
                type: [
                    "singleband-classification",
                    "singleband-integration",
                    "singleband-transition",
                    "singleband-quality",
                    "multiband-classification",
                    "multiband-integration",
                    "multiband-transition",
                    "multiband-quality",
                    "multiband-classification-collection",
                    "multiband-integration-collection",
                    "multiband-transition-collection",
                    "multiband-quality-collection",
                ],
                countries: [
                    "Brasil",
                    "Bolívia",
                    "Colômbia",
                    "Equador",
                    "Guiana",
                    "Guiana Francesa",
                    "Peru",
                    "Suriname",
                    "Venezuela",
                    "Paraguay"
                ],
                source: [ "imazon", "LAPIG/UFG", "Solved", "IPAM", "outros..." ]
                // TODO: metadata: {}
            },
        // params: {
        //     "select": function() {
                
        //     },
        //     "label": function() {
                
        //     },
            
        // },
        getParams: function(obj) {
            
            var params = {
                "select": function(obj) {
                    
                },
                "label": function(obj) {
                    
                },
                "someWidget": function(obj) {
                    
                }
            }
            
            return params[App.data.widgetType](obj)
            
        }

        }
    },
    functions: {
        objIterate: function(obj, callback) {
            var keyList = Object.keys(obj)
            
            keyList.forEach(
                function(key) {
                    callback(key)
                }
            )
        },
        createWidget: function(widget, params) {
            
            
            
            print(widget)
        }
    },
    ui: {
        widget: {
            select: {
                build: function(obj, onOff) {
                    
                    var select = ui.Select(obj);
                    
                    ( onOff && print(select) );
                },
                params: function() {
                    return {
                        items: null,
                        placeholder: null,
                        value: null,
                        onChange: null,
                        disabled: null,
                        style: null,
                    }
                },
                batchBuilder: function(obj) {
                    
                    var keyList = Object.keys(obj);
                    
                    var params = App.ui.params[App.data.widgetType]
                    
                    keyList.forEach(
                        function(key) {
                            callback(key)
                        }
                    )
                }
            },
            label: {}
        },
    },
    init: function () {
    
        print("Iniciando o app...");
        
        // Obter imagens
        
        // getParams
        
        var params = App.ui.widget.select.params();
        
        App.ui.widget.select.build( params, true )
        
    }
}

// var select = App.ui.select.constructor( App.data.selectButtons.initiative, "placeHolder", "brazil" )
// var select = App.ui.select( returnObj )



// print( Object.keys(ui.Select.prototype) )

App.init();

// map1.set('a', 1);

// map1.nome = "Wildson"

// console.log(map1);

// print(map1)


// 04:02
