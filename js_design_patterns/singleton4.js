// Singleton in SEF closure, saving prototype and constructor

'use strict'
var Singleton;

(function() {
	var instance;

	Singleton = function Singleton() {
		var that = this || {};
		if (instance) {
			return instance;
		}

		instance = that;

		that.constructor = Singleton;

		that.prop1 = 'some value';
		that.prop2 = 1;

		return that;
	};
}());