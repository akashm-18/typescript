function addNum(num) {
    return num + 2;
    // return "Number Added"  // Because , the function need to return number not another type
}
var myValue = addNum(5);
var getNum = function (num) {
    return num + 2;
};
getNum(2);
// const getValue = (myVal : number) : string => {   // Gives the error because the return type have different values
//     if (myVal > 5) {                                 // to resolve this we learn union after sometime .
//         return true
//     }
//     return "Less than 5"
// }
// getValue(6)
var heros = ["superman", "spiderman"];
var res = heros.map(function (hero) {
    return "Hero is ".concat(hero);
});
console.log(res);
