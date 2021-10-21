
var obj0 = {
    a: 1,
    b: {}
}

var b = {
    m: 'm value',
    n: 'n value'
}

obj0 = ee.Dictionary(obj0);

b = ee.Dictionary(b);

print('print m', b.get('m'))


print(obj0.combine(b))

print(obj0.get('b'))


// var products = [
//     {
//       a: 1,
//       b: {
//         m: {
//             x: 10,
//             y: 10,
//         }
//       }
//     },
//     {
//       a: 2,
//       b: {
//         m: {
//             x: 20,
//             y: 200
//         }
//       }
//     },
//     {
//       a: 3,
//       b: {
//         m: {
//             x: 30,
//             y: 300
//         }
//       }
//     },
// ]

// var output = ee.Dictionary(products[0]);

// var result = output.get('b')// = ee.Dictionary({zz: 'aguia'})

// print( result )

// output.get('b')

// print(output);
// print(output.get('b').get('m'));


// function objToDictionary(obj) {
    
//     obj = ee.Dictionary(obj);
    
//     var keys = obj.keys();
    
//     keys.forEach()
    
//     objToDictionary(obj)
    
//     return null    
// }

// var eeDict = products.map(
//     function(obj0) {
        
//         obj0 = ee.Dictionary(obj0);
        
//         var keys = obj0.keys();
        
//         // print(obj0);
//         // print(keys);
        
//         keys.map(
//             function(key) {
              
//                 var obj1 = obj0.get(key) // obj0.get('a');  obj0.get('b')
                
                
                
//                 return ee.Dictionary(obj1)
              
//             })
            

//         return obj0
//     })
    
// print(eeDict[2].get('b'))
// print(eeDict[2].get('b').get('m'))

// var arr = ['a', 'b', 'c', 'd'];

// var reducer = function (previousValue, currentValue) { return previousValue + currentValue }

// console.log(arr.reduce(reducer));



// var level0 = obj;
// print('level0', level0);

// var level1 = obj.get('endereco');
// print('level1', level1);

// var level2 = ee.Dictionary(obj.get('endereco1')).get('ap')
// print('level2', level2);

// print(obj.get('endereco1'))

// print(obj.get('endereco2'))

// print(obj.get('fullName').get('lastName'))





// obj = ee.Dictionary(obj);

// print(obj.get('endereco').get('rua'));


// function dict(obj, keys) {
  
//     keys.forEach(
//         function (key) {
          
//             obj.loop = key + '_';
        
//             obj = ee.Dictionary(obj).get(key).getInfo();
            
//         });
        
//     // print(obj)

// }

// var keys = ['endereco', 'rua'];

// var output = keys.reduce(
//         function (key, nextKey) {
          
//             print(obj);
          
//             obj = ee.Dictionary(obj).get(key).getInfo();
            
//             obj = ee.Dictionary(obj).get(nextKey).getInfo();
            
//             print(obj)
            
//             return ee.Dictionary(obj)
            
//         });


// // dict(obj, keys);

// print(output/*.get('nome')*/)



// var obj = {
//     fullName: {
//         firstName: 'Wildson',
//         lastName: 'da Silva Queiroz'
//     },
//     idade: 32,
//     endereco1: {
//         rua: 'Mauriti',
//         num: 3275,
//         ap: {
//             bloco: 1,
//             ap: 1602
//         }
//     },
//     endereco2: {
//         rua: 'Barão',
//         num: 3450,
//         ap: {
//             bloco: 1,
//             ap: 303
//         }
//     },
// }

// obj = ee.Dictionary(obj);

