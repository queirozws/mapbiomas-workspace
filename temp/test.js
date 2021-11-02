var products = [
    {
        initiative: "brazil",
        theme: "classification",
        type: "type 2"
    },
    {
        initiative: "pampa",
        theme: "integration",
        type: "type 2"
    }
];

var selected = {
    initiative: "pampa",
    theme: "integration",
    type: "type 1"
}

// var obj = products[1];

var filtered = products.filter(
    
    function(obj, index) {
      
        var keysList = Object.keys(obj);
        
        var filtered = keysList.filter(
            
            function(key) {
              
                // print(obj[key] === this[key])
                
                return (obj[key] === this[key])
                
            }, selected)
        
        // print("elemento: " + index, filtered)
        
        return filtered.length > 0
    
    })

print(filtered)


var a = [1,2,3,4,5];

var some = a.some(function(el) {return el === 10})

print(some)

print("array: ",(a.length === 0) )

var b = {a: 1,b: 2,c: 3};

// print(Array.isArray(a), Object.is(b))





// 18:22