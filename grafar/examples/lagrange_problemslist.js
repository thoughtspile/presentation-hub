var problems = [
	{id: '1',
		eqn: 'z == x^2 - y^2',
		eqn_comp: function(data, l) {
			var x = data.x, y = data.y;
			for (var i = 0; i < l; i++) {
				data.z[i] = x[i] * x[i] + y[i] * y[i];
			}
		},
		conditions: ['x + y - 2'],
		conditions_comp: [function(data, l) {
			var x = data.x, y = data.y;
			for (var i = 0; i < l; i++) {
				data.z[i] = x[i] + y[i] - 2;
			}
		}],
		lambda: ['- 2'],
		cube: {x: [-5,5], y: [-5,5], z: [-5,5]},
		info:
		'<strong> Number </strong> \
		<br />Find local extremums in following conditions: \
		$$ x + y - 2 = 0 $$'},
	{id: '2', eqn: 'z == x^2 - y^2', conditions: ['2*x - y - 3'], lambda: ['- 2'], cube: {x: [-5,5], y: [-5,5], z: [-5,5]}, info:
	'<strong> Number </strong> \
	<br />Find local extremums in following conditions: \
	$$ 2x - y - 3 = 0 $$'},
	{id: '3', eqn: 'z == 2*(x^3) + 3*(a^2)*x + 2*(y^3) + 3*(a^2)*y', conditions: ['x^2 + y^2 - a^2'], lambda: ['-2'], cube: {x: [-5,5], y: [-5,5], z: [-5,5], a: 2}, info:
	'<strong> Number </strong> \
	<br />Find local extremums in following conditions: \
	$$ x^2 + y^2 - a^2 = 0 , a = 2 $$'},
	{id: '47.2 u', eqn: 'z == 1/x + 1/y', conditions: ['1/(x^2) + 1/(y^2) - 1/8'], lambda: ['- 1/2'], cube: {x: [-5,5], y: [-5,5], z: [-5,5]}, info:
	'<strong> Number 47.2 u</strong> \
	<br />Find local extremums in following conditions: \
	$$ \\frac{1}{x^2} + \\frac{1}{y^2} - \\frac{1}{8} = 0 $$'},
	{id: '47.2 a', eqn: 'z == x/a + y/b', conditions: ['x^2 + y^2 - 1'], lambda: ['+ 0.2795'], cube: {x: [-5,5], y: [-5,5], z: [-5,5], a: 4, b: 2}, info:
	'<strong> Number 47.2 u</strong> \
	<br />Find local extremums in following conditions: \
	$$ x^2 + y^2 - 1 = 0 , a = 4, b = 2 $$'}
];