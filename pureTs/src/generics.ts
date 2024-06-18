const score : Array<number> = []
const names : Array<string> = []

// When the Return type or type of the input are not same 
// We can do this by below Idea
// But this not recommeded
function identifyOne (value : number | string) : number | string { // This is not Good Pratice
    return value
}

// THis will also get input as number and return as the string 
// This is totally wrong
// We can also use Any But this is against the using TypeScript
function identifyTwo (value : any) : any {
    return value
}

// Instead We can use the Generics
// While using this <type> this will automatically lock the Type of the Value
// <type> This Will lock the type by the first passing value
// When we pass value as the number . Then the Return type must be  the same type of the input type
// This is Good for our CodeBase
function identifyThree<Type>(value : Type) : Type {
    // return "string" // This will Give Error Because the type assigned is the number
    return value
    // console.log(value.length) // We cant do this because we dont is this is array or not // Only array has the length
}

function identifyFour<Type>(value : Type[]) : Type[] {
    console.log(value.length) // Now we can use the length method Because we getting as the Array
    return value
}

identifyFour([2,3,4])

// We can use generics where we dont know about the type of the input 
// But We need the function to return the value as the same type of the input parameters

identifyThree(3)
identifyThree("done")
identifyThree(true)

interface Bottle {
    brand : string,
    type : number
}

// We can also use our datatype as the generics
// If we are using our datatype , Then use this syntnx
// This is some weird syntnx
// If we do this // Then we need to do this like this 
identifyThree<Bottle> ({
    brand : "king" ,
    type : 4
})


function getSearchProducts<T>(products : T[]) : T {
    // return 3 // Here We get Error . Because we need to return the Array . But when we wants to return the single Array Element
    // We can use the below method
    return products[3] // We need to return array But using the return type of T[]
    // But when we need to return sigle element in the array // We can use this with T (return type)
}


// Same as the Normal function // But written in the Arrow function 
const searchOnlineProducts = <T> (onlineProducts : Array<T>) : T => {
    // Do some db works
    const index = 3
    return onlineProducts[index]
}



function anotherFunction<T,U extends string>(valOne : T , valTwo : U) : object {
    return {
        valOne ,
        valTwo
    }
}

// THis is Fine // When not using the extends ..
// anotherFunction(3,3)
// When using the extends keyword we need to look the parameters
// Here we extends as the string // So we need 2nd parameter as a string
anotherFunction(3,"st") 

interface Database {
    connection : string,
    username : string ,
    password : string
}

// We can also this like 
function connectDb<T , U extends Database> (valOne : T , user : U) : object {
    return {
        valOne ,
        user
    }
}

connectDb(4 , { connection : "mongostring" , username : "akash" , password : "akash@123" })


// Generics Classes

interface Quiz {
    name : string,
    type : string
}

interface Course {
    name : string ,
    author : string ,
    subject : string
}

// Here we can use the generics classes because we have two interface we can add quiz or course
// So we need to check which is the type . You can watch in the code 
// Where we are declaring the cart with the array

class Sellable<T> {
    public cart : T[] = []

    addToCart(product : T) {
        this.cart.push(product)
    }
}