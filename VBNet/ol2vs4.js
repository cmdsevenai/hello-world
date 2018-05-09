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
