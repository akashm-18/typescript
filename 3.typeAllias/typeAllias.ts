type User = {
    name : string;
    email : string;
    isActive : boolean;
}

function createUser (user : User) : User {
    return {name : "Akash" , email : "akash.ec20" , isActive : false}
}

createUser({name : "Akash" , email : "akash.ec20" , isActive : false})


type Account = {
    readonly _id : string;
    name : string;
    email : string;
    isActive : boolean;
    cardDetails? : number;      // If we have cardDetails then takes the details 
}                                   // If we dont have any details then doesn't gives error

let myUser : Account = {
    _id : "1234",
    name : "Akash",
    email : "akash.ec20",
    isActive : false,
    cardDetails : 234,
}

myUser.name = "Virat"
// myUser._id = "34"   // Gives error because this is read-only property


type cardNumber = {
    cardnumber : string;
}

type cardDate = {
    carddate : string;
}

type cardDetails = cardNumber & cardDate & {
    cvv : number
}

const myCardDetails : cardDetails = {
    cardnumber : "133434",
    carddate : "2/24",
    cvv : 34
}