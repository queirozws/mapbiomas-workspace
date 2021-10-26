function getValues(obj) {
    
    var asset_id = obj.asset_id; // >> Object >> Dictionary >> String
    
    var bandNames = ee.Image(asset_id).bandNames().getInfo(); // >> String >> Image >> List
    
    bandNames = bandNames.map(
        function(bandName) {

            return ee.String(bandName).replace("([a-z]*)_", "").split("_");

        })
    
    // var years = ee.Dictionary(metadata).get("years")
    
    obj.metadata.years = bandNames;
    
    
    return ee.Dictionary(obj)
}

var result = products.map(getValues);

result.forEach(
    function(obj) {
      
        var asset_id = ee.Dictionary(obj).get("asset_id");
        
        var initiative = ee.Dictionary(obj).get("initiative");
        
        var theme = ee.Dictionary(obj).get("theme");
        
        var metadata = ee.Dictionary(obj).get("metadata");
        
        var years = ee.Dictionary(metadata).get("years");
        
        var version = ee.Dictionary(obj).get("version");
        
        var key = ee.Dictionary(obj).get("description");
        
        var autoDescription = ee.String(theme).cat(" data from collection ").cat(ee.Dictionary(obj).get("collection")).cat(" (").cat(initiative).cat(")");
        
        // function getDict(obj, key) {return ee.Dictionary(obj).get(key);
        
        // print(initiative, asset_id, years);
        print(key);
        
    })
    
// print(ee.List(result).getInfo());

