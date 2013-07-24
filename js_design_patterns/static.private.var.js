'use strict'
var Constructor = (function () {
    //private static member
    var privateVar = 0;

    //here goes real constructor implementation
    return function() {
        var that = {};

        console.log(privateVar++);

        return that;
    }
}());

var a = new Constructor();

var b = new Constructor();

var c = Constructor();