
# Xyleme Code Convention

-------

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

**NO**

	for (i = 0, n = arr.length; i < n; i++)
	if (condition)
		//do smth
	else
		//do smth

**YES**

	for (i = 0, n = arr.length; i < n; i++) {
	if (condition) {
		//do smth
	} else {
		//do smth
	}
	}


**NO**

	if (condition)
	{
	//do smth
	}

**YES**

	if (condition) {
		//do smth
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
        object.hasOwnProperty( prop )
        "prop" in object

----
### Variable Declaration

**NO**

	var a = 10;
	var b = true;
	var c = 'string';

**YES**

	var a = 10,
	b = true,
	c = 'string'

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

**NO**

	 if (foo === true) {
		// do smth
	 }
**YES**

	if (foo) {
		//do smth
	}

----
### Ternary

**NO**

	var stuff;
	if (foo === 'bar') {
		stuff = 10
	} else {
		stuff = 0
	}
**YES**

	 var stuff = (foo === 'bar') ? 10 : 9;

Use braces:

**NO**

	var stuff = foo === 'bar' ? 10 : 9;
**YES**

	var stuff = (foo === 'bar') ? 10 : 9;
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

	var messages = [];
	for (var i = 0; i < messages.length; i++) {
		// do smth with messages[i]
	}

**YES**

	var messages = [];
	for (var i = 0, n = messages.length; i < n; i++) {
		// do smth with messages[i]
	}

or

	var messages = [],
		n = messages.length,
		i = 0;
	for (; i < n; i++) {
		// do smth with messages[i]
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

	var Object = {}

**"Upper Case": pseudo constants**

	var MYCONSTANT;

**Plural form: arrays**

	var questions = [];

?????????????????

**jQuery objects**

	var $container = $('#container');