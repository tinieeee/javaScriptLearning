console.log("*******************1");
// Sorting Arrays with Strings
let fruits = ["Banana", "Mango", "Pomegranate", "Apple"];
// Sorting in ascending order
console.log(fruits.sort());
// Sorting in descending order
console.log(fruits.reverse());
// sort method is only working for strings


console.log("*******************2");
// Sorting Numbers
// First way to sort

let numbers = [2, 5, 4, 10, 9, 27, 22.5, 1];
// first way to sort it
numbers = numbers.sort(function(a,b){
    return a-b
})
console.log(numbers);

console.log("*******************3");

// second way to sort it is using the fat arrow operator which also means function in shorter way
console.log(numbers.sort((a,b)=>a-b));
// The a,b are two numbers being compared from the numbers array.  a-b determines their order If a is smaller than b, it stays before b (this sorts in ascending order). If a is greater than b, they swap positions.
// it recursively test for each and every element on all combination comparing who has the smallest value
// We are using the bubble sort here
// This will sort in ascending order

console.log(numbers.sort((a,b)=>b-a));
// This will sort in descending order (b-a)
// If b is greater than a, it stays before a (this sorts in descending order). If a is greater than b, it swaps their positions.