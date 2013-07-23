// Singleton with closure, saving prototype and constructor

'use strict'
function Singleton() {
	var instance,
		that = this || {};

	Singleton = function() {
		return instance;
	}

	Singleton.prototype = that;

	instance = new Singleton();

	instance.constructor = Singleton;

	that.prop1 = 'some value';
	that.prop2 = 1;

	return instance;
}

Singleton.prototype.deepProp1 = 'prototype property1'

var s1 = new Singleton();

Singleton.prototype.deepProp2 = 'prototype property2'

var s2 = new Singleton();

console.log(s1 === s2);

console.log(s1.deepProp1);
console.log(s1.deepProp2);

console.log(s1.constructor === Singleton);