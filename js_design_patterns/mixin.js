'use strict'
function mix() {
	var arg, n, prop, child = {};
	for (arg = 0, n = arguments.length; arg < n; arg++) {
		for (prop in arguments[arg]) {
			if (arguments[arg].hasOwnProperty(prop)) {
				child[prop] = arguments[arg][prop];
			}
		}
	}
	return child;
}

var a = {
	'a' : 1,
	'obj' : {
		'prop1' : .1,
		'prop2' : .2
	}
},
b = {
	'b' : 2	
},
c = {
	'c' : 3,
}

var d = mix(a, b, c);
console.log(d);

// d.obj.prop1 = 100

// console.log(d);
// console.log(a);