function addNum (num : number) {
    console.log(num + 2)
}

function getUpperCase(val : string) {
    console.log(val.toUpperCase())
}

const signUp = (name : string , email : string , isPaid : boolean) => {}

const login = (email : string , isPaid : boolean = false) => {}

addNum(2)
getUpperCase("akash")
signUp("Akash" , "akash@gmail.com" , true)
login("akash@gmail.com")