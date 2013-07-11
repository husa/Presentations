
# Xyleme Code Convention

### Identation

**2 spaces.**

----
### Line width

**80 characters.**

----
### Semicolons

**ALWAYS!**

----
### Comments

**NO**

    /*
    some
    multiline
    comment
    */

**YES**

    // some
    // multiline
    // comment


----
### Quotes

**JavaScript**

    '

**HTML/CSS**

    "

----
### Trailing whitespace


    var a = 10,
        b = 20,
        c = 30;
    var array = [10, 20, true, 'yes'];

    var obj = {
        'prop' : 'value'
    };

    if (condition) {
      // statements
    }

    while (condition) {
      // statements
    }

    for (var i = 0; i < 100; i++) {
      // statements
    }

    if (true) {
      // statements
    } else {
      // statements
    }

----
### Curly braces

Use them, always

**NO**

    for (i = 0, n = arr.length; i < n; i++)
        if (condition)
            //statements
        else
            //statements

**YES**

    for (i = 0, n = arr.length; i < n; i++) {
        if (condition) {
            //statements
        } else {
            //statements
        }
    }

Opening brace on the same line

**NO**

    if (condition)
    {
    //statements
    }

**YES**

    if (condition) {
        //statements
    }

----
### Equality

**Always**

    ===

**Only one case**

    //Dont
    if (a === undefined || a === null)
    // Use
    if (a == null)


----
### Type checking

String:

        typeof variable === "string"

Number:

        typeof variable === "number"

Boolean:

        typeof variable === "boolean"

Object:

        typeof variable === "object"

Array:

        Array.isArray( arrayLikeObject ) // wherever possible

Node:

        elem.nodeType === 1

null:

        variable === null

null or undefined:

        variable == null

**undefined:**

Global Variables:

        typeof variable === "undefined"

Local Variables:

        variable === undefined

Properties:

        object.prop === undefined
        object.hasOwnProperty(prop)

----
### Variable Declaration

**NO**

    var a = 10;
    var b = true;
    var c = 'string';

**YES**

    var a = 10,
        b = true,
        c = 'string';

----
### Default Constructors

**NO**

    var o = new Object(),
        a = new Array(),
        n = new Number(1),
        s = new String('1'),
        b = new Boolean(true);
**YES**

    var o = {},
        a = [],
        n = 1,
        s = '1',
        b = true;

----
### if

    // When only evaluating that an array has length,
    // instead of this:
    if (array.length > 0) ...

    // ...evaluate truthiness, like this:
    if (array.length) ...


    // When only evaluating that an array is empty,
    // instead of this:
    if (array.length === 0) ...

    // ...evaluate truthiness, like this:
    if (!array.length) ...


    // When only evaluating that a string is not empty,
    // instead of this:
    if (string !== "") ...

    // ...evaluate truthiness, like this:
    if (string) ...


    // When only evaluating that a string _is_ empty,
    // instead of this:
    if (string === "") ...

    // ...evaluate falsy-ness, like this:
    if (!string) ...


    // When only evaluating that a reference is true,
    // instead of this:
    if (foo === true) ...

    // ...evaluate like you mean it, take advantage of built in capabilities:
    if (foo) ...


    // When evaluating that a reference is false,
    // instead of this:
    if (foo === false) ...

    // ...use negation to coerce a true evaluation
    if (!foo) ...

    // ...Be careful, this will also match: 0, "", null, undefined, NaN
    // If you _MUST_ test for a boolean false, then use
    if (foo === false) ...


    // When only evaluating a ref that might be null or undefined, but NOT false, "" or 0,
    // instead of this:
    if (foo === null || foo === undefined) ...

    // ...take advantage of == type coercion, like this:
    if (foo == null) ...

    // Remember, using == will match a `null` to BOTH `null` and `undefined`
    // but not `false`, "" or 0
    null == undefined

----
### Ternary

**NO**

    var stuff;
    if (foo === 'bar') {
        stuff = value1;
    } else {
        stuff = value2;
    }
**YES**

     var stuff = (foo === 'bar') ? value1 : value2;

Use braces:

**NO**

    var stuff = foo === 'bar' ? value1 : value2;
**YES**

    var stuff = (foo === 'bar') ? value1 : value2;
But only working with simple types: *Numbers*, *Strings* or ***Variables***

**NO**

    var stuff = foo === 'bar' ? func1() : func2();

and working with Boolean

**NO**

    var stuff = foo === 'bar' ? true : false;

**YES**

    var stuff = foo === 'bar';

----
### for loop

**NO**

    var arr = [];
    for (var i = 0; i < arr.length; i++) {
        // statements
    }

**YES**

    var arr = [];
    for (var i = 0, n = arr.length; i < n; i++) {
        // statements
    }

or

    var arr = [],
        n = arr.length,
        i = 0;
    for (; i < n; i++) {
        // statements
    }

----
### Early returns

**NO**

    function returnLate(foo) {
        var ret;
        if (foo) {
            ret = 'foo';
        } else {
            ret = 'quux';
        }
        return ret;
    }

**YES**

    function returnEarly(foo) {
        if (foo) {
            return 'foo';
        }
        return 'quux';
    }

----
## Naming

**NO**

    //Current Question
    var cq;
    var currQuest;

**YES**

    var currentQuestion;

**"Camel Case": variables, functions, arrays**

    var thisIsVariable;
    function thisIsFunction();

**"Start Case": object**

    var Object = {};

**"Upper Case": pseudo constants**

    var MYCONSTANT;

**Plural form: arrays**

    var questions = [];

?????????????????

**jQuery objects**

    var $container = $('#container');