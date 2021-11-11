var app = {
    ui: {
        panel: [
            {
                type: "panel",
                id: "main",
                parentId: "root",
                params: {
                    widgets: null,
                    layout: null,
                    style: {
                        width: "500px",
                        backgroundColor: "#222e3c",
                        // stretch: "horizontal"
                    }
                },
            },
            {
                type: "panel",
                id: "header",
                parentId: "main",
                params: {
                    widgets: null,
                    layout: ui.Panel.Layout.flow("vertical", false),
                    style: {
                        border: "1px solid black",
                        backgroundColor: "222e3c",
                        margin: "10px 10px 5px 10px",
                        // textAlign: "center",
                        position: "bottom-right",
                        // stretch: "horizontal"
                    }
                },
            },
            {
                type: "panel",
                id: "description",
                parentId: "main",
                params: {
                    widgets: null,
                    layout: null,
                    style: {
                        border: "1px solid black",
                        backgroundColor: "#222e3c",
                        margin: "5px 10px 5px 10px"
                    }
                },
            },
            {
                type: "panel",
                id: "auxiliar",
                parentId: "main",
                params: {
                    widgets: null,
                    layout: null,
                    style: {
                        border: "1px solid black",
                        backgroundColor: "#222e3c",
                        margin: "5px 30px 5px 30px"
                    }
                },
            },
            {
                type: "panel",
                id: "map",
                parentId: "main",
                params: {
                    widgets: null,
                    layout: null,
                    style: {
                        border: "1px solid black",
                        backgroundColor: "#222e3c",
                        margin: "5px 30px 5px 30px"
                    }
                },
            },
        ],
        label: [
            {
                type: "label",
                id: "label1",
                parentId: "description",
                params: {
                    label: "Selecione uma das opções abaixo",
                    targetUrl: "",
                    style: {
                        backgroundColor: "#222e3c",
                        color: "white",
                        fontSize: "14px",
                        // position: "bottom-center"
                    }
                },
            },
            {
                type: "label",
                id: "label2",
                parentId: "header",
                params: {
                    label: "Painel de controle",
                    targetUrl: "",
                    style: {
                        backgroundColor: "#222e3c",
                        color: "white",
                        fontSize: "20px",
                        position: "top-center"
                    }
                },
            },
            {
                type: "label",
                id: "label1",
                parentId: "map",
                params: {
                    label: "Preview:",
                    targetUrl: "",
                    style: {
                        backgroundColor: "#222e3c",
                        color: "white",
                        fontSize: "14px",
                        margin: "10px 0px 0px 15px"
                        // position: "bottom-center"
                    }
                },
            },
        ],
        select: [
            {
                type: "select",
                id: "select",
                parentId: "auxiliar",
                params: {
                    placeholder: "FILTER BY INITIATIVE",
                    // onChange: function() {print("olá")},
                    style: {
                        stretch: "horizontal",
                        margin: "10px 10px 5px 10px"
                    },
                },
            },
            {
                type: "select",
                id: "select",
                parentId: "auxiliar",
                params: {
                    placeholder: "FILTER BY COLLECTION",
                    // onChange: function() {print("olá")},
                    style: {
                        stretch: "horizontal",
                        margin: "10px 10px 5px 10px"
                    },
                },
            },
            {
                type: "select",
                id: "select",
                parentId: "auxiliar",
                params: {
                    placeholder: "FILTER BY THEME",
                    // onChange: function() {print("olá")},
                    style: {
                        stretch: "horizontal",
                        margin: "10px 10px 5px 10px"
                    },
                },
            },
            {
                type: "select",
                id: "select",
                parentId: "auxiliar",
                params: {
                    placeholder: "FILTER BY TYPE",
                    // onChange: function() {print("olá")},
                    style: {
                        stretch: "horizontal",
                        margin: "10px 10px 5px 10px"
                    },
                },
            },
            {
                type: "select",
                id: "select",
                parentId: "auxiliar",
                params: {
                    placeholder: "FILTER BY COUNTRIES",
                    // onChange: function() {print("olá")},
                    style: {
                        stretch: "horizontal",
                        margin: "10px 10px 5px 10px"
                    },
                },
            },
            {
                type: "select",
                id: "select",
                parentId: "auxiliar",
                params: {
                    placeholder: "FILTER BY SOURCE",
                    // onChange: function() {print("olá")},
                    style: {
                        stretch: "horizontal",
                        margin: "10px 10px 5px 10px"
                    },
                },
            },
        ],
        button: [
            {
                type: "button",
                id: "button 1",
                parentId: "map",
                params: {
                    label: "Clear the map",
                    onClick: function() {print("Clear the map")},
                    style: {
                        backgroundColor: "red",
                        color: "blue",
                        position: "bottom-right", // ?
                        margin: "10px 15px 10px 15px"
                    }
                },
            },
            {
                type: "button",
                id: "button 1",
                parentId: "main",
                params: {
                    label: "Visualize assets",
                    onClick: function() {print("Clear the map")},
                    style: {
                        backgroundColor: "red",
                        color: "blue",
                        position: "bottom-right", // ?
                        margin: "5px 0px 10px 30px" // TOP | RIGHT | BOTTOM | LEFT
                    }
                },
            },
        ],
        map: [
            {
                type: "map",
                id: "Map 1",
                parentId: "map",
                params: {
                    center: {lat: -6, lon: -54, zoom: 3},
                    onClick: null,
                    style: {
                        margin: "10px 15px 0px 15px"
                    }
                },
            },
        ],
        chart: [],
        checkBox: [],
        dataSlider: [],
    }
}

var widgets = app.ui;

Object.keys(widgets).forEach(
    function (key) {
        
        var widgetType = key;
        
        var widgetList = widgets[key];
        
        widgetList.forEach(
            function(obj) {
                
                // print(obj.type === widgetType)
                print(obj.type+" - "+ obj.id)
                
            }
        );
        
        
    }
);







