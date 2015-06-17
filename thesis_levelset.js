var runLevelSet = function() {
    var graph = new grafar.Panel(document.getElementById('render'));
    var graph2d = new grafar.Panel(document.getElementById('render2d')).setAxes(['x', 'y']);
    console.log(graph2d);
    graph2d.camera.position.set(0, 0, -7);
    var fun = function(x, y) { 
        return x * Math.log(Math.pow(y, 2) + 1) + x / 2;
    };
    var funl = function(a) {
        return function(v) {
            return fun(v[0], v[1]) - a;
        };
    };
    
    var surf = new grafar.Object().pin(graph)
        .constrain('x', grafar.seq(-2, 2, 'x'), {maxlen: 30})
        .constrain('y', grafar.seq(-2, 2, 'y'), {maxlen: 30})
        .constrain('z: x, y', function(data, l) {
            for (var i = 0; i < l; i++)
                data.z[i] = fun(data.x[i], data.y[i]);
        })
        .refresh();
    surf.glinstances[0].object.children[0].visible = false;
        
    var plane = new grafar.Object().pin(graph)
        .constrain('x', grafar.seq(-2, 2, 'x'), {maxlen: 2})
        .constrain('y', grafar.seq(-2, 2, 'y'), {maxlen: 2})
        .constrain('z', grafar.constant(0, 'z'), {maxlen: 1})
        .refresh();
    plane.glinstances[0].object.children[0].visible = false;
        
    var inter = new grafar.Object().pin(graph).pin(graph2d)
        .constrain('x, y', grafar.traceZeroSet(funl(0), ['x', 'y']), 
            {maxlen: 3000, discrete: true})
        .constrain('z', grafar.constant(0, 'z'), {maxlen: 1})
        .refresh();
        
    var t = 0;
    (function up() {
        t += .005;
        p = Math.sin(t);
        inter.constrain('x, y', grafar.traceZeroSet(funl(p), ['x', 'y']), 
                {maxlen: 3000, discrete: true})
            .constrain('z', grafar.constant(p, 'z'), {maxlen: 1})
            .refresh();
        plane.constrain('z', grafar.constant(p, 'z'), {maxlen: 1})
            .refresh();
        window.requestAnimationFrame(up);
    }());
};