$(function(){ 

	window.map = {};
	map = new ol.Map({
		target: 'map',
		controls: [],
		layers: grouplayers,
        view: new ol.View({
          center: ol.proj.transform([11.63, 52.12], 'EPSG:4326', 'EPSG:3857'),
          zoom: 6
        })
    });	
	
	//### add controls
	var overview = new ol.control.OverviewMap();
	map.addControl(overview);

	var layerSwitcher = new ol.control.LayerSwitcher({});
	map.addControl(layerSwitcher); 	
	
	//console.log("call map js");
});	

