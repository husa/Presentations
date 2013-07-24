'use strict'
function mix() {
    function extend(parent, child) {
        var prop,
        toStr = Object.prototype.toString,
        astr = "[object Array]";
        for (prop in parent) {
            if (!child.hasOwnProperty(prop)) {
                if (typeof parent[prop] === "object") {
                    child[prop] = (toStr.call(parent[prop]) === astr) ? [] : {};
                    extend(parent[prop], child[prop]);
                } else {
                child[prop] = parent[prop];
                }
            }
        }
        return child;
    }

    var arg, n, prop, child = {};
    for (arg = 0, n = arguments.length; arg < n; arg++) {
        child = extend(arguments[arg], child);
    }
    return child;
}

var a = {
    'a' : 1,
    'obj' : {
        'prop1' : .1,
        'prop2' : .2
    }
},
b = {
    'b' : 2
},
c = {
    'c' : 3,
}

var d = mix(a, b, c);

d.obj.prop1 = 100

console.log(d);
console.log(a);