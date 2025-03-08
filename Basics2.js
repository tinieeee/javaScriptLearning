// If loop
const flag = true;

if(!flag){
    console.log("Condition Satisfied");
}
else{
    console.log("Condition Not Satisfied");
}
console.log("*******************1");

// // While loop - if the experession is true this loop will keep on executing until this condition becomes false
// while(true){
// console.log("I am inside loop");
// //  this will neve stop
// }

console.log("*******************2");
// Increment i value from 1 to 10
let i = 0;
while(i<10){
i++
// i++ means i value will increment by 1 number everytime (same thing as i =i+1 i++ is shortcut)
console.log(i);
}

console.log("*******************3");

// increment i value by 2
let a = 0;
while(a < 10){
    a += 2
    // a+2 means i value will increment by 2 number everytime
    console.log(a);
}

console.log("*******************4");

// Do While loop - difference to while is 1 round of loop will run before it checks condition
let z = 0;
do{
z++
}
while(z > 10);
console.log(z);
// in the results you will only see 1 the do statement run but while did not run


console.log("*******************5");

// for loop
for(let k = 5; k<=10; k++){
    // let k=5 - initialize the variable to 5
    // k<=10 - if 0 <=10 condition satisfied
    // k++ - increment number to 1 until the condition is not satisfied
    //  to sum it up it starts as 5 and it will increase 1 until the condition becomes false which is more than 10
    console.log(k);
}

console.log("*************************************6");
// get the numbers which are common multiples of 2 and 5
// from 1 to 10 give me common multiple values of 2 and 5
// If conditions and for loops together
for(let y = 1; y<=10; y++){
    if(y%2 == 0 && y%5 == 0) {
        console.log(y);
    }
        // meaning of 2 and 3 equals are almost the same they are comparing the only difference is 2 equals Checks only the value, not the type. Triple equals Checks both value and type.
        // % means percentile the remainder is 0
     
}

console.log("*************************************7");
// get the numbers which are common multiples of 2 OR 5
// from 1 to 10 give me common multiple values of 2 OR 5
// If conditions and for loops together
for(let o = 1; o<=10; o++){
    if(o%2 === 0 || o%5 === 0) {
        console.log(o);
    }
     
}

console.log("*************************************8");
// get the numbers which are common multiples of 2 and 5
// from 1 to 100 give me common multiple values of 2 and 5
// but I want to display only the first 3 numbers
// Nested If conditions and for loops together
let count = 0; // To keep track of how many numbers we've found
for(let o = 1; o<=100; o++){
    if(o%2 === 0 && o%5 === 0) {
        count++
        // create another variable p will start from 0 
        // count++ means If the condition is met count will become increment to one
        console.log(o);
        if(count === 3)
            break;
        // if value of count becomes 3 (since nag limit lang tayo na ang gusto natin idisplay is max of 3 digits only it should stop at 3)
        // if you only have one statement for if no need to add curly braces
        
    }
}