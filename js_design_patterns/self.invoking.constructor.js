'use strict'
var Constructor = function() {

    if (!(this instanceof Constructor)) {
        return new Constructor();
    }

    this.prop = 'some property'
}


var a = new Constructor();

var b = Constructor();


console.log( a.constructor === b.constructor);
console.log(a.prototype === b.prototype);