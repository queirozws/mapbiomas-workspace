/**
 * 
 * 
 */

var palettes = require('users/mapbiomas/modules:Palettes.js');

// var metadata = require('users/queirozws/mb-workspace:initiative-assets/metadataList.js');

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

    },
    ui: {
        widget: {
            select: {
                build: function(obj, onOff) {
                    
                    var select = ui.Select(obj);
                    
                    ( onOff && print(select) );
                },
                batchBuilder: function(obj) {
                    
                    var keyList = Object.keys(obj);
                    
                    var params = App.ui.params[App.data.widgetType]
                    
                    keyList.forEach(
                        function(key) {
                            
                            // var params = App.functions.getParams()
                            
                            var select = ui.Select({
                                items: obj[key],
                                placeholder: null,
                                value: null,
                                onChange: null,
                                disabled: null,
                                style: null
                            });
                            
                            print(select)
                            
                            // ( onOff && print(select) );
                            
                            // callback(key)
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
        
        var params = App.data.uiData.select1;
        
        print(params)
        
        App.ui.widget.select.batchBuilder( params, true )
        
    }
}

// var select = App.ui.select.constructor( App.data.selectButtons.initiative, "placeHolder", "brazil" )
// var select = App.ui.select( returnObj )


App.init();

