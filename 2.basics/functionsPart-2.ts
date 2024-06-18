function addNum (num : number) : number {
    return num + 2
    // return "Number Added"  // Because , the function need to return number not another type
}

let myValue = addNum(5)


const getNum = (num : number) : number => {
    return num + 2
}

getNum(2)


// const getValue = (myVal : number) : string => {   // Gives the error because the return type have different values
//     if (myVal > 5) {                                 // to resolve this we learn union after sometime .
//         return true
//     }
//     return "Less than 5"
// }

// getValue(6)


const heros = ["superman" , "spiderman"]

const res = heros.map((hero) : string => {
    return `Hero is ${hero}`
})

console.log(res)

const consoleError = (errMsg : string) : void => {
    console.log(errMsg)         // Return type is void because it doesnt return anything
}

const handleError = (errorMessage : string) : never => {
    throw new Error(errorMessage)   // Return type is never . Because , the value is never observed.
                                    // It means it only throws the error (or) terminates the program
}