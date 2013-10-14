//named function expressions
var nfe = function nfe(a, b) {
    return a + b;
}

//function expression(anonymous)
var fea = function(a, b) {
    return a + b;
}

//function declarations
function declaration(a, b) {
    return a + b;
}

// console.log(nfe.name);
// console.log(fea.name);
// console.log(declaration.name);










//variables hoisting
function dosmth() {
    console.log(a)             // var a;
    var a = 10;                // console.log(a);
    console.log(a)             // a = 10;
                               // console.log(a);
}

//dosmth()

//hoisting
function dosmth2() {
    console.log(typeof foo);
    console.log(typeof bar);

    function foo() {
        console.log('foo function')
    }

    var bar = function() {
        console.log('bar function')
    }
}

//dosmth2();











//self defining functions
function dosmth3() {

    // do some initialization stuff
    console.log('first call');

    dosmth3 = function() {
        console.log('some later calls');
    }
}

// dosmth3();
// dosmth3();
// dosmth3();
// dosmth3();







//self invoked function(SEF)
// aka immediately invoked functions expressions(IIFE)
(function(){
    //console.log('inside SEF');
})();







//memoization
function memo(arg) {

    if (!memo.cache) {
        memo.cache = {};
    }

    if (!memo.cache[arg]) {
        // do some operations and save it
        memo.cache[arg] = arg * 2;
    }

    return memo.cache[arg];
}

// memo(10);
// memo(10);
// memo(10);


// closure

function add(a) {

    return function(b) {
        return a + b;
    }
}

var adder = add(3);

console.log(adder(4));
console.log(adder(10));
