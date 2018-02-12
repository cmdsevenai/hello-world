//instanceof
ol2d.getLayers().forEach(layer => {
    if (layer instanceof ol.layer.Group) {
        layer.getLayers().forEach(sublayer => {
            if (layer.get('title') == 'Base') {
                $("#base").append("<input type='checkbox'><label>" + sublayer.get('title') + "</label><br/>");
            }
            if (layer.get('title') == 'Overlays') {
                $("#overlayers").append("<input type='checkbox'><label>" + sublayer.get('title') + "</label><br/>");
            }
        });
    }
});
//custom prototype methode
ol.Map.prototype.getLayer = function (id) {
    var layer;
    this.getLayers().forEach(function (lyr) {
        if (id == lyr.get('id')) {
            layer = lyr;
        }
    });
    return layer;
}
ol.Map.prototype.getLayerByTitle = function (title) {
    var layer;
    this.getLayers().forEach(function (lyr) {
        if (title == lyr.get('title')) {
            layer = lyr;
        }
    });
    return layer;
}
//getLayerByTitle
//attention return position
ol.Map.prototype.getLayerByTitle = function (title) {
    var layer;
    this.getLayers().forEach(function (lyr) {
        if (lyr instanceof ol.layer.Group) {
            lyr.getLayers().forEach(sublyr => {
                if (sublyr.get('title') == title) {              
                    layer = sublyr;
                }
            });
        }
    });
    return layer;
}
//click event target
//form input checkbox
$("form").click(function (event) {
    $("#log").html("clicked: " + event.target.nodeName);
        console.log(event.target.nodeName);
        console.log(event.target.id);
});
//set checkbox id
event.attr('id', varId);
event.target
event.target.checked && event.target.id
$(this) && event.currentTarget
//test osm projection
var tile = new ol.layer.Tile({
    source: new ol.source.OSM()
});
console.log("OSM: ", tile.getSource().getProjection());//EPSG: 3857
//wms in cesium scene
const ol3d = new olcs.OLCesium({ map: ol2d, target: 'map3d' });
ol3d.setEnabled(true);
var scene = ol3d.getCesiumScene(); 
var imgLayers = scene.imageryLayers;
var wmsProvider = new Cesium.WebMapServiceImageryProvider({
    url: '',
    layers: 'Postgres:v_vg250_krs',
    parameters: {
        transparent: true,
        format: 'image/png'
    }
});
imgLayers.addImageryProvider(wmsProvider);
