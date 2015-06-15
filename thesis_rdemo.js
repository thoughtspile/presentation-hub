var rx = lift(function() { return parseInt(inputX.value); });
var ry = lift(2);
var rz = lift(function(p) { return p[0] * p[1]; }, [rx, ry]);
var rt = timer(1000);
var rw = lift(function(p) { return p[0] + p[1]; }, [rz, rt]);

var logT = lift(logHTML(tVal), [rt]);
var logZ = lift(logHTML(zVal), [rz]);
var logW = lift(logHTML(wVal), [rw]);

inputX.addEventListener('change', rx.invalidate.bind(rx));
var up = lift(function() {}, [logZ, logT, logW]);
setInterval(up.validate.bind(up), 16);