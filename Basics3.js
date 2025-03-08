// Arrays
// Create an array that stores 6 elements
// You have 6 subjects with 6 different scores
let score = [20,40,35,12,37,100];
console.log(score[2]);

console.log("*******************1");

// Change the value of the 3rd index
score[3] = 14;
console.log(score[3]);

console.log("*******************2");

// Know the length of the array
console.log(score.length);

console.log("*******************3");
// Add one more element in your array add 65 score
score.push(65);
console.log(score);

console.log("*******************4");

// Delete the element from the array
score.pop();
console.log(score);
// deletes the last element from the array

console.log("*******************5");

// Add element at the beginning of the array
score.unshift(22);
console.log(score);

console.log("*******************6");

// Break the Array in some subareas (Create subarray from the main array) 
// I just want to display 20,35,and 14
subScore = score.slice(2,5);
console.log(subScore);
//  you noticed that we used the ending index to be 5 if 4 kasi nilagay natin di nya maisasama ung nasa index 4 so need 5 to include index 4 but not index 5

console.log("*******************7");

// if you wanted to remove specific element/index in tha array
const index = score.indexOf(40);
console.log(index);
// need natin ideclare ung specific index nung element (if alam natin if anong element specifically) na ireremove natin
// indexOf means ibibgay nya yung index nung element na dineclare mo
// nag console.log lang ako dito to check na hindi -1 ung value and existing ung element na yun
if(index !== -1){
    // The index variable usually comes from a method like indexOf(), which returns -1 if the element is not found. This condition ensures that we only try to remove an item if it exists in the array.
    score.splice(index, 1);
    // removes it if the index of element 40 is found
    // splice(index, 1) removes 1 element from the array at the given index.
}
console.log(score);

console.log("*******************8");

// if you wanted to add element in a specific index in tha array you can use splice

score.splice(1, 0, "green");
// the meaning of 0 is do not remove anything from the array just add green element at index 1
console.log(score);

console.log("*******************9");

// or you can use spread operator if you don't want to modify the original array
const position = 4;
const newScore = [...score.slice(0,position), "red", ...score.slice(position)];
//  slice() method in JavaScript is used to extract a portion of an array or string without modifying the original.
// (0,position) 0 - start(where the extraction begins), position (index where the extraction stops)
console.log(newScore);

console.log("*******************10");
// to check if the element is present in the array
console.log(score.includes(120));
console.log(score.includes("green"));
console.log(score.includes(22));

console.log("*******************11");
// If you want to print all the elements in this array
for (let f = 0; f < score.length; f++){
    console.log(score[f]);

}

console.log("*******************12");
// Summ all the elements of the array
var sum = 0;
var price = [10,19.5,22, 36.12, 68];
// we just reused the code in number 11
for(let e = 0; e < price.length; e++){
 sum = sum + price[e];
//  meaning that at first sum = 0 if we add the first iteration(first element in the array) its 22 untill it reaches the end of the array
}
console.log(sum);

console.log("*******************13");
// reduce filter map
//  to reduce complexity of coding we will use same goal as number 12 but much more simple
let total = price.reduce((sum, indiPrice)=> sum+indiPrice,0)
// reduce method takes all values in an array and combines them into a single value.
// it takes 2 argument sum(where sum is 0 based on *****12 and is the starting value), indiPrice is the individual digit what you get from your array
// this means that in every iteration we will pull each and every value from an array and we will place that value in indiPrice variable for every iteration and you have an accumulator (=>sum+indiPrice)-
//- which sums up the value what you are taking
// We can do the same as number 12 without using the for loop
console.log(total);

console.log("*******************14");
var digits = [12,13,14,16]
// print all elements of the array that are even numbers
// create a new array with even numbers of digits array
var evenDigits = [];
for (let h = 0; h < digits.length; h++){
    if(digits[h] %2 === 0)
    {
        evenDigits.push(digits[h]);
    }  
}
console.log(evenDigits);

console.log("*******************15");
// Another way to write the code in 14 in simpler way
let newFilterEvenScores = digits.filter(value=>value%2 === 0)
// value is new variable where the first value of the array will be stored
// =>value%2 === 0 this is the condition to check that each value is even (if value is diveded into 2 wala dapat remainder)
console.log(newFilterEvenScores);

console.log("*******************16");
// Map array function
// Once you filter all your numbers to display only even you must multiply each value with 3
// use the newFilterevenscores from 15 since we already filtered it there.
let mappedArray = newFilterEvenScores.map(value=>value*3)
// value declare new variable everytime it iterates it will store to "value"
// value => value * 3: This means "take each number and multiply it by 3."
//example of what it does [12,14,16] => [36,42,48]
console.log(mappedArray);

console.log("*******************17");
// This time we wanted to sum the values from the resul in 16

let totalValueArray = mappedArray.reduce((sumMappedarray, indiValue)=> sumMappedarray+indiValue,0);
console.log(totalValueArray);

console.log("*******************18");
// Do a simple chaining same results as above where 15,16&17 results are combined

var digits2 = [12,13,14,16];
let sumValue = digits2.filter(value=>value%2 === 0).map(value=>value*3).reduce((sum, val)=> sum+val,0);
console.log(sumValue);

console.log("*******************19");
// Same process as 18 but this time we are not creating new array from the original one and the code is shorter by chaining up the filter, reduce, and map
var digits3 = [12,13,14,16];
digits3 = digits3.reduce((sum, value) => {
    return value % 2 === 0 ? sum + (value * 3) : sum;
}, 0);
console.log(digits3);
// sum → This keeps track of the running total
// value → This represents each element in the digits3 array as we loop through it.
// return value % 2 === 0 ? sum + (value * 3) : sum; This line checks if value is an even number (value % 2 === 0)
// If true → Multiply value by 3 and add it to sum. If false → Just return sum without adding anything.
// The ? : syntax is called the ternary operator, which is a shorthand for if-else equivalent to    if (value % 2 === 0) {sum = sum + (value * 3);}



