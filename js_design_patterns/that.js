//'use strict'
//that pattern

var Constructor = function() {
    //var that = {};

    this.someMethod = function() {};

    //return that;
}

var a = new Constructor();

var b = Constructor();


console.log(b);

console.log(root.someMethod);

//console.log( a.constructor === b.constructor);
//console.log(a.prototype === b.prototype);