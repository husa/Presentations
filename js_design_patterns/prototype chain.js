'use strict'
var a = {
	a_prop : 'a property'
};

var b = {
	b_prop : 'b property'
};

a.prototype = b;

b.prototype = a;

console.log(a);