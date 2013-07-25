var Person = {  
    numFeet: 2,  
    numHeads: 1,  
    numHands:2  
};  
  
//Object.create takes its first argument and applies it to the prototype of your new object.  
var tilo = Object.create(Person);  
  
// console.log(tilo.numHeads); //outputs 1  
// tilo.numHeads = 2;  
// console.log(tilo.numHeads) //outputs 2
// console.log(Person.numHeads)


var Parent = function () {
    this.legs = 2;
}
Parent.prototype.get = function() {
    return this.legs
}

var Child = function() {}

Child.prototype = new Parent();

var c = new Child();

console.log(c.get())
