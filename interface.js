/**
 * @Author: Wildson Queiroz
 * 
 */

print(Date())

var initiatives = {
  "Brasil": {
      collection: {
          "Collection 6": {
              theme: "classification",
          }
      }
  },
  "Chaco": [-50, -4],
  "Pampa": [-50, -4],
  "Indonésia": [-50, -4],
  "Af-trinacional": [-50, -4],
};

function uiSelect(obj) {
    
    var select = ui.Select({
        items: Object.keys(obj),
        onChange: function(key) {
            
            print(obj[key].collection);
            // print(obj.collection);
            
            var obj2 = obj[key].collection;
            
            return uiSelect(obj2);
            
            
        }
    })
    
    print(obj2)
    
}

// var select = ui.Select({
//   items: Object.keys(initiatives),
//   onChange: function(key) {
    
//     print("olá2");
    
//     Map.setCenter(initiatives[key][0], initiatives[key][1]);
    
//   }
// });

var select = uiSelect(initiatives);


select.setPlaceholder('Choose a initiative...');

print(select);