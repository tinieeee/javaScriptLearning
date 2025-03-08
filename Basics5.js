// After making the class public add 'require' this to call the class from the other file
// require means what class you want
const personDetails = require('./classesInJavaScript')


console.log("*******************1");
// Declaring string
let day = "tuesday ";
// By default javascript can identify its type by reading its value
// String value can be written in single or double quote doesnt matter

// get the length of the string
console.log(day.length);
// result is 8 including the space after

console.log("*******************2");
// Get the substring of it
let subString = day.slice(0,4);
console.log(subString);

console.log("*******************3");
// access any Character in the string
console.log(day[1]);

console.log("*******************4");
// Break the string into two different string ("tues" "day s")
let splitDay = day.split("s");
// this will be stored in an array as [tues, day s]
// split will separate the 1 word into 2 from the character s
console.log(splitDay[1]);
// Display only day r

console.log("*******************5");
// Trim the whitespace before and after
console.log(splitDay[1].length);
console.log(splitDay[1].trim().length);

console.log("*******************6");
// If you want to access any values from your browsers by default values will be retrieved as strings for example below you got date

let date = '23'
let nextDate = '27'
// get how many day difference from date and nextDate
// we cannot subtract strings so what you need to do is to use the parseInt method to convert your string into a number
let dateDiff = parseInt(nextDate) - parseInt(date);
// the result is now in number format
console.log(dateDiff);
console.log(typeof(dateDiff));

console.log("*******************7");
// to convert back to string use
dateDiff = dateDiff.toString();
console.log(dateDiff);
console.log(typeof(dateDiff));

console.log("*******************8");
// concatinate 2 strings
let firstName = 'Willy';
let lastName = 'Wonka';
let fullName = firstName + " " + lastName;
console.log(fullName+" is my full name");
let newQuote = day+"is Funday so have a great day today"
console.log(newQuote);

console.log("*******************9");
// To know where exactly the character is present
let val = newQuote.indexOf("day");
// answer is 4 since in tuesday is Funday - day is in 4th place
console.log(val);

console.log("*******************10");
// but there is another day which is in funday
val = newQuote.indexOf("day",5);
// by adding 5 it means we are starting on the 5th index which is letter a and after that it will search for "day"
console.log(val);

console.log("*******************11");
// This time I wanted to find how many times day has reoccured
let occurence = newQuote.indexOf("day");
let count = 0;
while(occurence !== -1)
{   
    count++
    occurence = newQuote.indexOf("day", occurence+1)
    // this means that if you already found the day value uulitin niya ulit maghanap after the previous one
}
// !== -1 means that it does not equal to index not found, 1 means index is found
console.log(count);

console.log("*******************12");
// You want to access the class from classesInJavaScript.js file from this file
// What you need to do is export first the class from classesInJavaScript.js file and make the class visible to public so anyone can import it.
// You can do that by adding module.exports = class personDetails in classesInJavaScript.js file
// After doing that in this file to call that class you need to import that class by adding this at the top the 'require'
// After adding the require at the top you can still create an object for that class
let person = new personDetails('Chris','Edward')
console.log(person.fullName());


