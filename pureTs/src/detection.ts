// Val is of any type so we give more or case to find this.
// But this is not recommemed
// Here number[] is not of type Array // This is of type object
console.log(typeof([1,2,3]))  // Object
// So in this we need to more cautious
function detectType(val : number | string | number[]) {
    if (typeof val === "string") {
        return val.toLowerCase()
    } 
    else if (typeof val === "number") {
        return 3
    }
    return [1,2]
}


// in operator in the type Narrowing

interface User {
    name : string,
    email : string
}

interface Admin  {
    name : string,
    email : string ,
    isAdmin : boolean
}

// Here we can check the account is Admin or not . By using the in operator
// By using the in operator we can check the isAdmin property is found or not in the account variable
function isAdminAccount (account : User | Admin) {
    if ("isAdmin" in account) {
        return account.isAdmin
    }
}


// instanceof keyword // Check the instance of the variable
// Instanceof keyword is only used where we use the new keyword
function logValue(x : Date | string) {
    if (x instanceof Date) {
        console.log(x) // Here x is Date
        console.log("This is the Date")
    }
    else {
        console.log(x) // Here x is string
        console.log("This is not Date")
    }
}

const newDate : Date = new Date()
logValue(newDate)  // Returns "This is the Date"


// type predicates

type Fish = { swim : () => void }
type Bird = { fly : () => void }

// By using this (: pet is Fish) we can return boolean value but with the variable (pet)
// In line 68 , We can get the pet as the Fish type Because of this statement(: pet is Fish)
function isFish (pet : Fish | Bird) : pet is Fish {
    return (pet as Fish).swim !== undefined // Returns true or false
}

function getFood(pet : Fish | Bird) : string {
    if (isFish(pet)) {
        pet // Pet is Fish | Bird // When we dont use this : pet is Fish (return type)
        return "Fish Food"
    }
    else {
        pet // Bird
        return "Bird Food"
    }
}


// Descriminated Union
// Typescript simply says us to use the kind property in the interface
// Then we can use union types some effectively

interface Circle {
    kind : "circle",
    radius : number
}

interface Square {
    kind : "square",
    side : number
}

interface Rectangle {
    kind : "rectangle",
    length : number,
    width : number
}

// We need to define type using the union
type Shape = Circle | Square | Rectangle

// Here we use the kind property with using the union . This is the only concept in the discriminated unions
function getTrueShape(shape : Shape) {
    if (shape.kind === "circle") {
        // Here we get the properties of the circle only
        return Math.PI * shape.radius ** 2
    }
    // Here we get the properties of the square only
    // return Math.PI * shape.side * 2
}

// In the type shape we only assign the square and the circle
// So when we add another type  to it .

function getArea(shape : Shape) {
    switch(shape.kind) {
        case "circle":
            return "This is circle"
        case "square":
            return "This is square"
        // Here the code is working fine // But when we add another to the type Shape 
        // We need to affer of it . So we need to use the never type
        // We need default case to remove that issue // Thats it all says
        case "rectangle": // I dont get any error // When i do this after adding the Rectangle in the type Shape
            return "This is Rectangle"
        default:
            // Here we get no error // But when we add another interface that not in the type shape
            // We get some error in down
            // So when we add more to the type shape // we need to handle that case 
            // Thats all its mean
            const _defaultForShape : never = shape // When i add case for the rectangle // then i dont get error
            return _defaultForShape
            // Here Never refers to we dont need to empty any case in any cost
    }
}