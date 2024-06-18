// By using the Enums we can Restrict the user with our Given Values

// By Putting the const we can reduce the Amount of code in the Javascript 
const enum UserSeat {
    AISLE = 10 ,  // Default value is 0  We can also change the value
    MIDDLE ,    // 1  // Next value increaments according to the previous one (+one)
    WINDOW ,    // 2
    FOURTH      // 3
}

const vkSeat = UserSeat.MIDDLE

const enum UserSeats {
    MIDDLE = "MIDDLE", // We can Use any Datatypes
    WINDOW = 2,
    FOURTH , // 3  // Any Datatypes
}

