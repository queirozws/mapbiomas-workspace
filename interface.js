/**
 * @Author: Wildson Queiroz
 * 
 */

// print(Date())

var initiatives = {
    
    "Brasil": {
        collections: {
            "Collection 5": {
                themes: "classification",
            },
            "Collection 6": {
                themes: "classification",
            }
        }
    },
    "Chaco": {
        collections: {
            "Collection 2": {
                themes: "transition",
            }
        }
    },
    // "Pampa": [-50, -4],
    // "Indonésia": [-50, -4],
    // "Af-trinacional": [-50, -4],
    
};

// print(initiatives[Object.keys(initiatives)[0]])

function uiSelect(obj) {

    // print(obj)
    
    if (typeof obj === 'object') {
    
        var select = ui.Select({
        // return ui.Select({
            items: Object.keys(obj),
            onChange: function(key) {
                
                var obj2 = obj[Object.keys(obj)[0]];
                
                var keys2 = Object.keys(obj2);
                
    print("Console limpo ______________________")
    
                // print(obj2)
                // print(obj[key])
                
                // var key2 = Object.keys(obj[key]);
                // print(key2)
                
                // var newSelect = uiSelect()
                
                // print(key)
                
                // if (typeof key ==)
                
                uiSelect( obj2[keys2] );
    
                // print(  newSelect);
    
                
            },
            placeholder: "Choose a option"
        })
        
        print(select)
        
        // return select
    
    } else {
        return "Fim"
    }
    
    // print(obj2);
    
}

// var select = ui.Select({
//   items: Object.keys(initiatives),
//   onChange: function(key) {
    
//     print("olá2");
    
//     // Map.setCenter(initiatives[key][0], initiatives[key][1]);
    
//   }
// });

// print(select);

uiSelect(initiatives);


// var panel = ui.Panel().add(select)

// print(panel)






