'use strict'
function extend(parent, child) {
	var prop;
	child = child || {};
	for (prop in parent) {
		if (!child.hasOwnProperty(prop)) {
			child[prop] = parent[prop];
		}
	}
	return child;
}

var Parent = {
	'age' : 100500,
	'old' : true,
	'name' : 'Papa',
	'surname' : 'wtfomg',
	'likes' : ['pizza'],
	'body' : {
		'legs' : 2,
		'arms' : 2
	}
}

var Child = {
	'age' : -1,
	'old' : false,
	'name' : 'Kid'
}

var a = extend(Parent, Child);
console.log(Child);

// Child.likes.push('ice cream');

// Parent.body.legs = 3;

// console.log(Parent);
// console.log(Child);