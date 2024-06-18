// Tuple is simply an array . With some retrictions on the Array
// It gives as the order to work on the Arrays 

const tUser : [number , string] = [1,"Akash"]
// tUser = [2,"As"]  Gives Error Because we cant change the whole tUser in const .

let tupleUser : [number , string] = [1,"Akash"] // In the Order // Correct
// tupleUser = ["number" , 3]  // Error Not in Order

type User = [number , string]

const newUser : User = [4 , "newUser"] // Good 

// Only Mistake in typeScript Tuples
// We can change the elements in the tuples
// If we give order // It means only two elements would comes
// But when we use push method in the tuples
// It doesnot give any Error
newUser.push(3) // No Error // Mistake in the Tuples