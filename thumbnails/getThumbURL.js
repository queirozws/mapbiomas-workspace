/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var geometry = 
    /* color: #d63000 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-74.24843542172518, 5.328197583741636],
          [-74.24843542172518, -34.000897024134616],
          [-34.609763546725176, -34.000897024134616],
          [-34.609763546725176, 5.328197583741636]]], null, false);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
/**
*
* @Author: Wildson Queiroz
* 
* @param asset
*/

// Common options

var territoryAsset = "projects/mapbiomas-workspace/AUXILIAR/biomas-2019-raster";
var mosaicAsset = 'projects/nexgenmap/MapBiomas2/LANDSAT/mosaics';

var classificationPalette = require('users/mapbiomas/modules:Palettes.js').get('classification5'); // 46 cores

// var thumbParams = {
//     dimensions: 420,
//     region: geometry,
//     format: 'png'
// }

// Classification visParams + thumbnail params
var visParams1 = {
    min: 0,
    max: 45,
    palette: classificationPalette,
    dimensions: 420,
    region: geometry,
    format: 'png'
}

// Mosaic visParams + thumbnail params
var visParams2 = {
    bands: ['swir1_median', 'nir_median', 'red_median'],
    gain: [0.08, 0.06, 0.2],
    gamma: 0.65,
    dimensions: 420,
    region: geometry,
    format: 'png'
}

// var territoryImage = ee.Image(territoryAsset);
// var mosaicImage = ee.ImageCollection(mosaicAsset).select(['swir1_median', 'nir_median', 'red_median']).mosaic();

// Map.addLayer(territoryImage, {min: 1, max: 6}, 'territoryImage', true, 1);
// Map.addLayer(mosaicImage, {gain: [0.08, 0.06, 0.2], gamma: 0.65}, 'Mosaic image', true, 1);


    
function getImage(assetId) {
    switch ( ee.data.getAsset(assetId).type ) {
        case "Image":
            return ee.Image(assetId)
    
        case "ImageCollection":
            return ee.ImageCollection(assetId).mosaic()

        default:
            print('Não é uma Image nem ImageCollection');

    }
}

function selectTerritory(territoryAsset, territoryId) {
    if (territoryId == 7) {
        return ee.Image(territoryAsset);

    } else {
        return ee.Image(territoryAsset).eq(territoryId);

    }
}

// function getThumbnails() {
    
// }

function callback(el) {

    var id = el.asset[0].id;
    var visParams = el.asset[0].visParams;
    var territoryId = el.asset[0].territoryId;
    // var bands = el.asset[0].visParams[0].bands[0];
    // print(visParams);
    // print(pam);
    
    
    var layerName = id.split('/').slice(-1)[0];
    print(layerName, territoryId);
    
    var territory = selectTerritory(territoryAsset, territoryId);
    
    var image = getImage(id).clip(territory.geometry());
    
    var lastBand = image.bandNames().slice(-1).get(0);
    
    // var params = ee.Dictionary(thumbParams).combine(ee.Dictionary(visParams));
    // print(params);
    
    // var url = image.select(ee.String(lastBand)).getThumbURL(pam);
    
    Map.addLayer(territory, {min: 1, max: 6}, 'territory', false, 1);
    Map.addLayer(image.select(ee.String(lastBand)), visParams, layerName, false, 1);
    
}

