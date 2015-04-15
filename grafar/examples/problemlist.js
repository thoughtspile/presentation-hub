﻿var problems = [
	{id: '38.2(a)', eqns: ['x^2/a^2 + y^2/b^2 < 1', 'z < c/a*x', 'z > 0'], cube: {x: [-0.05, 1.05], y: [-2.05, 2.05], z: [-0.05, 3.05], a: 1, b: 2, c: 2}, info:
		'<strong> Номер 38.2(а) </strong> \
		 <br /> Найти объем тела, ограниченного следующими поверхностями: \
		 $$ \\frac{x^2}{a^2}+ \\frac{y^2}{b^2}=1, z=\\frac{c}{a}x, z=0 $$'},
	{id: '38.2(б)', eqns: ['x^2 + y^2 < r^2', 'x/r + z/h < 1', 'x/r - z/h > -1', 'y > 0', 'z > 0'], cube: {x: [-2.1, 2.1], y: [-0.1, 2.1], z: [-0.1, 2.1], r: 2, h: 2}, info:
		'<strong> Номер 38.2(б) </strong> \
		 <br /> Найти объем тела, ограниченного следующими поверхностями: \
		 $$ x^2+y^2=R^2, \\frac{x}{R}+\\frac{z}{H}=1, \\frac{x}{R}-\\frac{z}{H}=-1,$$ $$ y=0, z=0$$'},
	{id: '65.3(a)', eqns: ['x > 0', 'x < 1', 'y > 0', 'x + y < 1', 'z > 0', 'x + y - z > 0'], cube: {x: [-0.1, 1.1], y: [-0.1, 1.1], z: [-0.1, 1.1]}, info:
		'<strong> Номер 65.3(а) </strong> \
		 <br /> Различными способами расставить пределы в следующем тройном интеграле: \
		 $$\\int\\limits_{0}^{1} dx \\int\\limits_{0}^{1-x} dy \\int\\limits_{0}^{x+y} f(x,y,z) dz$$'},
	{id: '65.3(б)', eqns: ['x > -1', 'x < 1', 'y < sqrt(1-x^2)', 'y > -sqrt(1-x^2)', 'z > sqrt(x^2+y^2)', 'z < 1'], cube: {x: [-1.1, 1.1], y: [-1.1, 1.1], z: [-0.1, 1.1]}, info:
		'<strong> Номер 65.3(б)} </strong> \
		 <br /> Различными способами расставить пределы в следующем тройном интеграле: \
		 $$\\int\\limits_{-1}^{1} dx \\int\\limits_{-\\sqrt{1-x^2}}^{\\sqrt{1-x^2}} dy \\int\\limits_{\\sqrt{x^2+y^2}}^{1} f(x,y,z) dz$$'},
	{id: '65.3(в)', eqns: ['x > 0', 'x < a', 'y > 0', 'y < sqrt(a*x)', 'z < x+y', 'z > 0'], cube: {x: [-0.05, 1.05], y: [-0.05, 1.05], z: [-0.05, 2.05], a: 1}, info:
		'<strong> Номер 65.3(в) </strong> \
		 <br /> Различными способами расставить пределы в следующем тройном интеграле: \
		 $$\\int\\limits_{0}^{a} dx \\int\\limits_{0}^{\\sqrt{ax}} dy \\int\\limits_{0}^{x+y} f(x,y,z) dz, a>0$$'},
	{id: '65.4(а)', eqns: ['x > 0', 'x < a', 'y > 0', 'y < x', 'z < y', 'z > 0'], cube: {x: [-0.05, 1.05], y: [-0.05, 1.05], z: [-0.05, 1.05], a: 1}, info:
		'<strong> Номер 65.4(а) </strong> \
		 <br />Заменить тройной интеграл однократным: \
		 $$\\int\\limits_{0}^{a} dx \\int\\limits_{0}^{x} dy \\int\\limits_{0}^{y} f(z) dz, a>0$$'},
	{id: '65.4(б)', eqns: ['x >= 0', 'x <= 1', 'y >= 0', 'y <= 1', 'z <= x+y', 'z >= 0'], cube: {x: [-0.05, 1.05], y: [-0.05, 1.05], z: [-0.05, 2.05]}, info:
		'<strong> Номер 65.4(б) </strong> \
		 <br /> Заменить тройной интеграл однократным: \
		 $$\\int\\limits_{0}^{1} dx \\int\\limits_{0}^{1} dy \\int\\limits_{0}^{x+y} f(z) dz$$'},
	{id: '65.5(а)', eqns: ['x < 1', 'y < x', 'z < x*y', 'z > 0'], cube: {x: [-0.05, 1.05], y: [-0.05, 1.05], z: [-0.05, 1.05]}, info:
		'<strong> Номер 65.5(а) </strong> \
		 <br /> Вычислить следующий тройной интеграл: \
		 $$\\iiint\\limits_{V}^{} x y^2 z^3 dx dy dz, где$$'},
	{id: '65.5(б)', eqns: ['x > 0', 'y > 0', 'x + y + z < 1', 'z > 0'], cube: {x: [-0.05, 1.05], y: [-0.05, 1.05], z: [-0.05, 1.05]}, info:
		'<strong> Номер 65.5(б) </strong> \
		 <br /> Вычислить следующий тройной интеграл: \
		 $$\\iiint\\limits_{V}^{} \\frac{dxdydz}{(1+x+y)^2}, где$$ \
		 $$V=\\lbrace (x,y,z) \\vert x \\geq 0, y \\geq 0, z \\geq 0, $$ $$ x+y+z \\leq 1 \\rbrace$$'},
	{id: '65.5(в)', eqns: ['x > 0', 'y > 0', 'x^2 + y^2 + z^2 < 1', 'z > 0'], cube: {x: [-0.05, 1.05], y: [-0.05, 1.05], z: [-0.05, 1.05]}, info:
		'<strong> Номер 65.5(в) </strong> \
		 <br /> Вычислить следующий тройной интеграл: \
		 $$\\iiint\\limits_{V}^{} xyz dx dy dz, где$$ \
		 $$V=\\lbrace (x,y,z) \\mid x^2+y^2+z^2 = 1, $$ $$ x = 0, y = 0, z = 0 \\rbrace$$'},
	{id: '65.5(г)', eqns: ['x^2/a^2 + y^2/b^2 + z^2/c^2 < 1'], cube: {x: [-1.05, 1.05], y: [-1.05, 1.05], z: [-2.05, 2.05], a: 1, b: 1, c: 2 }, info:
		'<strong> Номер 65.5(г) </strong> \
		 <br /> Вычислить следующий тройной интеграл: \
		 $$\\iiint\\limits_{V}^{} (\\frac{x^2}{a^2}+\\frac{y^2}{b^2}+\\frac{z^2}{c^2}) dx dy dz, где$$ \
		 $$V=\\lbrace (x,y,z) \\mid \\frac{x^2}{a^2}+\\frac{y^2}{b^2}+\\frac{z^2}{c^2} = 1 \\rbrace,$$ $$ a>0, b>0, c>0$$'},
	{id: '65.5(д)', eqns: ['(x^2 + y^2 + z^2)^2 < a^2*x*y'], cube: {x: [-0.65, 0.65], y: [-0.65, 0.65], z: [-0.65, 0.65], a: 1}, info:
		'<strong> Номер 65.5(д) </strong> \
		 <br /> Вычислить следующий тройной интеграл: \
		 $$\\iiint\\limits_{V}^{} \\frac{x y z}{x^2+y^2} dx dy dz, где$$ \
		 $$V=\\lbrace (x,y,z) \\mid (x^2+y^2+z^2)^2 = a^2 x y \\rbrace,$$ $$ a>0$$'},
	{id: '65.5(е)', eqns: ['sqrt(x^2 + y^2) < z', 'z < a'], cube: {x: [-1.05, 1.05], y: [-1.05, 1.05], z: [-0.05, 1.05], a: 1}, info:
		'<strong> Номер 65.5(е) </strong> \
		 <br /> Вычислить следующий тройной интеграл: \
		 $$\\iiint\\limits_{V}^{} \\frac{x^2+y^2}{\\sqrt{x^2+y^2+z^2}} dx dy dz, где$$ \
		 $$V=\\lbrace (x,y,z) \\mid \\sqrt{x^2+y^2} \\leq z \\leq a \\rbrace,$$ $$ a>0$$'},
	{id: '65.5(ж)', eqns: ['x^2 + y^2 < 2*a*z', 'x^2 + y^2 + z^2 < 3*a^2'], cube: {x: [-2.05, 2.05], y: [-2.05, 2.05], z: [-0.05, 2.05], a: 1}, info:
		'<strong> Номер 65.5(ж) </strong> \
		 <br /> Вычислить следующий тройной интеграл: \
		 $$\\iiint\\limits_{V}^{} (x+y+z)^2 dx dy dz, где$$ \
		 $$V=\\lbrace (x,y,z) \\mid x^2+y^2 \\leq2az, $$ $$ x^2+y^2+z^2 \\leq 3a^2 \\rbrace, a>0$$'},
	{id: '65.8', eqns: ['(x^2 + y^2)/m > z', 'z > (x^2 + y^2)/n', 'x*y > a^2', 'x*y < b^2', 'y > c*x', 'y < d*x'], cube: {x: [.5, 1.5], y: [.5, 1.5], z: [0, 1.2], m: 2, n: 4, a: .5, b: 1, c: .5, d: 1}, info:
		'<strong> Номер 65.8 </strong> \
		 <br /> Вычислить следующий тройной интеграл: \
		 $$\\iiint\\limits_{V}^{} x y z dx dy dz, где$$ \
		 область V расположена в октанте x>0,y>0, z>0 и ограничена поверхностями: \
		 $$z=\\frac{x^2+y^2}{m}, z=\\frac{x^2+y^2}{n}, $$ $$ xy=a^2, xy=b^2, $$ $$ y=\\alpha x, y=\\beta x$$ $$ (0<a<b, 0<\\alpha <\\beta, 0<m<n)$$'},
	{id: '66.1(а)', eqns: ['x^2 + y^2 + z^2 < z'], cube: {x: [-0.55, 0.55], y: [-0.55, 0.55], z: [-0.05, 1.05]}, info:
		'<strong> Номер 66.1(а) </strong> \
		 <br /> Производя соответствующую замену переменных, вычислите тройной интеграл: \
		 $$ \\iiint\\limits_{V}^{} \\sqrt{x^2+y^2+z^2} dx dy dz,$$ \
		 где область V ограничена поверхностью $$x^2+y^2+z^2 = z$$'},
	{id: '66.1(б)', eqns: ['x^2 + y^2 < 2*z', 'z < 2'], cube: {x: [-2.05, 2.05], y: [-2.05, 2.05], z: [-0.05, 2.05]}, info:
		'<strong> Номер 66.1(б) </strong> \
		 <br /> Производя соответствующую замену переменных, вычислите тройной интеграл: \
		 $$ \\iiint\\limits_{V}^{} (x^2+y^2) dx dy dz,$$ \
		 где область V ограничена поверхностями $$x^2+y^2 = 2z, z=2$$'},
	{id: '66.1(в)', eqns: ['x^2 + y^2 < a*z', '(x^2 + y^2)^2 > a*z^3'], cube: {x: [-1.01, 1.01], y: [-1.01, 1.01], z: [-0.01, 1.01], a: 1}, info:
		'<strong> Номер 66.1(в) </strong> \
		 <br /> Производя соответствующую замену переменных, вычислите тройной интеграл: \
		 $$ \\iiint\\limits_{V}^{} z(x^2+y^2) dx dy dz,$$ \
		 где область V ограничена поверхностями $$x^2+y^2 = az, (x^2+y^2)^2=az^3$$'},
	{id: '66.1(д)', eqns: ['3 - x^2 - y - z^2 > 0', 'x^2 + z^2 > x', 'x^2 + z^2 < 2*x', 'y > 0', 'z < x', 'z > -x'], cube: {x: [0.4, 1.8], y: [-0.1, 2.6], z: [-1.1, 1.1]}, info:
		'<strong> Номер 66.1(д) </strong> \
		 <br /> Производя соответствующую замену переменных, вычислите тройной интеграл: \
		 $$ \\iiint\\limits_{V}^{} \\frac{dx dy dz}{\\sqrt{x^2+z^2}},$$ \
		 где область V ограничена поверхностями $$x=z^2+x^2, 2x=z^2+x^2, $$ $$ x\\geqslant |z|, 0\\leqslant y \\leqslant 3-z^2-x^2$$'},
	{id: '66.3(а)', eqns: ['z < x + y', 'z > x * y', 'x + y < 1', 'x > 0', 'y > 0'], cube: {x: [-0.1, 1.1], y: [-0.1, 1.1], z: [-0.1, 1.1]}, info:
		'<strong> Номер 66.3(а) </strong> \
		 <br /> Найти объем тела, ограниченного следующими поверхностями: \
		 $$ z=x+y, z=xy, x+y=1, x=0, y=0$$'},
	{id: '66.3(б)', eqns: ['6 - x^2 - y^2 - z > 0', 'z > sqrt(x^2+y^2)'], cube: {x: [-6.1, 6.1], y: [-6.1, 6.1], z: [-0.1, 6.1]}, info:
		'<strong> Номер 66.3(б) </strong> \
		 <br /> Найти объем тела, ограниченного следующими поверхностями: \
		 $$ z=6-x^2-y^2, z=\\sqrt{x^2+y^2}$$'},
	{id: '66.3(в)', eqns: ['x^2 + y^2 + z^2 < 2*a*z', 'x^2 + y^2 < z^2'], cube: {x: [-1.1, 1.1], y: [-1.1, 1.1], z: [-0.1, 2.1], a: 1}, info:
		'<strong> Номер 66.3(в) </strong> \
		 <br /> Найти объем тела, ограниченного следующими поверхностями: \
		 $$ x^2+y^2+z^2=2az, x^2+y^2 \\leqslant z^2$$'},
	{id: '66.3(г)', eqns: ['x^2 + y^2 + z^2 > a^2', 'x^2 + y^2 + z^2 < b^2', 'x^2 + y^2 < z^2'], cube: {x: [-1.55, 1.55], y: [-1.55, 1.55], z: [0.45, 2.05], a: 1, b: 2}, info:
		'<strong> Номер 66.3(г) </strong> \
		 <br /> Найти объем тела, ограниченного следующими поверхностями: \
		 $$ x^2+y^2+z^2=a^2, $$ $$ x^2+y^2+z^2=b^2, $$ $$ x^2+y^2=z^2 (z \\geqslant 0, 0 < a < b)$$'},
	{id: '66.4(а)', eqns: ['(x^2 + y^2 + z^2)^3 > 0', '(x^2 + y^2 + z^2)^3 < a^3*x*y*z'], cube: {x: [-0.65, 0.65], y: [-0.65, 0.65], z: [-0.65, 0.65], a: 1}, info:
		'<strong> Номер 66.4(а) </strong> \
		<br /> Вычислить объем тела, ограниченного следующими поверхностями: \
		$$ 0\\leqslant (x^2+y^2+z^2)^3 = a^3 x y z $$'},
	{id: '66.4(б)', eqns: ['(x^2 + y^2 + z^2)^n < x^(2*n-1)'], cube: {x: [-0.05, 1.05], y: [-0.55, 0.55], z: [-0.55, 0.55], n: 2}, info:
		'<strong> Номер 66.4(б) </strong> \
		<br /> Вычислить объем тела, ограниченного следующей поверхностью: \
		$$ (x^2+y^2+z^2)^n = x^{2n-1}, n\\in N $$'},
	{id: '66.4(г)', eqns: ['x^2 + y^2 < z', 'z < 2*(x^2 + y^2)', 'y > x', 'y < 2*x', 'z < h'], cube: {x: [-0.05, 0.75], y: [-0.05, 1.05], z: [-0.05, 1.05], h: 1}, info:
		'<strong> Номер 66.4(г) </strong> \
		<br /> Вычислить объем тела, ограниченного следующими поверхностями: \
		$$ z=x^2+y^2, z=2(x^2+y^2),$$ $$ y=x, y=2x, z=h, $$ $$(x>0, y>0, z>0) $$'},
	{id: '66.4(д)', eqns: ['(x^2/a^2 + y^2/b^2 + z^2/c^2 + d^2)^2 < 4*z^2/c^2'], cube: {x: [-2.65, 2.65], y: [-2.65, 2.65], z: [-2.65, 2.65], a: 1, b: 0.5, c: 1, d: 0.5}, info:
		'<strong> Номер 66.4(д) </strong> \
		<br /> Вычислить объем тела, ограниченного следующей поверхностью: \
		$$ (\\frac{x^2}{a^2}+\\frac{y^2}{b^2}+\\frac{z^2}{c^2}+ \\alpha ^2)^2 = \\frac{4z^2}{c^2}, \\alpha ^2 < 1$$'},
	{id: '66.4(е)', eqns: ['(x^2 + y^2 + z^2)^n < x^(2*n-1)'], cube: {x: [-1.05, 1.05], y: [-1.05, 1.05], z: [-1.05, 1.05], a: 1, b: 2, c: 3}, info:
		'<strong> Номер 66.4(е) </strong> \
		<br /> Вычислить объем тела, ограниченного следующей поверхностью: \
		$$ (\\frac{x^2}{a^2}+\\frac{y^2}{b^2}+\\frac{z^2}{c^2})^2=(\\frac{x^2}{a^2}+\\frac{y^2}{b^2})\\frac{z}{c}$$'},
	{id: '66.4(ж)', eqns: ['(x + y + z)^2 < a*y', 'x > 0', 'y > 0', 'z > 0'], cube: {x: [-0.05, 1.05], y: [-0.05, 2.05], z: [-0.05, 1.05], a: 2}, info:
		'<strong> Номер 66.4(ж) </strong> \
		<br /> Вычислить объем тела, ограниченного следующими поверхностями: \
		$$ (x+y+z)^2=ay, x=0, y=0, z=0 $$'}
];