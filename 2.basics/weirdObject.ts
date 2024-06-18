function createUser ({name : string , age : number}) {}

createUser({name : "Akash" , age : 20})    // This is good

function createUsers ({name : string , age : number}) {}

createUsers({name : "Akash" , age : 30 , email : "akash.ec20"})   // Here this gives as error . Because we have more argument

function createLoginUser ({name : string , age : number}) {}

let user = {name : "Akash" , age : 20 , email : "akash.ec20"}   // We also pass the email as extra argument
                                    // But we didnt get the error
createLoginUser(user)          // Here , It doesnt gives the error . 
// THis is the weird behaviour of object in typescript . We will work on it later.