// List of assets params
var assets = [
// Colecao 6 - Classification
    {
        asset: [
            {
                id: 'projects/mapbiomas-workspace/COLECAO6/mapbiomas-collection60-integration-v0-12',
                visParams: visParams1,
                year: '2020',
                version: '1',
                territoryId: 7, // BRASIL
                status: 'Ok'
            }
        ]
    },
    {
        asset: [
            {
                id: 'projects/mapbiomas-workspace/COLECAO6/classificacao/AMAZONIA-2020-3', // Colecao 6 - Amazônia
                visParams: visParams1,
                year: '2020',
                version: '1',
                territoryId: 1, // AMAZÔNIA
                status: 'Pending'
            }
        ]
    },
    {
        asset: [
            {
                id: 'projects/earthengine-legacy/assets/projects/mapbiomas-workspace/COLECAO6/classificacao/MATAATLANTICA-2020-5',
                visParams: visParams1,
                year: '2020',
                version: '1',
                territoryId: 2, // MATA ATLÂNTICA
                status: 'Pending'
            }
        ]
    },
    {
        asset: [
            {
                id: 'projects/earthengine-legacy/assets/projects/mapbiomas-workspace/COLECAO6/classificacao/PANTANAL-2020-4',
                visParams: visParams1,
                year: '2020',
                version: '1',
                territoryId: 3, // PANTANAL
                status: 'Pending'
            }
        ]
    },
    {
        asset: [
            {
                id: 'projects/earthengine-legacy/assets/projects/mapbiomas-workspace/COLECAO6/classificacao/CERRADO-2020-3',
                visParams: visParams1,
                year: '2020',
                version: '1',
                territoryId: 4, // CERRADO
                status: 'Pending'
            }
        ]
    },
    {
        asset: [
            {
                id: 'projects/earthengine-legacy/assets/projects/mapbiomas-workspace/COLECAO6/classificacao/CAATINGA-2020-3',
                visParams: visParams1,
                year: '2020',
                version: '1',
                territoryId: 5, // CAATINGA
                status: 'Pending'
            }
        ]
    },
    {
        asset: [
            {
                id: 'projects/earthengine-legacy/assets/projects/mapbiomas-workspace/COLECAO6/classificacao/PAMPA-2020-9', // Colecao 6 - PAMPA
                visParams: visParams1,
                year: '2020',
                version: '1',
                territoryId: 6, // PAMPA
                status: 'Pending'
            }
        ]
    },

// TRANSVERSAIS
    {
        asset: [
            {
                id: 'projects/mapbiomas-workspace/TRANSVERSAIS/AGRICULTURA6-FT',
                visParams: visParams1,
                year: '2020',
                version: '1',
                territoryId: 7
            }
        ]
    },
    {
      asset: [
          {
              id: 'projects/mapbiomas-workspace/TRANSVERSAIS/AGRICULTURA-IRRIGADA6-FT',
              visParams: visParams1,
              year: '2020',
              version: '1',
              territoryId: 7
          }
      ]
    },
    {
      asset: [
          {
              id: 'projects/mapbiomas-workspace/TRANSVERSAIS/AGUA6-FT',
              visParams: visParams1,
              year: '2020',
              version: '1',
              territoryId: 7,
              status: 'Pending'
          }
      ]
    },
    {
      asset: [
          {
              id: 'projects/mapbiomas-workspace/TRANSVERSAIS/FLORESTAPLANTADA6-FT',
              visParams: visParams1,
              year: '2020',
              version: '1',
              territoryId: 7,
              status: 'Ok'
          }
      ]
    },
    {
      asset: [
          {
              id: 'projects/mapbiomas-workspace/TRANSVERSAIS/INFRAURBANA6-FT',
              visParams: visParams1,
              year: '2020',
              version: '1',
              territoryId: 7,
              status: 'Ok'
          }
      ]
    },
    {
      asset: [
          {
              id: 'projects/mapbiomas-workspace/TRANSVERSAIS/MINERACAO6-FT',
              visParams: visParams1,
              year: '2020',
              version: '1',
              territoryId: 7,
              status: 'ok'
          }
      ]
    },
    {
      asset: [
          {
              id: 'projects/mapbiomas-workspace/TRANSVERSAIS/PECUARIA6-FT/2018-1',
              visParams: visParams1,
              year: '2020',
              version: '1',
              territoryId: 7,
              status: 'pending'
          }
      ]
    },
    {
      asset: [
          {
              id: 'projects/mapbiomas-workspace/TRANSVERSAIS/ZONACOSTEIRA6-FT',
              visParams: visParams1,
              year: '2020',
              version: '1',
              territoryId: 7,
              status: 'ok'
          }
      ]
    },

// MOSAICS
    // {
    //   asset: [
    //       {
    //           id: 'projects/nexgenmap/MapBiomas2/LANDSAT/mosaics',
    //           visParams: visParams2,
    //           year: '2020',
    //           version: '1',
    //           territoryId: 1, // AMAZÔNIA
    //           status: 'Ok'
    //       }
    //   ]
    // },
    // {
    //   asset: [
    //       {
    //           id: 'projects/nexgenmap/MapBiomas2/LANDSAT/mosaics',
    //           visParams: visParams2,
    //           year: '2020',
    //           version: '1',
    //           territoryId: 2, // MATA ATLÂNTICA
    //           status: 'Ok'
    //       }
    //   ]
    // },
    // {
    //   asset: [
    //       {
    //           id: 'projects/nexgenmap/MapBiomas2/LANDSAT/mosaics',
    //           visParams: visParams2,
    //           year: '2020',
    //           version: '1',
    //           territoryId: 3, // PANTANAL
    //           status: 'Ok'
    //       }
    //   ]
    // },
    // {
    //   asset: [
    //       {
    //           id: 'projects/nexgenmap/MapBiomas2/LANDSAT/mosaics',
    //           visParams: visParams2,
    //           year: '2020',
    //           version: '1',
    //           territoryId: 4, // CERRADO
    //           status: 'Ok'
    //       }
    //   ]
    // },
    // {
    //   asset: [
    //       {
    //           id: 'projects/nexgenmap/MapBiomas2/LANDSAT/mosaics',
    //           visParams: visParams2
    //           year: '2020',
    //           version: '1',
    //           territoryId: 5, // CAATINGA
    //           status: 'Ok'
    //       }
    //   ]
    // },
    // {
    //   asset: [
    //       {
    //           id: 'projects/nexgenmap/MapBiomas2/LANDSAT/mosaics',
    //           visParams: visParams2,
    //           year: '2020',
    //           version: '1',
    //           territoryId: 6, // PAMPA
    //           status: 'Ok'
    //       }
    //   ]
    // },

];

assets.forEach(callback);