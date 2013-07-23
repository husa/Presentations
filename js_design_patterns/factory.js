// Basic factory

'use strict'
function CarMaker () {};

CarMaker.prototype.drive = function() {
	return 'Vroom. I have ' + this.doors + ' doors';
};

CarMaker.factory = function (type) {
	var constr = type,
		newcar;

	if ( typeof(CarMaker[constr]) !== 'function' ) {
		throw {
			name : 'Error',
			message : constr + ' doesn\'t exist'
		};
	}

	if ( typeof CarMaker[constr].drive !== 'function' ) {
		CarMaker[constr].prototype = new CarMaker();
	}

	newcar = new CarMaker[constr]();

	// doing some stuff

	return newcar;
}

CarMaker.Compact = function () {
	this.doors = 2;
}
CarMaker.Convertible = function () {
	this.doors = 4;
}
CarMaker.SUV = function () {
	this.doors = 100500;
}

var corolla  = CarMaker.factory('Compact');
var solstice = CarMaker.factory('Convertible');
var cherokee = CarMaker.factory('SUV');

console.log( corolla.drive()  );
console.log( solstice.drive() );
console.log( cherokee.drive() );