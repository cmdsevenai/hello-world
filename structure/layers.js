$(function(){

	window.grouplayers = {};
	grouplayers = [
		new ol.layer.Group({
			title: 'Base maps',
			layers: [							
				new ol.layer.Tile({
					title: 'OSM',
					type: 'base',
					visible: true,
					source: new ol.source.OSM()
				})
			]
		}),
		new ol.layer.Group({
			title: 'Overlays',
			layers: [
				new ol.layer.Image({
					title: 'Postgres:v_vg250_bld',
					source: new ol.source.ImageWMS({
								url: 'http://rcmap-test.rc.e-ssi.net:8081/geoserver/Postgres/wms',
								ratio: 1,
								params: {
									'LAYERS': 'Postgres:v_vg250_bld',							
									//'TRANSPARENT': 'true',
									//'STYLE': ''							 
								}
							})
				}),
				new ol.layer.Image({
					title: 'Postgres:v_vg250_krs',
					source: new ol.source.ImageWMS({
								url: 'http://rcmap-test.rc.e-ssi.net:8081/geoserver/Postgres/wms',
								ratio: 1,
								params: {
									'LAYERS': 'Postgres:v_vg250_krs',														 
								}
							})
					}),
				new ol.layer.Image({
					title: 'Postgres:v_vg250_gem',
					source: new ol.source.ImageWMS({
								url: 'http://rcmap-test.rc.e-ssi.net:8081/geoserver/Postgres/wms',
								ratio: 1,
								params: {
									'LAYERS': 'Postgres:v_vg250_gem',														 
								}
							})
				}),	
			]
		}),
		//### Vector layers
		new ol.layer.Group({
			title: 'Vector layers',
			//layers: [vector_layer]
		})
	];
	
	//console.log("call layer js");
});