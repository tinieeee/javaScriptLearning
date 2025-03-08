// Inheritance is where one class can inherit/acquire the properties, methods of another class
// The class which inherits the properties of other is known as subclass
// The class whose properties are inherited is known as superclass
// We are going to use again the class from classesInJavaScript.js file


// This time I want know to build an entity for pet
// pet can also have a name, age, location same as what we have from the class person
const personDetails = require('./classesInJavaScript')
class Pet extends personDetails
{
    // we just redeclare this one since we want to use different values to be returned
    get location()
    {
        return "Blue Cross"
    }
// subclass will have the same constructor as superclass
    constructor(firstName,lastName)
    {
        // call parent class constructor
        super(firstName,lastName)
    }

    //The full name method will be automatically available in the pet class also since it is inherited you don't need to declare it again
    // Main purpose of inheritance is to avoid duplication 
}

let petDetails = new Pet('Brownie', 'Iggies')
console.log("*******************1");
// As you can see fullName method is available even if we did not declare it since it has been inherited from the superclass
console.log(petDetails.fullName());
console.log("*******************2");
// As you can see location displayed is Blue Cross instead of Canada since we redeclare it. It is displaying the value we want to display from the Pet Class
console.log(petDetails.location);
