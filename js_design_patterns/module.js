'use strict'
var Module = (function(){

    // private
    var privateVar = 'i\'m private';

    function privateFunc() {
        //doing some 007 stuff
    }

    return {
        init   : function() {

        },
        action : function (param) {
            // working with private variables and methods
        }
    }
}());

Module.globalMethod();

// practical example
var Module = (function($, _) {
    // some code using jQuery and underscore
}(jQuery, _));