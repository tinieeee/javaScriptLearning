console.log("*******************1");
// Object is collection of properties
// you can define object like this

let person = {
    firstName: "Tim",
    lastName: "Joe",
    age: 24,
    // declare anonymous function to have the fullname
    fullName: function()
    {
        return this.firstName+" "+this.lastName;
    }
    // arrow function:
    // fullName: ()=>
    // {
    //     console.log(this.firstName+" "+this.lastName);
    // }

}
// Access the last name of the person
console.log(person.lastName);
// To display all properties of that object
console.log(person);

console.log("*******************2");
// Another way to access the properties is in Array notation you need to define what kind of data type it is to its at string so add '' when you declare the property name last name
console.log(person['lastName']);

console.log("*******************3");
// Change the property value
person.firstName = 'Tim Dane'
console.log(person.firstName);

console.log("*******************4");
// Add new property
person.gender = 'Male';
console.log(person);

console.log("*******************5");
// Delete any property
delete person.gender;
console.log(person);

console.log("*******************6");
// Check if the property exist in the object
// Check if gender exist in the person object just use the in keyword
console.log('gender' in person);

console.log("*******************7");
// display all the properties in the person object
// Do for loop

for(let key in person)
{
    console.log(person[key]);
}

// key variable is the properties in the person object
// this loop iterates on each key (properties in the person object) it will continue untill all the keys in the object is done

console.log("*******************8");
// display all the properties in the person object including the property name
// Do for loop

for(let key in person)
{
    console.log(key + ': ' + person[key]);
}

console.log("*******************9");
// In here we will try to display the anonymous finction property we created in perosn object
console.log(person.fullName());
// You will see in the results there is undefined after the fullName is displayed if you want to remove undefined you need to use return instead of console.log
// You will also notice in previous tasks the anonymous function is displayed as [Function:fullName] will work on this one on the future this seems to be advance
