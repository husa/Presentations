'use strict'
function extend(parent, child) {
	var prop,
	toStr = Object.prototype.toString,
	astr = "[object Array]";
	child = child || {};
	for (prop in parent) {
		if (!child.hasOwnProperty(prop)) {
			if (typeof parent[prop] === "object") {
				child[prop] = (toStr.call(parent[prop]) === astr) ? [] : {};
				extend(parent[prop], child[prop]);
			} else {
			child[prop] = parent[prop];
			}
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
	'age' : 1,
	'old' : false,
	'name' : 'Kid'
}

var a = extend(Parent, Child);

Child.likes.push('ice cream');

Parent.body.legs = 3;

console.log(Parent);
console.log(Child);