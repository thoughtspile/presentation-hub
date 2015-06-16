var lift = function(val, over) { 
    var fn = typeof val === 'number'
        ? function() { return val; }
        : val || function() {};
    over = over || [];
    return new grafar.Reactive().lift(fn).bind(over); 
};
var inputX = document.getElementById('inputX');
var tVal = document.getElementById('tVal');
var zVal = document.getElementById('zVal');
var wVal = document.getElementById('wVal');
var logHTML = function(node) {return function(p) { 
    node.innerHTML = p[0];
}};
var timer = function(period) {
    var time = 0;
    var rv = lift(function() { return time++; });
    setInterval(rv.invalidate.bind(rv), period);
    return rv;
};
var ctimer = function(period) {
    var s = Date.now();
    var rv = lift(function() { return (Date.now() - s) / period; });
    (function up() {
        rv.invalidate();
        window.requestAnimationFrame(up);
    }());
    return rv;
};
console.log(ctimer);

grafar.Object.prototype.add = grafar.Object.prototype.constrain;