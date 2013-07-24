'use strict'
var Constructor = (function () {
    //private static member
    var privateVar = 0;

    return function() {
        //here goes real constructor implementation
        console.log(privateVar++);
    }
}());

var a = new Constructor();

var b = new Constructor();

var c = Constructor();