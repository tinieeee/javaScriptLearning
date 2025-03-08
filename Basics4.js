// Var can be declared in global level or function level only
// let's have a var in global level
var greet = "Evening"

console.log("*******************1");
// Block of code can be executed together by wrapping them in a module called function
// Functions
if(1==1)
    {
        var greet = "Afternoon"
        // since var greet is not inside a function then this is a global var at first it will be evening then it will be replaced to aftenoon
    }
function add(a,b)
{
return a + b
// this is var in function level
    var greet = "Morning"
}
let sum = add(2,3);
console.log(sum);
console.log(greet);
// add multiple numbers everytime

console.log("*******************2");
// Another Way to write functions in JavaScript
//  These function are called anonymous functions these functions do not have name - Function Expressions

let sumOfIntegers = function (c,d){
    return c+d
}
console.log(sumOfIntegers(2,3));
// Anonymous functions can only be assigned to variables in this example this is only function no name unlike in example 1

console.log("*******************3");
// Another way to right is 
let sumOfNumbers = (c,d) => c+d
console.log(sumOfNumbers(2,3));
// => also represents anonymous function
// looks more simpler

console.log("*******************4");
// This time lets have let as global variable
let time = "Early morning";
if(1==1)
    {
        let time = "Late Morning"
    console.log(time);
    // used the let variable inside the if or the block{}
    }
function subtract(a,b)
{
let time = "Sunrise";
console.log(time);
// used the let variable inside the function or the block{}
return a - b;

}
let total = subtract(2,3);
console.log(total);
console.log(time);
// used the global variable

