<script>

var mapImage = new ol.Map({
  target: 'map',  
  renderer: 'canvas', // Force the renderer to be used
	controls: ol.control.defaults().extend([
					new ol.control.ScaleLine(),
	]),
	//layers of image
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    }),
		new ol.layer.Image({
      source: new ol.source.ImageWMS({
			  url: 'http://www.idee.es/wms/MTN-Raster/MTN-Raster', //Dienst
			  ratio: 1,
			  params: {
			    'LAYERS': 'mtn_rasterizado',
				  'TRANSPARENT': 'true',
				  'STYLE': ''							 
			  }
		  })
    }),
    new ol.layer.Image({
      source: new ol.source.ImageWMS({
			  url: 'http://rcmap-test.rc.e-ssi.net:8081/geoserver/Postgres/wms',
        ratio: 1,
        params: {
          'LAYERS': 'Postgres:v_vg250_bld',							
          'TRANSPARENT': 'true',
					'STYLE': ''							 
        }
      })
    }),
		new ol.layer.Image({
      source: new ol.source.ImageWMS({
        url: 'http://rcmap-test.rc.e-ssi.net:8081/geoserver/Postgres/wms',
        ratio: 1,
        params: {
				  'LAYERS': 'Postgres:v_vg250_krs',								
           //'TRANSPARENT': 'true'	
        }
      })
    })
 ],
 // Create a view centered on the specified location and zoom level
 view: new ol.View({
  center: ol.proj.transform([11.63, 52.12], 'EPSG:4326', 'EPSG:3857'),
  zoom: 6
 }
});

</script>
