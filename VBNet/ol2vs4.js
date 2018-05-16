//### var map = new ol.Map({... ###
var map = new OpenLayers.Map('map', {
		controls: [],
		projection: new OpenLayers.Projection('EPSG:3857'),
		displayProjection: new OpenLayers.Projection('EPSG:4326')
	});

//### map.on('click', callback); ###
map.events.register('movestart', this, function (e) {
	startposi = map.getCenter();
});

//### ol.layer.Layer(options) ### 
var baseLayer = new OpenLayers.Layer("kayname", {options});

//### mapobj.addLayer(layer) ###
map.addLayer(baseLayer);

//### layer.setZIndex(zindex)
baseLayer.setZIndex(0);

//### ol.control.ZoomToExtent(opt_options) ###
map.zoomToMaxExtent();

//### ol.View.setCenter(center) ###
map.setCenter(startPosition, startZoomLevel);

//### ol.control.OverviewMap(opz_options) ###
new OpenLayers.Control.OverviewMap(options)

//### ol.Source.ImageWMS ###
OpenLayers.Layer.WMS(name, url, params, options)

//### ol4 Basicmap
<!doctype html>
<html lang="en">
<head>
  <link rel="stylesheet" href="https://openlayers.org/en/v4.6.5/css/ol.css" type="text/css">
  <style>
    .map {height: 800px;width: 100%;}
  </style>
  <script src="https://openlayers.org/en/v4.6.5/build/ol.js" type="text/javascript"></script>
  <title>OL4 Basic Map</title>
</head>
<body>
  <h2>Basic Map</h2>
  <div id="map" class="map"></div>
  <script type="text/javascript">
    var map = new ol.Map({
      target: 'map',
      layers: [new ol.layer.Tile({ source: new ol.source.OSM()})],
      view: new ol.View({
        center: ol.proj.fromLonLat([37.41, 8.82]),
        zoom: 4
      })
    });

    var osmLayer = new ol.layer.Image({
      title: 'Postgres:v_vg250_bld',
      source: new ol.source.ImageWMS({
        url: 'http://rcmap-test.rc.e-ssi.net:8081/geoserver/Postgres/wms',
        ratio: 1,
        params: {LAYERS: 'Postgres:v_vg250_bld',FORMAT: "image/png",TRANSPARENT: true}
      })
    });
    map.addLayer(osmLayer); osmLayer.setZIndex(2);

    var grayosm = new ol.layer.Image({
      title: 'OSM-WMS-GRAY',
      source: new ol.source.ImageWMS({
        url: 'http://ows.terrestris.de/osm-gray/service?',
        params: {LAYERS: 'OSM-WMS',FORMAT: "image/png",TRANSPARENT: true}
      })
    });
    map.addLayer(grayosm);grayosm.setZIndex(1);

    var startLon = 1141663.4543085;
    var startLat = 6816348.3774258;
    var center = ol.proj.transform([11.63, 52.12], 'EPSG:4326', 'EPSG:3857');
    //map.getView().setCenter(center);
  </script>
</body>
</html>
