// union is used when we dont know which datatype is comes in future 
// Or ( we can say that it can have two datatypes )

let score : number | string = 33;
score = 44
score = "string"

// console.log(typeof 44)
// console.log(typeof "string")

type User = {
    name : string;
    id : number
}

type Admin = {
    username : string;
    id : number
}

let newSignIn : User | Admin = {
    username : "Akash",
    id : 123
}

newSignIn = {
    name : "Virat",
    id : 456
}

// newSignIn = {
//     account : "new",  // THis line gives as the error 
//     id : 33          // Because we only tell we need only two types (User and Admin)
// }