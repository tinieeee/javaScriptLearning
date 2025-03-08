console.log("Hello World");

// Declaring variables
let a = 4; 
// In JavaScript no need to declare the data type it is automatically detected if you hover a you will see it is number
console.log(a);
// Use typeof if you wanted to know the data type of the variable
console.log(typeof(a));

// in JavaScript number there are no variations such as integer, float (decimal values) - only known as number for example:
let b = 241.44;
console.log(typeof(b));

// Data Type String
var c = "This is string";
console.log(typeof(c));

// Data Type Boolean
let required = true;
console.log(typeof(required));
// If you want to make it false just add !(not operator) before variable name. This is only applicable for boolean
console.log(!required);

// adding or subtracting
// in here you can notice that we already have var c above and we are allowed to us use it again here this is working because this is redeclaring
var c = b + a; 
console.log(c);

// Data Type Undefined
let d;
console.log(typeof(d));

// Data Type Null (I used e===null instead of typeof because in js it returns as object this is a well known quirk in JS)
let e = null;
console.log(e === null);

// Reassigning values we are going to use let (in LET reassigning is allowed please see example below)
//Note: previously we already have letc = 100; and we added new variable letc = "string"; it will not work because in LET we cannot redeclare.
let f = "Hello I am let f";
console.log(f);

f = a+b;
console.log(f);

