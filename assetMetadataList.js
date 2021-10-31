/**
 * @module
 */

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
    },
    {
        initiative: 'brazil',
        collection: 6,
        theme: 'integration',
        asset_id: "projects/mapbiomas-workspace/public/collection6/mapbiomas_collection60_integration_v1",
        description: 'integration data from collection 6 (brazil)',
        type: 'classification-multiband',
        countries: ['brazil'],
        source: ["source"],
        metadata: {
            bands: {
                prefix: 'classification_',
            },
            years: [
                [ '1985' ], [ '1986' ], [ '1987' ],
                [ '1988' ], [ '1989' ], [ '1990' ],
                [ '1991' ], [ '1992' ], [ '1993' ],
                [ '1994' ], [ '1995' ], [ '1996' ],
                [ '1997' ], [ '1998' ], [ '1999' ],
                [ '2000' ], [ '2001' ], [ '2002' ],
                [ '2003' ], [ '2004' ], [ '2005' ],
                [ '2006' ], [ '2007' ], [ '2008' ],
                [ '2009' ], [ '2010' ], [ '2011' ],
                [ '2012' ], [ '2013' ], [ '2014' ],
                [ '2015' ], [ '2016' ], [ '2017' ],
                [ '2018' ], [ '2019' ], [ '2020' ]
            ],
            biome: ["biome"],
            version: '1',
        }
    },
    {
        initiative: 'brazil',
        collection: 6,
        theme: 'transition',
        asset_id: "projects/mapbiomas-workspace/public/collection6/mapbiomas_collection60_transitions_v1",
        description: 'transitions data from collection 6 (brazil)',
        type: 'transition-multiband',
        countries: ['brazil'],
        source: ["source"],
        metadata: {
            bands: {
                prefix: 'transition_',
            },
            years: [
                [ '1985', '1986' ], [ '1986', '1987' ], [ '1987', '1988' ],
                [ '1988', '1989' ], [ '1989', '1990' ], [ '1990', '1991' ],
                [ '1991', '1992' ], [ '1992', '1993' ], [ '1993', '1994' ],
                [ '1994', '1995' ], [ '1995', '1996' ], [ '1996', '1997' ],
                [ '1997', '1998' ], [ '1998', '1999' ], [ '1999', '2000' ],
                [ '2000', '2001' ], [ '2001', '2002' ], [ '2002', '2003' ],
                [ '2003', '2004' ], [ '2004', '2005' ], [ '2005', '2006' ],
                [ '2006', '2007' ], [ '2007', '2008' ], [ '2008', '2009' ],
                [ '2009', '2010' ], [ '2010', '2011' ], [ '2011', '2012' ],
                [ '2012', '2013' ], [ '2013', '2014' ], [ '2014', '2015' ],
                [ '2015', '2016' ], [ '2016', '2017' ], [ '2017', '2018' ],
                [ '2018', '2019' ], [ '2019', '2020' ], [ '1985', '1990' ],
                [ '1990', '1995' ], [ '1995', '2000' ], [ '2000', '2005' ],
                [ '2005', '2010' ], [ '2010', '2015' ], [ '2015', '2020' ],
                [ '1990', '2000' ], [ '2000', '2010' ], [ '2010', '2020' ],
                [ '1985', '2020' ], [ '2008', '2020' ], [ '2012', '2020' ],
                [ '1994', '2002' ], [ '2002', '2010' ], [ '2010', '2016' ],
                [ '1990', '2008' ], [ '1990', '2020' ], [ '2000', '2020' ],
                [ '2008', '2018' ], [ '1986', '2015' ], [ '2001', '2016' ],
                [ '1996', '2015' ]
            ],
            biome: ["biome"],
            version: '1',
        }
    },
    {
        initiative: 'pampa',
        collection: 1,
        theme: 'transition',
        asset_id: "projects/MapBiomas_Pampa/public/collection1/mapbiomas_pampa_collection1_transitions_v1",
        description: 'transitions data from collection 1 (pampa)',
        type: 'transition-multiband',
        countries: ['brazil', 'argentina', 'uruguay'],
        source: ["source"],
        metadata: {
            bands: {
                prefix: 'transition_',
            },
            years: [
                [ '2000', '2001' ], [ '2001', '2002' ],
                [ '2002', '2003' ], [ '2003', '2004' ],
                [ '2004', '2005' ], [ '2005', '2006' ],
                [ '2006', '2007' ], [ '2007', '2008' ],
                [ '2008', '2009' ], [ '2009', '2010' ],
                [ '2010', '2011' ], [ '2011', '2012' ],
                [ '2012', '2013' ], [ '2013', '2014' ],
                [ '2014', '2015' ], [ '2015', '2016' ],
                [ '2016', '2017' ], [ '2017', '2018' ],
                [ '2018', '2019' ], [ '2000', '2005' ],
                [ '2005', '2010' ], [ '2010', '2015' ],
                [ '2015', '2019' ], [ '2000', '2010' ],
                [ '2010', '2019' ], [ '2008', '2019' ],
                [ '2012', '2019' ], [ '2002', '2010' ],
                [ '2000', '2019' ]
            ],
            biome: ["biome"],
            version: '1',
        }
    },
    {
        initiative: 'pampa',
        collection: 1,
        theme: 'integration',
        asset_id: "projects/MapBiomas_Pampa/public/collection1/mapbiomas_pampa_collection1_integration_v1",
        description: "integration data from collection 1 (pampa)",
        type: 'classification-multiband',
        countries: ['brazil', 'argentina', 'uruguay'],
        source: ["source"],
        metadata: {
            bands: {
                prefix: 'classification_',
            },
            years: [
                [ '2000' ], [ '2001' ],
                [ '2002' ], [ '2003' ],
                [ '2004' ], [ '2005' ],
                [ '2006' ], [ '2007' ],
                [ '2008' ], [ '2009' ],
                [ '2010' ], [ '2011' ],
                [ '2012' ], [ '2013' ],
                [ '2014' ], [ '2015' ],
                [ '2016' ], [ '2017' ],
                [ '2018' ], [ '2019' ]
            ],
            biome: ["biome"],
            version: '1',
        }
    },
    {
        initiative: 'pampa',
        collection: 1,
        theme: 'quality',
        asset_id: "projects/MapBiomas_Pampa/public/collection1/mapbiomas_pampa_collection1_quality_v1",
        description: 'quality data from collection 1 (pampa)',
        type: 'quality-multiband', // Is the quality asset type classification or transition?
        countries: ['brazil', 'argentina', 'uruguay'],
        source: ["source"],
        metadata: {
            bands: {
                prefix: 'quality_',
            },
            years: [
                [ '2000' ], [ '2001' ],
                [ '2002' ], [ '2003' ],
                [ '2004' ], [ '2005' ],
                [ '2006' ], [ '2007' ],
                [ '2008' ], [ '2009' ],
                [ '2010' ], [ '2011' ],
                [ '2012' ], [ '2013' ],
                [ '2014' ], [ '2015' ],
                [ '2016' ], [ '2017' ],
                [ '2018' ], [ '2019' ]
            ],
            biome: ["biome"],
            version: '1',
        }
    },
    {
        initiative: 'chaco',
        collection: 2,
        theme: 'transition',
        asset_id: "projects/mapbiomas-chaco/public/collection2/mapbiomas_chaco_collection2_transitions_v1",
        description: 'transitions data from collection 2 (chaco)',
        type: 'transition-multiband',
        countries: ["argentina", "bolivia", "paraguay"],
        source: ["source"],
        metadata: {
            bands: {
                prefix: 'transition_',
            },
            years: [
                [ '2000', '2001' ], [ '2001', '2002' ],
                [ '2002', '2003' ], [ '2003', '2004' ],
                [ '2004', '2005' ], [ '2005', '2006' ],
                [ '2006', '2007' ], [ '2007', '2008' ],
                [ '2008', '2009' ], [ '2009', '2010' ],
                [ '2010', '2011' ], [ '2011', '2012' ],
                [ '2012', '2013' ], [ '2013', '2014' ],
                [ '2014', '2015' ], [ '2015', '2016' ],
                [ '2016', '2017' ], [ '2017', '2018' ],
                [ '2018', '2019' ], [ '2000', '2005' ],
                [ '2005', '2010' ], [ '2010', '2015' ],
                [ '2015', '2019' ], [ '2000', '2010' ],
                [ '2010', '2019' ], [ '2000', '2019' ]
            ],
            biome: ["biome"],
            version: '1',
        }
    },
    {
        initiative: 'chaco',
        collection: 2,
        theme: 'integration',
        asset_id: "projects/mapbiomas-chaco/public/collection2/mapbiomas_chaco_collection2_integration_v1",
        description: 'integration data from collection 2 (chaco)',
        type: 'classification-multiband',
        countries: ["argentina", "bolivia", "paraguay"],
        source: ["source"],
        metadata: {
            bands: {
                prefix: 'classification_',
            },
            years: [
                [ '2000' ], [ '2001' ],
                [ '2002' ], [ '2003' ],
                [ '2004' ], [ '2005' ],
                [ '2006' ], [ '2007' ],
                [ '2008' ], [ '2009' ],
                [ '2010' ], [ '2011' ],
                [ '2012' ], [ '2013' ],
                [ '2014' ], [ '2015' ],
                [ '2016' ], [ '2017' ],
                [ '2018' ], [ '2019' ]
            ],
            biome: ["biome"],
            version: '1',
        }
    },
    {
        initiative: 'indonésia',
        collection: 1,
        theme: 'transition',
        asset_id: "projects/mapbiomas-indonesia/public/collection1/mapbiomas_indonesia_collection1_transitions_v1",
        description: 'transitions data from collection 1 (indonésia)',
        type: 'transition-multiband',
        countries: ['indonésia'],
        source: ["source"],
        metadata: {
            bands: {
                prefix: 'transition_',
            },
            years:  [
                [ '2000', '2001' ], [ '2001', '2002' ],
                [ '2002', '2003' ], [ '2003', '2004' ],
                [ '2004', '2005' ], [ '2005', '2006' ],
                [ '2006', '2007' ], [ '2007', '2008' ],
                [ '2008', '2009' ], [ '2009', '2010' ],
                [ '2010', '2011' ], [ '2011', '2012' ],
                [ '2012', '2013' ], [ '2013', '2014' ],
                [ '2014', '2015' ], [ '2015', '2016' ],
                [ '2016', '2017' ], [ '2017', '2018' ],
                [ '2018', '2019' ], [ '2000', '2005' ],
                [ '2005', '2010' ], [ '2010', '2015' ],
                [ '2015', '2019' ], [ '2000', '2010' ],
                [ '2010', '2019' ], [ '2000', '2019' ],
                [ '2011', '2019' ], [ '2013', '2019' ],
                [ '2014', '2019' ], [ '2015', '2019' ], // banda classification_2015_2019_1 não incluída
                [ '2004', '2019' ]
            ],
            biome: ["biome"],
            version: '1',
        }
    },
    {
        initiative: 'indonésia',
        collection: 1,
        theme: 'integration',
        asset_id: "projects/mapbiomas-indonesia/public/collection1/mapbiomas_indonesia_collection1_integration_v1",
        description: 'integration data from collection 1 (indonésia)',
        type: 'classification-multiband',
        countries: ['indonésia'],
        source: ["source"],
        metadata: {
            bands: {
                prefix: 'classification_',
            },
            years:  [
                [ '2000' ], [ '2001' ],
                [ '2002' ], [ '2003' ],
                [ '2004' ], [ '2005' ],
                [ '2006' ], [ '2007' ],
                [ '2008' ], [ '2009' ],
                [ '2010' ], [ '2011' ],
                [ '2012' ], [ '2013' ],
                [ '2014' ], [ '2015' ],
                [ '2016' ], [ '2017' ],
                [ '2018' ], [ '2019' ]
            ],
            biome: ["biome"],
            version: '1',
        }
    },
    {
        initiative: 'indonésia',
        collection: 1,
        theme: 'quality',
        asset_id: "projects/mapbiomas-indonesia/public/collection1/mapbiomas_indonesia_collection1_quality_v1",
        description: 'quality data from collection 1 (indonésia)',
        type: 'quality-multiband', // Is the quality asset type classification or transition?
        countries: ['indonésia'],
        source: ["source"],
        metadata: {
            bands: {
                prefix: 'quality_',
            },
            years:  [
                [ '2000' ], [ '2001' ],
                [ '2002' ], [ '2003' ],
                [ '2004' ], [ '2005' ],
                [ '2006' ], [ '2007' ],
                [ '2008' ], [ '2009' ],
                [ '2010' ], [ '2011' ],
                [ '2012' ], [ '2013' ],
                [ '2014' ], [ '2015' ],
                [ '2016' ], [ '2017' ],
                [ '2018' ], [ '2019' ] // banda quality_2019_1 não incluída
            ],
            biome: ["biome"],
            version: '1',
        }
    },
    {
        initiative: 'indonésia',
        collection: 1,
        theme: 'transition',
        asset_id: "projects/mapbiomas-indonesia/public/collection1/mapbiomas_indonesia_collection1_transitions_v2",
        description: 'transitions data from collection 1 (indonésia)',
        type: 'transition-multiband',
        countries: ['indonésia'],
        source: ["source"],
        metadata: {
            bands: {
                prefix: 'transition_',
            },
            years:  [
                [ '2000', '2001' ], [ '2001', '2002' ],
                [ '2002', '2003' ], [ '2003', '2004' ],
                [ '2004', '2005' ], [ '2005', '2006' ],
                [ '2006', '2007' ], [ '2007', '2008' ],
                [ '2008', '2009' ], [ '2009', '2010' ],
                [ '2010', '2011' ], [ '2011', '2012' ],
                [ '2012', '2013' ], [ '2013', '2014' ],
                [ '2014', '2015' ], [ '2015', '2016' ],
                [ '2016', '2017' ], [ '2017', '2018' ],
                [ '2018', '2019' ], [ '2000', '2005' ],
                [ '2005', '2010' ], [ '2010', '2015' ],
                [ '2015', '2019' ], [ '2000', '2010' ],
                [ '2010', '2019' ], [ '2000', '2019' ],
                [ '2011', '2019' ], [ '2013', '2019' ],
                [ '2014', '2019' ], [ '2015', '2019' ],
                [ '2004', '2019' ]
            ],
            biome: ["biome"],
            version: '1',
        }
    },
    {
        initiative: 'raisg',
        collection: 3,
        theme: 'quality',
        asset_id: "projects/mapbiomas-raisg/public/collection3/mapbiomas_raisg_panamazonia_quality_v1",
        description: 'quality data from collection 3 (raisg)',
        type: 'quality-multiband', // Is the quality asset type classification or transition?
        countries: ["bolivia", "brazil", "colombia", "ecuador", "french guiana", "guyana", "peru", "suriname", "venezuela"],
        source: ["source"],
        metadata: {
            bands: {
                prefix: 'quality_',
            },
            years:  [
                [ '1985' ], [ '1986' ], [ '1987' ],
                [ '1988' ], [ '1989' ], [ '1990' ],
                [ '1991' ], [ '1992' ], [ '1993' ],
                [ '1994' ], [ '1995' ], [ '1996' ],
                [ '1997' ], [ '1998' ], [ '1999' ],
                [ '2000' ], [ '2001' ], [ '2002' ],
                [ '2003' ], [ '2004' ], [ '2005' ],
                [ '2006' ], [ '2007' ], [ '2008' ],
                [ '2009' ], [ '2010' ], [ '2011' ],
                [ '2012' ], [ '2013' ], [ '2014' ],
                [ '2015' ], [ '2016' ], [ '2017' ],
                [ '2018' ], [ '2019' ], [ '2020' ]
            ],
            biome: ["biome"],
            version: '1',
        }
    },
    {
        initiative: 'raisg',
        collection: 3,
        theme: 'integration',
        asset_id: "projects/mapbiomas-raisg/public/collection3/mapbiomas_raisg_panamazonia_collection3_integration_v1",
        description: 'integration data from collection 3 (raisg)',
        type: 'classification-multiband',
        countries: ["bolivia", "brazil", "colombia", "ecuador", "french guiana", "guyana", "peru", "suriname", "venezuela"],
        source: ["source"],
        metadata: {
            bands: {
                prefix: 'classification_',
            },
            years:  [
                [ '1985' ], [ '1986' ], [ '1987' ],
                [ '1988' ], [ '1989' ], [ '1990' ],
                [ '1991' ], [ '1992' ], [ '1993' ],
                [ '1994' ], [ '1995' ], [ '1996' ],
                [ '1997' ], [ '1998' ], [ '1999' ],
                [ '2000' ], [ '2001' ], [ '2002' ],
                [ '2003' ], [ '2004' ], [ '2005' ],
                [ '2006' ], [ '2007' ], [ '2008' ],
                [ '2009' ], [ '2010' ], [ '2011' ],
                [ '2012' ], [ '2013' ], [ '2014' ],
                [ '2015' ], [ '2016' ], [ '2017' ],
                [ '2018' ], [ '2019' ], [ '2020' ]
            ],
            biome: ["biome"],
            version: '1',
        }
    },
    {
        initiative: 'raisg',
        collection: 3,
        theme: 'integration',
        asset_id: "projects/mapbiomas-raisg/public/collection3/mapbiomas_raisg_panamazonia_collection3_integration_v2",
        description: 'integration data from collection 3 (raisg)',
        type: 'classification-multiband',
        countries: ["bolivia", "brazil", "colombia", "ecuador", "french guiana", "guyana", "peru", "suriname", "venezuela"],
        source: ["source"],
        metadata: {
            bands: {
                prefix: 'classification_',
            },
            years:  [
                [ '1985' ], [ '1986' ], [ '1987' ],
                [ '1988' ], [ '1989' ], [ '1990' ],
                [ '1991' ], [ '1992' ], [ '1993' ],
                [ '1994' ], [ '1995' ], [ '1996' ],
                [ '1997' ], [ '1998' ], [ '1999' ],
                [ '2000' ], [ '2001' ], [ '2002' ],
                [ '2003' ], [ '2004' ], [ '2005' ],
                [ '2006' ], [ '2007' ], [ '2008' ],
                [ '2009' ], [ '2010' ], [ '2011' ],
                [ '2012' ], [ '2013' ], [ '2014' ],
                [ '2015' ], [ '2016' ], [ '2017' ],
                [ '2018' ], [ '2019' ], [ '2020' ]
            ],
            biome: ["biome"],
            version: '1',
        }
    },
    {
        initiative: 'raisg',
        collection: 3,
        theme: 'transition',
        asset_id: "projects/mapbiomas-raisg/public/collection3/mapbiomas_raisg_panamazonia_collection3_transitions_v1",
        description: 'transitions data from collection 3 (raisg)',
        type: 'transition-multiband',
        countries: ["bolivia", "brazil", "colombia", "ecuador", "french guiana", "guyana", "peru", "suriname", "venezuela"],
        source: ["source"],
        metadata: {
            bands: {
                prefix: 'transition_',
            },
            years:  [
                [ '1985', '1986' ], [ '1986', '1987' ], [ '1987', '1988' ],
                [ '1988', '1989' ], [ '1989', '1990' ], [ '1990', '1991' ],
                [ '1991', '1992' ], [ '1992', '1993' ], [ '1993', '1994' ],
                [ '1994', '1995' ], [ '1995', '1996' ], [ '1996', '1997' ],
                [ '1997', '1998' ], [ '1998', '1999' ], [ '1999', '2000' ],
                [ '2000', '2001' ], [ '2001', '2002' ], [ '2002', '2003' ],
                [ '2003', '2004' ], [ '2004', '2005' ], [ '2005', '2006' ],
                [ '2006', '2007' ], [ '2007', '2008' ], [ '2008', '2009' ],
                [ '2009', '2010' ], [ '2010', '2011' ], [ '2011', '2012' ],
                [ '2012', '2013' ], [ '2013', '2014' ], [ '2014', '2015' ],
                [ '2015', '2016' ], [ '2016', '2017' ], [ '2017', '2018' ],
                [ '2018', '2019' ], [ '2019', '2020' ], [ '1985', '1990' ],
                [ '1990', '1995' ], [ '1995', '2000' ], [ '2000', '2005' ],
                [ '2005', '2010' ], [ '2010', '2015' ], [ '2015', '2020' ],
                [ '1990', '2000' ], [ '2000', '2010' ], [ '2010', '2020' ],
                [ '1985', '2020' ], [ '2008', '2017' ], [ '1994', '2002' ],
                [ '2002', '2010' ], [ '2010', '2016' ], [ '1986', '2015' ],
                [ '1990', '2020' ], [ '2000', '2020' ], [ '2008', '2020' ],
                [ '2012', '2020' ]
            ],
            biome: ["biome"],
            version: '1',
        }
    },
    {
        initiative: 'raisg',
        collection: 3,
        theme: 'transition',
        asset_id: "projects/mapbiomas-raisg/public/collection3/mapbiomas_raisg_panamazonia_collection3_transitions_v2",
        description: 'transitions data from collection 3 (raisg)',
        type: 'transition-multiband',
        countries: ["bolivia", "brazil", "colombia", "ecuador", "french guiana", "guyana", "peru", "suriname", "venezuela"],
        source: ["source"],
        metadata: {
            bands: {
                prefix: 'transition_',
            },
            years:  [
                [ '1985', '1986' ], [ '1986', '1987' ], [ '1987', '1988' ],
                [ '1988', '1989' ], [ '1989', '1990' ], [ '1990', '1991' ],
                [ '1991', '1992' ], [ '1992', '1993' ], [ '1993', '1994' ],
                [ '1994', '1995' ], [ '1995', '1996' ], [ '1996', '1997' ],
                [ '1997', '1998' ], [ '1998', '1999' ], [ '1999', '2000' ],
                [ '2000', '2001' ], [ '2001', '2002' ], [ '2002', '2003' ],
                [ '2003', '2004' ], [ '2004', '2005' ], [ '2005', '2006' ],
                [ '2006', '2007' ], [ '2007', '2008' ], [ '2008', '2009' ],
                [ '2009', '2010' ], [ '2010', '2011' ], [ '2011', '2012' ],
                [ '2012', '2013' ], [ '2013', '2014' ], [ '2014', '2015' ],
                [ '2015', '2016' ], [ '2016', '2017' ], [ '2017', '2018' ],
                [ '2018', '2019' ], [ '2019', '2020' ], [ '1985', '1990' ],
                [ '1990', '1995' ], [ '1995', '2000' ], [ '2000', '2005' ],
                [ '2005', '2010' ], [ '2010', '2015' ], [ '2015', '2020' ],
                [ '1990', '2000' ], [ '2000', '2010' ], [ '2010', '2020' ],
                [ '1985', '2020' ], [ '2008', '2017' ], [ '1994', '2002' ],
                [ '2002', '2010' ], [ '2010', '2016' ], [ '1986', '2015' ],
                [ '1990', '2020' ], [ '2000', '2020' ], [ '2008', '2020' ],
                [ '2012', '2020' ]
            ],
            biome: ["biome"],
            version: '1',
        }
    },
    {
        initiative: 'af-trinacional',
        collection: 1,
        theme: 'integration',
        asset_id: "projects/mapbiomas_af_trinacional/public/collection1/mapbiomas_atlantic_forest_collection1_integration_v1",
        description: 'integration data from collection 1 (af-trinacional)',
        type: 'classification-multiband',
        countries: ["argentina", "brazil", "paraguay"],
        source: [
            "Instituto de Biología Subtropical de CONICET",
            "Facultad de Agronomía de la UBA",
            "Facultad de Ciencias Forestales",
            "UNAM",
            "Estación Experimental INTA Corrientes",
            "ONG Fundación Vida Silvestre Argentina",
            "ArcPlan",
            "SOS Mata Atlântica",
            "ONG WWF Paraguay"
        ],
        metadata: {
            bands: {
                prefix: 'classification_',
            },
            years:  [
                [ '2000' ], [ '2001' ],
                [ '2002' ], [ '2003' ],
                [ '2004' ], [ '2005' ],
                [ '2006' ], [ '2007' ],
                [ '2008' ], [ '2009' ],
                [ '2010' ], [ '2011' ],
                [ '2012' ], [ '2013' ],
                [ '2014' ], [ '2015' ],
                [ '2016' ], [ '2017' ],
                [ '2018' ], [ '2019' ]
            ],
            biome: ["biome"],
            version: '1',
        }
    },
    {
        initiative: 'af-trinacional',
        collection: 1,
        theme: 'quality',
        asset_id: "projects/mapbiomas_af_trinacional/public/collection1/mapbiomas_atlantic_forest_collection1_quality_v1",
        description: 'quality data from collection 1 (af-trinacional)',
        type: 'quality-multiband', // Is the quality asset type classification or transition?
        countries: ["argentina", "brazil", "paraguay"],
        source: [
            "Instituto de Biología Subtropical de CONICET",
            "Facultad de Agronomía de la UBA",
            "Facultad de Ciencias Forestales",
            "UNAM",
            "Estación Experimental INTA Corrientes",
            "ONG Fundación Vida Silvestre Argentina",
            "ArcPlan",
            "SOS Mata Atlântica",
            "ONG WWF Paraguay"
        ],
        metadata: {
            bands: {
                prefix: 'quality_',
            },
            years:  [
                [ '2000' ], [ '2001' ],
                [ '2002' ], [ '2003' ],
                [ '2004' ], [ '2005' ],
                [ '2006' ], [ '2007' ],
                [ '2008' ], [ '2009' ],
                [ '2010' ], [ '2011' ],
                [ '2012' ], [ '2013' ],
                [ '2014' ], [ '2015' ],
                [ '2016' ], [ '2017' ],
                [ '2018' ], [ '2019' ]
            ],
            biome: ["biome"],
            version: '1',
        }
    },
    {
        initiative: 'af-trinacional',
        collection: 1,
        theme: 'transition',
        asset_id: "projects/mapbiomas_af_trinacional/public/collection1/mapbiomas_atlantic_forest_collection1_transitions_v1",
        description: 'transitions data from collection 1 (af-trinacional)',
        type: 'transition-multiband',
        countries: ["argentina", "brazil", "paraguay"],
        source: [
            "Instituto de Biología Subtropical de CONICET",
            "Facultad de Agronomía de la UBA",
            "Facultad de Ciencias Forestales",
            "UNAM",
            "Estación Experimental INTA Corrientes",
            "ONG Fundación Vida Silvestre Argentina",
            "ArcPlan",
            "SOS Mata Atlântica",
            "ONG WWF Paraguay"
        ],
        metadata: {
            bands: {
                prefix: 'transition_',
            },
            years:  [
                [ '2000', '2001' ], [ '2001', '2002' ],
                [ '2002', '2003' ], [ '2003', '2004' ],
                [ '2004', '2005' ], [ '2005', '2006' ],
                [ '2006', '2007' ], [ '2007', '2008' ],
                [ '2008', '2009' ], [ '2009', '2010' ],
                [ '2010', '2011' ], [ '2011', '2012' ],
                [ '2012', '2013' ], [ '2013', '2014' ],
                [ '2014', '2015' ], [ '2015', '2016' ],
                [ '2016', '2017' ], [ '2017', '2018' ],
                [ '2018', '2019' ], [ '2000', '2005' ],
                [ '2005', '2010' ], [ '2010', '2015' ],
                [ '2015', '2019' ], [ '2000', '2010' ],
                [ '2010', '2019' ], [ '2008', '2019' ],
                [ '2012', '2019' ], [ '2002', '2010' ],
                [ '2010', '2016' ], [ '2000', '2019' ]
            ],
            biome: ["biome"],
            version: '1',
        }
    },

];

exports.key = products
// exports.obj = function() {
//     return products["products"]
// }

