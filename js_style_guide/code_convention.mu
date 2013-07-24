
h1.Xyleme Code Convention

h3. Identation

*4 spaces.*

----
h3. Line width

*80 characters.*

----
h3. Semicolons

*ALWAYS!*

----
h3. Comments

*Talking*
{code}
    /*
    * some
    * multiline
    * comment
    */
{code}
*Commenting code* + *Simple single line*
{code}
    // some
    // multiline
    // comment
{code}

----
h3. Quotes

*JavaScript*
{code}
    '
{code}
*HTML/CSS*
{code}
    "
{code}
----
h3. Trailing whitespace

{code}
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

    function name() {
      var a = 1;

        // statements
    }
{code}
----
h3. Curly braces

Use them, always

*NO*
{code}
    for (i = 0, n = arr.length; i < n; i++)
        if (condition)
            //statements
        else
            //statements
{code}
*YES*
{code}
    for (i = 0, n = arr.length; i < n; i++) {
        if (condition) {
            //statements
        } else {
            //statements
        }
    }
{code}
Opening brace on the same line

*NO*
{code}
    if (condition)
    {
    //statements
    }
{code}
*YES*
{code}
    if (condition) {
        //statements
    }
{code}
----
h3. Equality

*Always*
{code}
    ===
{code}
*Only one case*
{code}
    //Dont
    if (a === undefined || a === null)
    // Use
    if (a == null)
{code}

----
h3. Type checking

String:
{code}
        typeof variable === "string"
{code}
Number:
{code}
        typeof variable === "number"
{code}
Boolean:
{code}
        typeof variable === "boolean"
{code}
Object:
{code}
        typeof variable === "object"
{code}
Array:
{code}
        Array.isArray( arrayLikeObject ) // wherever possible
        if (arrayLikeObject instanceof Array )
{code}
Node:
{code}
        elem.nodeType === 1
{code}
null:
{code}
        variable === null
{code}
null or undefined:
{code}
        variable == null
{code}
*undefined:*

Global Variables:
{code}
        typeof variable === "undefined"
{code}
Local Variables:
{code}
        variable === undefined
{code}
Properties:
{code}
        object.prop === undefined
        object.hasOwnProperty(prop)
{code}
----
h3. Variable Declaration

*NO*
{code}
    var a = 10;
    var b = true;
    var c = 'string';
{code}
*YES* *(at the top of the function)*
{code}
    var a = 10,
        b = true,
        c = 'string',
        d, e, f;
{code}
----
h3. Default Constructors

*NO*
{code}
    var o = new Object(),
        a = new Array(),
        n = new Number(1),
        s = new String('1'),
        b = new Boolean(true);
{code}
*YES*
{code}
    var o = {},
        a = [],
        n = 1,
        s = '1',
        b = true;
{code}
----
h3. if
{code}
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
{code}
----
h3. Ternary

*NO*
{code}
    var stuff;
    if (foo === 'bar') {
        stuff = value1;
    } else {
        stuff = value2;
    }
{code}
*YES*
{code}
     var stuff = (foo === 'bar') ? value1 : value2;
{code}
Use braces:

*NO*
{code}
    var stuff = foo === 'bar' ? value1 : value2;
{code}
*YES*
{code}
    var stuff = (foo === 'bar') ? value1 : value2;
{code}
But only working with simple types: *Numbers*, *Strings* or *Variables*

*NO*
{code}
    var stuff = foo === 'bar' ? func1() : func2();
{code}
and working with Boolean

*NO*
{code}
    var stuff = foo === 'bar' ? true : false;
{code}
*YES*
{code}
    var stuff = foo === 'bar';
{code}
----
h3. for loop

*NO*
{code}
    var arr = [];
    for (var i = 0; i < arr.length; i++) {
        // statements
    }
{code}
*YES*
{code}
    var arr = [];
    for (var i = 0, n = arr.length; i < n; i++) {
        // statements
    }
{code}
or
{code}
    var arr = [],
        n = arr.length,
        i = 0;
    for (; i < n; i++) {
        // statements
    }
{code}
or
{code}
    var arr = [],
        n, i;

    for (i = 0, n = arr.length; i < n; i++) {
        // statements
    }
{code}
----
h3. Early returns

*NO*
{code}
    function returnLate(foo) {
        var ret;
        if (foo) {
            ret = 'foo';
        } else {
            ret = 'quux';
        }
        return ret;
    }
{code}
*YES*
{code}
    function returnEarly(foo) {
        if (foo) {
            return 'foo';
        }
        return 'quux';
    }
{code}
----
h2. Naming

*NO*
{code}
    //Current Question
    var cq;
    var currQuest;
{code}
*YES*
{code}
    var currentQuestion;
{code}
*"Camel Case": variables, functions, arrays*
{code}
    var thisIsVariable;
    function thisIsFunction();
{code}
*"Start Case": object*
{code}
    var Object = {};
{code}
*"Upper Case" with underline: pseudo constants*
{code}
    var MY_CONSTANT;
{code}
*Plural form: arrays*
{code}
    var questions = [];
{code}

*jQuery objects: starts with $*
{code}
    var $container = $('#container');
{code}

h2. Possible Sublime Settings
{code}
    {
      "draw_white_space": "all",
      "trim_trailing_white_space_on_save": false,
      "word_wrap": true,
      "detect_identation": false,
      "disable_formatted_linebreak" : true,
      "rulers" : [80],
      "tab_size" : 4,
      "translate_tabs_to_spaces" : true,
      "trim_automatic_white_space" : true
    }
{code}