// Singleton with instance storage in public property

'use strict'
function Singleton() {

	if ( typeof(Singleton.instance) === 'object' ) {
		return Singleton.instance;
	}

	this.prop1 = 'some value';
	this.prop2 = 1;

	Singleton.instance = this;

	return this;
}

var s1 = new Singleton();

var s2 = new Singleton();

console.log(s1 === s2);
