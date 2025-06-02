//DataTypes

//STRING

let firstName = "ayomidemi";
const upper = firstName.toUpperCase();
console.log(upper.toLowerCase());

let message = "Welcome";
let greeting = `Hello, ${firstName}`;
// backtick is used when u want your value to be dynamic
console.log(greeting);
let change = firstName[1].toUpperCase();

console.log(change);
// string method

let myAge = 8;
let secondAge = 12;
let real = myAge.toString() + secondAge.toString();
console.log(real);

let fruit = "pineapple";
console.log(fruit.lastIndexOf("p"));

console.log(fruit.charAt(2));

let food = "adele omotolani";
let slicedFood = food.split(" ");
console.log(slicedFood);
let newSlicedFood = slicedFood[0].toUpperCase();
console.log(newSlicedFood);

// NUMBERS
let school = [12345];
let newSchool = school.toString();
console.log(newSchool);

let code = "9";
let newCode = code.padStart(4, 0);
console.log(newCode);

let noHouse = 45.89;
let newnoHouse = noHouse.toPrecision(2);
console.log(newnoHouse);

let noAddress = 45.123959;
let newnoAddress = noAddress.toFixed(4);
console.log(newnoAddress);

let nonumber = 45.89;
let newnonumber = nonumber.toExponential(4);
console.log(newnonumber);


// console.log(Math.round(345.87))
// console.log(Math.floor(66.31));
// console.log(Math.ceil(68.71));
// console.log(Math.pow(6,3));
// console.log(Math.sqrt(49));
// console.log(Math.abs(-678));

// Array Methods
// Iteration method:
// For Each()
// map()
// Filter()
// Find()
// some()
// findIndex()


// Transformation Methods:use to transforms arrays
// .push():Add one or more element to the end of an array
// . pop():Removes the last element in an array
// .unshift():Add one or more element to the beginning of an array
// .shift():Removes the beginning element in an array
// .splice():it  remove an element at a specific index and replce it with an element if neccessary and 
// also delete an element  at a specific index counting from the replaced element.

// .concat():
// .length():
// .indexOf()
// .include()
// .slice():returns a portion of an array.it takes two argument i.e 
// the start index and the end index.The end index is not always included.
//  if u did not specify an end index it will slice to the end of an array



const things = ["bag","table","chair","biro","book"]
things.push("pencil");
things.pop();
things.unshift("laptop");
things.shift();
things.splice(2,2, "basket")

console.log(things)

const pro = ["Tolani","Tayo","Anu","Ife","bolu","olamide"]
let newPro = pro.slice(2,3);
console.log(newPro)