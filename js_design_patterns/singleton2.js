//Singleton with instance storage in variable, redefining constructor

'use strict'
function Singleton() {

	var instance = this;

	this.prop1 = 'some value';
	this.prop2 = 1;

	Singleton = function() {
		return instance;
	}

	return instance;
}

var s1 = new Singleton();

var s2 = new Singleton();

console.log(s1 === s2);