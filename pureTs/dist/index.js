"use strict";
// EveryThing in the typescript class is marked as the public 
// If you need to make one private u need to use the private keyword
// By using the private keyword 
// class User {
//     public email : string
//     name : string
//     private city : string = "Tenkasi"   // We can give Default Values if the parameters are not come from the functions 
//     constructor(email : string , name : string) {
//         this.email = email
//         this.name = name
//     }
// }
// const akash = new User("Akash" , "akash.ec20")
// akash.city = "Tenkasi"    // Cant Reassign the value becuase of the Readonly keyword
// akash.city // Gives the Error Because We cant get the Private Member of the class outside of the class
class User {
    constructor(email, name, city) {
        this.email = email;
        this.name = name;
        this.city = city;
        this._courseCount = 1;
    }
    deleteToken() {
        console.log("Token Deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get getCourseCount() {
        return this._courseCount;
    }
    // We Doesnot Return Anything While Setting the Property
    // We cant use return on the set keyword method // THis might be the Interview Question
    set getCourseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than the 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    changeCourseCount() {
        // Here the _courseCount in the Parent class(User) is Private 
        // We cant access the _courseCount
        // If we want to access the property which inherits from the parent class
        // Then we need to mark this Property with the protected Access Modifiers in the Parent Class
        // But still It cant have the access outside the class
        // Only to the child class and class itself
        this._courseCount = 4;
    }
}
const firstUser = new User("akash.com", "Akash", "Tenkasi");
// firstUser.city  // Gives the Error // Because of the Private Modifiers used in the above
// firstUser.deleteToken()   // Cant Access the method
