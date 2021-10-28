var products = [
    {
        initiative: 'brazil',
        collection: 6,
        theme: 'classification',
        asset_id: "projects/mapbiomas-workspace/COLECAO6/mapbiomas-collection60-integration-v0-12",
        description: 'Dados de classificação da coleção 6 do Brasil',
        type: 'collection-classification-multiband', // | "classification-singleband" | "mosaic-multiband",
        countries: ['brazil'],
        source: ["imazon", "..."],
        metadata: {
            bands: {
                prefix: 'classification_',
            },
            years: [
                [ "1985" ], [ "1986" ], [ "1987" ],
                [ "1988" ], [ "1989" ], [ "1990" ],
                [ "1991" ], [ "1992" ], [ "1993" ],
                [ "1994" ], [ "1995" ], [ "1996" ],
                [ "1997" ], [ "1998" ], [ "1999" ],
                [ "2000" ], [ "2001" ], [ "2002" ],
                [ "2003" ], [ "2004" ], [ "2005" ],
                [ "2006" ], [ "2007" ], [ "2008" ],
                [ "2009" ], [ "2010" ], [ "2011" ],
                [ "2012" ], [ "2013" ], [ "2014" ],
                [ "2015" ], [ "2016" ], [ "2017" ],
                [ "2018" ], [ "2019" ], [ "2020" ]
              ],
            biome: ["biome"],
            version: '1',
        }
    }
];

products.forEach(
    function (obj) {
        print(obj)
    })
    

print( Object.keys(products[0]["metadata"]["version"]) )