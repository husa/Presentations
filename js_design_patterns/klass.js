'use strict'
var klass = function(Parent, properties) {
    var Child, F, i;

    //new constructor
    Child = function() {
        if (Child.uber && Child.uber.hasOwnProperty('__init__')) {
            Child.uber.__init__.apply(this, arguments);
        }
        if (Child.prototype.hasOwnProperty('__init__')) {
            Child.prototype.__init__.apply(this, arguments);
        }
    }

    //inheritance
    Parent = Parent || Object;
    F = function() {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.uber = Parent.prototype;
    Child.prototype.constructor = Child;

    //add methods
    for (i in properties) {
        if (properties.hasOwnProperty(i)) {
            Child.prototype[i] = properties[i]
        }
    }

    return Child;
}

// usage
var Man = klass(null, {
    __init__ : function(name) {
        this.name = name;
        console.log('Man\'s __init__');
    },
    getName : function() {
        return this.name;
    }
});

var SuperMan = klass(Man, {
    __init__ : function () {
        console.log('SuperMan\'s __init__')
    },
    getName : function () {
        return SuperMan.uber.getName.call(this) + ', and I\'m SuperMan';
    }
});

var a = new Man('Bob');
console.log( a.getName() );

var b = new SuperMan('Clark Kent');
console.log( b.getName() );