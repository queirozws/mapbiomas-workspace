/**
 * @Author: Wildson Queiroz
 * 
 */

var metadataObj = require("users/queirozws/mb-workspace:initiative-assets/metadataList.js");

var palettes = require('users/mapbiomas/modules:Palettes.js');

var products = metadataObj.products;

// var getMapId = dataObj.getMapId;

var App = {
    data: {
        uiData: {
            selectedOptions: {
                initiative: null,
                collection: null,
                theme: null,
                type: null,
                countries: null,
                source: null
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
                    "multiband-quality-collection"
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
                source: [ "imazon", "LAPIG/UFG", "Solved", "IPAM", "outros..." ],
                // TODO: metadata: {}
            },
            palette: {
                "classification": palettes.get("classification6"),
                "transition": ['ffa500', 'ff0000', '818181', '06ff00', '4169e1', '8a2be2'],
                "quality": ['d73027', 'fef9b6', '1d6a37']
            },
            // params: {
            //     "select": function() {
                    
            //     },
            //     "label": function() {
                    
            //     },
                
            // },
        },
        rawData: {}
    },
    functions: {
        main: function() {},
        getData: function() {},
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

        },
        getParams: function(obj) {
            
            var params = {
                "select": function(obj, key) {

                    return {
                        items: obj[key],
                        placeholder: null,
                        value: null,
                        onChange: null,
                        disabled: null,
                        style: null,
                    }


                },
                "label": function(obj) {
                    
                },
                "someWidget": function(obj) {
                    
                }
            }
            
            return params[App.data.widgetType](obj)
            
        },
        uiBehavior: {
            func1: function(option) {
                    
                    selectedOptions = {};
                    
                    selectedOptions[key] = option;
                    
                    ( (option === 'classification') && (visParams = {min: 0, max: 49, palette: palette}));
                    
                    products = products.filter(selectAssets, selectedOptions);
                    
                    console.log("Os critérios acima retornaram: " + products.length + " assets", products);
                    
            }
        }
    },
    ui: {
        widget: {
            select: {
                builder: function(obj, onOff, panel) {
                    
                    var select = ui.Select(obj);
                    
                    ( onOff && print(select) );
                },
                batchBuilder: function(obj, callback, panel) {
                    
                    var keyList = Object.keys(obj);
                    
                    keyList.forEach(
                        function(key) {
                            
                            // var params = App.functions.getParams(obj, key)
                            
                            // var select = ui.Select( params )
                            var select = ui.Select({
                                items: obj[key],
                                placeholder: "Select an option " + "(" + key + ")",
                                value: null,
                                onChange: callback,
                                disabled: null,
                                style: null
                            });
                            
                            // print(select);
                            
                            panel.add(select)
                            
                            // ( onOff && panel.add(select) );
                            
                            // callback(key)
                        }
                    )
                }
            },
            label: {
                builder: function(obj, panel) {
                    
                    var label = ui.Label(obj.text);
                    
                    panel.add(label);
                }
              
            }
        },
        form: {
            mainPanel: ui.Panel(),
            // this.mainPanel.
        },
        style: {
            
        },
        init: function() {
            
            var mainPanel = App.ui.form.mainPanel;
            
            ui.root.add(mainPanel);

            App.ui.form.mainPanel.style().set({
                height:  "300px",
                width: "500px",
                textAlign: "right",
                // stretch: "horizontal",
                // position: "top-right"
            })
            
            var labelParams = {
                text: 'Utilize as opções abaixo para selecionar os assets a serem exibidos:',
                // style: {}
            };
            
            App.ui.widget.label.builder(labelParams, mainPanel)
            
            // getParams
            
            var params = App.data.uiData.select1;
            
            print(params)
            
            App.ui.widget.select.batchBuilder( params, App.functions.uiBehavior.func1, mainPanel )
            
            // print(ui.Panel.))
        

        }
    },
    init: function () {
    
        print("Iniciando o app...");
        
        Map.setCenter(-50, -10, 4);

        App.ui.init();
        
        // Obter imagens
        
        // Exibir imagens no mapa
        
    }
}

App.init();

// 22:37

