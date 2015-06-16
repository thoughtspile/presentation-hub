var runMilano = function() {
    var map = new grafar.Panel(document.getElementById('milano-map')).setAxes(['x', 'y']),
        stopCount = stopData.length,
        pointCount = shapeData.length;
    var scale = 30;

    map.axisObject.visible = false;
    map.axisLabels.visible = false;

    var stops = new grafar.Object().pin(map);
    stops.glinstances[0].object.children[0].material = grafar.circleSprite();       
    stops.glinstances[0].object.children[0].material.size = 5;        
    stops.constrain('x, y', function(data, l) {
            for (var i = 0; i < l; i++) {
                data.x[i] = (stopData[i][1] - 45.5) * scale;
                data.y[i] = (stopData[i][2] - 9.2) * scale;
            }
        }, {maxlen: stopCount, discrete: true})
        .refresh();
    stopData.length = 0;
        
    var shapes = new grafar.Object().pin(map);
    var tripData = [];
    var tripStart = 0;
    shapes.glinstances[0].object.children[0].visible = false;
    shapes.glinstances[0].object.children[1].material.color = 0;
    shapes.constrain('x, y, dist', function(data, l) {
            var dist = 0;
            for (var i = 0; i < l; i++) {
                data.x[i] = (shapeData[i][1] - 45.5) * scale;
                data.y[i] = (shapeData[i][2] - 9.2) * scale;
                if (i > 0 && shapeData[i][0] === shapeData[i - 1][0]) {
                    var dx = data.x[i] - data.x[i - 1];
                    var dy = data.y[i] - data.y[i - 1];
                    dist += Math.sqrt(dx * dx + dy * dy);
                } else {
                    dist = 0;
                }
                data.dist[i] = dist;
            }
        }, {maxlen: pointCount, discrete: true})
        .refresh();
    var edges = shapes.glinstances[0].segments;
    grafar.resizeBuffer(edges, 2 * pointCount);
    for (var i = 1; i < pointCount - 1; i++) {
        if (shapeData[i][0] === shapeData[i - 1][0]) {
            edges.array[2 * i] = i - 1;
            edges.array[2 * i + 1] = i;
        } else {
            tripData.push({start: tripStart, count: i - tripStart});
            tripStart = i;
        }
    }        
    shapeData.length = 0;        
    stops.hide(true);

    var buses = new grafar.Object().pin(map);
    var xarr = shapes.datasets.x.data.value().array;
    var yarr = shapes.datasets.y.data.value().array;
    var darr = shapes.datasets.dist.data.value().array;
    buses.glinstances[0].object.children[0].visible = true;
    buses.glinstances[0].object.children[0].material = grafar.circleSprite('orangered');       
    buses.glinstances[0].object.children[0].material.size = 10;        
    buses.constrain('pos', grafar.constant(0, 'pos'), {maxlen: 1})
        .constrain('tripStart, tripCount', function(data, l) {
            for (var  i = 0; i < l; i++) {                    
                data.tripStart[i] = tripData[i].start;
                data.tripCount[i] = tripData[i].count;
            }
        }, {maxlen: tripData.length, discrete: true}) //tripData.length
        .constrain('offset', function(data, l) {
            for (var j = 0; j < l; j++)
                data.offset[j] = Math.random() * tripData.length;
        }, {maxlen: 5, discrete: true})
        .constrain('x, y, dir: pos, tripStart, tripCount, offset', function(data, l) {
            for (var  i = 0; i < l; i++) {
                var count = data.tripCount[i];
                var start = data.tripStart[i];
                var tripLen = darr[start + count - 1];
                var pos = (data.pos[i] + data.offset[i]) % tripLen;
                //var back = Math.floor((data.pos[i] + data.offset[i]) / tripLen) % 2 === 1;
                //if (back)
                //    pos = tripLen - pos;
                
                var prevPosId = start;
                while (prevPosId <= start + count && darr[prevPosId + 1] < pos)
                    prevPosId++;                    
                var nextPosId = prevPosId + 1;
                if (nextPosId === start + count) {
                    nextPosId = start;
                    prevPosId = start;
                }
                
                var segLen = darr[nextPosId] - darr[prevPosId];
                var frac = segLen > 0? (pos - darr[prevPosId]) / segLen: 0;
                
                data.x[i] = (1 - frac) * xarr[prevPosId] + frac * xarr[nextPosId];
                data.y[i] = (1 - frac) * yarr[prevPosId] + frac * yarr[nextPosId];
                //if (Number.isNaN(data.x[i]) || Number.isNaN(data.y[i]))
                //    console.log('fuck', frac, xarr[prevPosId], nextPosId);
            }
        })
        .refresh();
        
    var s = Date.now();
    var stopId = 0;
    function up() {
        stopId = .00005 * (Date.now() - s);
        buses.constrain('pos', grafar.constant(stopId, 'pos'), {maxlen: 1})
            .refresh();
        window.requestAnimationFrame(up);
    };
    up();
};