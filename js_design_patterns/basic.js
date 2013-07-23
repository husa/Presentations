var GLOBAL = 'some global variable';

var CONSTANT = 'some constant value';

var local = 'some local variable';

GLOBAL_novar = 'variable without "var" ';

delete GLOBAL_novar;



var a = b = 1; // NEVER!!!!!!!!!! var a = (b = 1)

console.log(a, b);
delete b;
console.log('after delete: ', a, b);


var a = 10,
	bool = true,
	str = 'string';

var arr = [];
for (var i = 0, n = arr.length; i < n; i++) {
	//do smth
}

for (var i = arr.length; i; i--) {
// 	//do smth
}

var i = arr.length;
while (i--) {
	//do smth
}

function myFunction() {

}

function MyConstructor() {

}