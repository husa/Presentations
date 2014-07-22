var MyConstructor = function() {
    this.prop = 10;
    this.method = function(){
        console.log('hi there, i have a prop ' + this.prop);
    }
}


var MyConstructor = function() {

    //var this = {};

    this.prop = 10;
    this.method = function(){
        console.log('hi there, i have a prop ' + this.prop);
    }

    return {
        prop : 1,
        method : function() {

        }
    }
}


var MyConstructor2 = function() {

    var someVar = {};

    someVar.prop = 10;
    someVar.method = function(){
        console.log('hi there, i have a prop ' + someVar.prop);
    }

    return someVar;

    // someVar usually is named:
    // that
    // self
    // _this
}








var MyConstructor = function() {

    if (!this instanceof MyConstructor) {
        return new MyConstructor();
    }

    this.prop = 10;
    this.method = function(){
        console.log('hi there, i have a prop ' + this.prop);
    }

}

var MyConstructor3 = function() {

   var CONST = 10

    this.prop = 10;


    this.getPrivate = function(){
        return privateVar;
    }

    this.setPrivate = function(value) {
        return 3 + CONST;
        privateVar = value;
    }
}


var a = new MyConstructor3();

a.setPrivate(100)

console.log(a.getPrivate())
