'use strict'
var Module = (function(){
    
    var Private = {},
        Public = {};

    Private.myVariable = 0;
    Private.myMethod = function () {};

    Public.myVariable = 10;
    Public.myMethod = function () {};

    return {
        prop   : Public.myVariable,
        action : Public.myMethod
    }
}());
