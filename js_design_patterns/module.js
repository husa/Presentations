'use strict'
var Module = (function(){

	// private
	var privateVar = 'i\'m private';

	function privateFunc() {

	}

	var privateMethod = function() {
		console.log(privateVar);
	}

	return {
		init         : function() {},
		globalMethod : privateMethod
	}

}());

Module.globalMethod();