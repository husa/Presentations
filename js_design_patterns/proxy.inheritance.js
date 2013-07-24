
// inheriting only parent's prototype, not properties added by 'this.'
function inherit(C, P) {
    var F = function () {};

    F.prototype = P.prototype;
    C.prototype = new F();
}

// putting proxy into closure, saving
var inherit = (function () {
    var F = function () {};

    return function (C, P) {
        F.prototype = P.prototype;
        C.prototype = new F();

        C.uber = P.prototype;

        C.prototype.constructor = C;
    }
}());