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
//use cesiumwidget 
//instead viewer
<script src="res/Cesium/Cesium.js"></script>
//var widget = new Cesium.CesiumWidget('cesiumContainer');
var widget = new Cesium.CesiumWidget('cesiumContainer', {
    imageryProvider : Cesium.createOpenStreetMapImageryProvider()
});
//var layers = widget.scene.global.imageryLayers;
var layers = widget.scene.imageryLayers;
//layers.removeAll();
layers.addImageryProvider(new Cesium.WebMapServiceImageryProvider({
    url: 'http://rcmap-test.rc.e-ssi.net:8081/geoserver/Postgres/wms',
    layers: 'Postgres:v_vg250_krs',// Here just give layer name GIS_Demo
    parameters: {
        transparent: true,
        srs: 'EPSG:4326',
        format: 'image/png'
     }
}));	
//var viewer = new Cesium.Viewer('cesiumContainer');
//show hide
var wmslyr = new Cesium.WebMapServiceImageryProvider(...
wmslyr.show = Cesium.defaultValue(show, false);
// ol-cesium 3D system
var ol3d = new olcs.OLCesium({map: ol2d});
var scene = ol3d.getCesiumScene();
var terrainProvider = new Cesium.CesiumTerrainProvider({
    url : '//assets.agi.com/stk-terrain/world'
});
scene.terrainProvider = terrainProvider;
//terrain with lookAt
//in Sandcastle
var viewer = new Cesium.CesiumWidget('cesiumContainer');
var cesiumTerrainProviderMeshes = new Cesium.CesiumTerrainProvider({
    url : 'https://assets.agi.com/stk-terrain/v1/tilesets/world/tiles',
});
viewer.terrainProvider = cesiumTerrainProviderMeshes;
lookAtMtEverest();
function lookAtMtEverest() {
    var target = new Cesium.Cartesian3(300770.50872389384, 5634912.131394585, 2978152.2865545116);
    var offset = new Cesium.Cartesian3(6344.974098678562, -793.3419798081741, 2499.9508860763162);
    viewer.camera.lookAt(target, offset);
    viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
}
//ol cesium osm terrain
var ol3d = new olcs.OLCesium({
    map: ol2d,
    target: 'map3d'
});
ol3d.setEnabled(true);
//scene
var scene = ol3d.getCesiumScene(); 
//imageryLayers
//wms
var layers = scene.imageryLayers;
//terrain provider
var cesiumTerrainProviderMeshes = new Cesium.CesiumTerrainProvider({
    url: 'https://assets.agi.com/stk-terrain/v1/tilesets/world/tiles',
});
//scene terrainProvider
scene.terrainProvider = cesiumTerrainProviderMeshes;
var target = new Cesium.Cartesian3(300770.50872389384, 5634912.131394585, 2978152.2865545116);
var offset = new Cesium.Cartesian3(6344.974098678562, -793.3419798081741, 2499.9508860763162);
scene.camera.lookAt(target, offset);
scene.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
