const createUser = ({name : string , isPaid : boolean}) => {

}

createUser({name : "Akash" , isPaid : false} )


function createAccount(email : string , isPaid : boolean) {}

createAccount("Akash" , true)

function create({email , isFree} : {email : string , isFree : boolean}) {
    console.log(email , isFree)
}

create({email : "akash@gmail.com" , isFree : true})

function createCourse () : {} {
    return {}
}

function createProgram () : { name : string , price : number } {
    return {name : "ReactJs" , price : 100}
}


export {}


