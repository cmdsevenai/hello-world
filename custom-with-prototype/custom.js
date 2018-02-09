// $(function () {
//     console.log("on call");
//     window.app = {};
//     var app = window.app;
// });

RotateNorthControl = function (opt_options) {

    var options = opt_options || {};

    var button = document.createElement('button');
    button.innerHTML = 'N';

    var this_ = this;
    var handleRotateNorth = function () {
        this_.getMap().getView().setRotation(0);
    };

    button.addEventListener('click', handleRotateNorth, false);
    button.addEventListener('touchstart', handleRotateNorth, false);

    var element = document.createElement('div');
    element.className = 'rotate-north ol-unselectable ol-control';
    element.appendChild(button);

    ol.control.Control.call(this, {
        element: element,
        target: options.target
    });

};
ol.inherits(RotateNorthControl, ol.control.Control);

RotateNorthControl.prototype.someMethode = function(evt) {
   
};

ol.control.ScaleLine.prototype.alertInfo = function(){
    alert("works");
};
