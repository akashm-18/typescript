// Interfaces just like the type and the classes but there is some differences in them

interface User {
    readonly dBId : number,
    email : string,
    userId : number,
    googleId?: string ,
    // startTrail : () => string,
    startTrail() : string ,  // Another way for function // Return type would be the string
    getCoupon(couponName : string , value : number) : number
}

// One thing is special in Interface is Reopening of the Interface
// In type allias we cant reopen the type and assign the new values
// But we can do it in the Interface

interface User {
    githubToken : string    // We can add more properties to the interface by doing this also
}

// Inheritane supports in the Interface
interface Admin extends User {     // It will inherit all properities of the User Interface
    role : "admin" | "learner"
}

const akash : Admin = {
    role : "admin",
    dBId : 10 ,
    email : "akash.ec20",
    userId : 18 ,
    githubToken : "github123",
    startTrail : () => {
        return "Trail Started"
    },
    getCoupon : (name : "Akash10" , off : 10) => { // We can use any name for refernece here But Order need to maintain
        return 10
    }
}


