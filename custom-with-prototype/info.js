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
