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
