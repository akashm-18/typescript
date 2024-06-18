const superHeros : string[] = []

// const superPower : number [] = []
const superPower : Array<number> = []   // Alternate way for arrays with type 
                                    // All Two types are good . We can choose any type

type User = {
    name : string;
    isActive : boolean;
}

const allUsers : User[] = []

let firstUser = {
    name : "Akash",
    isActive : true
}

allUsers.push(firstUser)

superHeros.push("spider man")
superPower.push(2)


const stringArray : string[] = []
stringArray.push("Akash")

const numberArray : number[] = []
numberArray.push(1)

type Account = {
    name : string;
    accountActive : boolean;
}

const allAccounts : Account[] = []

let firstAccount = {
    name : "Akash",
    accountActive : false
}

allAccounts.push(firstAccount)

const mlModels : number[][] = [
    [255 , 255 , 255],
    // ["Akash"]   // Gives Error Because this Array only needs to contain Array of numbers
]


