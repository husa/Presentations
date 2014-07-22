var Transport = function() {
    this.transport = true;
}

Transport.prototype.ride = function(distance) {
    console.log('going to ride ' + distance + 'km');
}
Transport.prototype.broke = function() {
    console.log('ohh crap i\'m broken');
}

var Car = function(options) {
    var defaultOptions = {
        'wheels' : 4,
        'doors'  : 4,
        'hp'     : 100,
        'eff'    : 4,
        'used'   : false
    },
    options = options || {};


    this.wheels = options.wheels || defaultOptions.wheels;
    this.doors  = options.doors || defaultOptions.doors;
    this.hp     = options.hp || defaultOptions.hp;
    this.eff    = options.eff || defaultOptions.eff;
    this.used   = options.used || defaultOptions.used;
}

Car.prototype = new Transport();

var car = new Car();

car.broke();


var OB = {};

var MyOB = function () {

}

for (var prop in OB) {
    if (MyOB.hasOwnProperty(prop)) {
        MyOB.prop = OB.prop;
    }
}









































function inherit(C, P) {
    var F = function() {};
    F.prototype = P.prototype;
    C.prototype = new F();
    C.uber = P.prototype;
    C.prototype.constructor = C;
}
