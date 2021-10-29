/**
 * @Author: Wildson Queiroz
 * 
 */

// print(Date())

// obj["Brasil"]["collections"]["Collection 5"]["themes"] = collections: {}

var obj = {
    
    "Brasil": {
        "collections": {
            "Collection 5": {
                "themes": [
                    "classification",
                    "transition",
                    "integration"
                ],
            },
            "Collection 6": {
                "themes": ["classification"],
            }
        }
    },
    "Chaco": {
        "collections": {
            "Collection 2": {
                "themes": "transition",
            }
        }
    },
    // "Pampa": [-50, -4],
    // "Indonésia": [-50, -4],
    // "Af-trinacional": [-50, -4],
    
};

// print(initiatives[Object.keys(initiatives)[0]])

function uiSelect(obj) {

    var select = ui.Select({
        items: Object.keys(obj),
        onChange: function(key) {
            
            // print("obj: ", obj, key);
            
            var obj2 = obj[key];
            var keyList = Object.keys(obj2);
            
            // print("obj2: ", obj2, keyList);
            
            // print( (typeof obj2[keyList[0]] === "object") && key + " contém um objeto" )
            // print( (typeof obj2[keyList[0]] === "object") && uiSelect(obj2) )
            
            // print(typeof obj2)
            
            var obj3 = obj2[keyList[0]]
            
            // print("Console limpo ______________________")

            
            // var key2 = Object.keys(obj[key]);
            
            // print(obj2)
            // print(obj2[keys2])
            
            if ((typeof obj2[keyList[0]] === "object")) {
                        
                print(uiSelect( obj2 ));
                    
            } else {
              
                print(obj3)
              
                // print(key + " não contém um objeto")
                
            }

            
        },
        placeholder: "Choose a option"
    })
    
    // print(select)
    
    return select
    
    
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

print(uiSelect(obj));


// var panel = ui.Panel().add(select)

// print(panel)






