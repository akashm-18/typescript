function getDbId (id : string | number) {   // When we do like this then we need to check the type 
    if (typeof id === "string") {             //  before doing operations that belonging to specific datatype
        id.toUpperCase()                // Because , only the string has the operation of toUpperCase
    }
    else {
        id + 2
    }
}

// getDbId(false)  gives Error because the specified datatypes are (string and number)
getDbId("Akash")
getDbId(3494)

// Array
const data : number[] = [1,2,3]
const data2 : string[] = ["1","2","3"]
const data3 : (string | number)[] = [1,2,"3"]   // We can use as many we need

const data4 : (string | number | boolean) [] = [1,2,"3",false]

// Some Fun part 
let size : "xl" ;
// size = "xxl"    // We get Error Because , we assign it only as the "xl"

let seatAllotment : "first" | "middle" | "window"
seatAllotment = "window"
// seatAllotment = "Front"  // Gets error Because we only assigns with three values