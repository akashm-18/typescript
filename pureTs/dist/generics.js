"use strict";
const score = [];
const names = [];
// When the Return type or type of the input are not same 
// We can do this by below Idea
// But this not recommeded
function identifyOne(value) {
    return value;
}
// THis will also get input as number and return as the string 
// This is totally wrong
// We can also use Any But this is against the using TypeScript
function identifyTwo(value) {
    return value;
}
// Instead We can use the Generics
// While using this <type> this will automatically lock the Type of the Value
// <type> This Will lock the type by the first passing value
// When we pass value as the number . Then the Return type must be  the same type of the input type
// This is Good for our CodeBase
function identifyThree(value) {
    // return "string" // This will Give Error Because the type assigned is the number
    return value;
}
identifyThree(3);
// This is some weird syntnx
// If we do this // Then we need to do this like this 
identifyThree({
    brand: "king",
    type: 4
});
