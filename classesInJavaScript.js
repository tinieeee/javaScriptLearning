// module.exports here means that the class is visible to public so anyone can import it from another file for example what i did in Basics5.js Im trying to call this class
module.exports = class personDetails {
    
        // If defined here these are called Class variables/properties which do not change based on object you change
        age = 25
        // location = "Canada"
        // if class has multiple properties there is another way by using getter method
        // getter method is highly suggestible to use
        get location()
        {
            return "Canada"
        }
        // If you add a get before the method name that is treated as a property

        // Have an constructor on your class
        // Constructor is a method which executes by default when you create object of the class (which is person object below)
        // firstName and lastName is called instance variables
        // if you declare any properties in a constructor, these are like instance variables
        constructor(firstName,lastName)
        {
            // In the object person below there is Tim(firstName) and Joseph(lastName) the scope of these values are only inside the constructor method
            // to get this scope outside lets create a new property for this class
            this.firstName = firstName
            // this.firstName belongs to the current class object personDetails while the constructor(firstName) belongs to the new object person
            // this.firstName is accessible to the entire class
            this.lastName = lastName

        }
        // Concatinate the first and last names in from constructor class
        // this is called methods
        // this method is dependable on the values/parameters declared in the new object person
        fullName()
        {   
            return this.firstName +" "+ this.lastName

        }

    
} 
// if you want to access any property of a Class you have to create object of the class
// by below you can access the properties of a class
// Make sure to comment this section below bago mo irun ung nasa Basics5.js na kinacall nya si Class from this file because you are ending up creating multiple objects

// let person = new personDetails("Tim","Joseph")
// console.log(person.age);
// console.log(person.location);
// console.log(person.fullName());
// console.log(person.firstName);
