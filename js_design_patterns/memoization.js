'use strict'

var myFunction = function (param) {
    var f = arguments.calle,
        result;

    if (!f.cache[param]) {
        var result = {};

        // expensive operation

        f.cache[param] = result;
    }

    return f.cache[param];
};


// cache storage
myFunction.cache = {};