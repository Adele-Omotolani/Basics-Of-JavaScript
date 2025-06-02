// chartAt()
// returns a specific characrter at a specific index
// bracket notation represent an array and used for inputting an idex nd it returns a specific character

//slice takes two argument
// the beginning index and the ending index and the ending index is not included.it return a portion of an array at a specific index


//to remove white spaces on input 

// the split convert it into an array using the separator method

// let userNames = "Omotolani"
// console.log(userNames.split(","))

//the backtick syntax is used for something to be dynamic unlike regular strings

// the isNaN()is showing that the value is not a number

// Math.round rounds to the nearest integer



// push adds values to the end of an array
// pop removes values to the end of an array
// unshift add values to the beginning of an array
// shift removes values to the begginning of an array

// splice replace an element at a specific index and also delete starting from the one replaced  while  slice takes two argument
//  the beginning index and the ending index and the ending index is not included.it return a portion of an array at a specific index

// map iterate on all element the alment together
// forEach iterate on each element

//object.keys returns all the keys in an object
//  object.freeze u can delte add or reassign
//  object.seal u can delte add but can reassign

//object.assign u can assign a new value to a key in an existing object and add it to an existing object


//Strings (5 questions)
//Convert this string to uppercase:
//let greeting = "hello world";
let greeting = "hello world"
console.log(greeting.toUpperCase())

//let text = "hello world";
//Extract "world" from this string using slice():
let text = "hello world";
let newText = text.slice(5);
console.log(newText)


//Replace all spaces with hyphens in this string:

//let sentence = "JavaScript is awesome";
let sentence = "JavaScript is awesome";
let newSentence = sentence.split(" ");
let finalSentence = newSentence.join("-");
console.log(finalSentence);



//Check if this string starts with "Mr":
//let name = "Mr. Smith";
let bossName = "Mr. Smith"
console.log(bossName.startsWith("Mr"))


//Split this string into an array of words:
//let phrase = "apple,banana,orange";
let phrase = "apple,banana,orange";
let newPhrase = phrase.split(",")
console.log(newPhrase)


//Numbers (5 questions)
//Convert this string to a number:
//let numStr = "42";
let numStr = "42";
console.log(parseInt(numStr))


//Round this number to 2 decimal places:
//let price = 19.9876;
let price = 19.9876;
console.log(price.toFixed(2))


//Generate a random number between 1 and 10:
let randomNumber = Math.random() *10
let newRandomNumber = Math.floor(randomNumber) + 1
console.log(newRandomNumber)


//Check if this value is NaN:
//let result = 0/0;
let result = 0 / 0;
console.log(isNaN(result))

//Convert this number to a hexadecimal string:
//let value = 255;
let value = 255;
let hexadecimal = value.toString(16);
console.log(hexadecimal);

//Arrays (5 questions)
//Add "grape" to the end of this array:
//let fruits = ["apple", "banana"];
let fruits = ["apple", "banana"];
fruits.push("grape");
console.log(fruits)


//Remove the first element from this array:
//let colors = ["red", "green", "blue"];
let colors = ["red", "green", "blue"];
colors.shift();
console.log(colors);


//Combine these two arrays:
//let arr1 = [1, 2];
//let arr2 = [3, 4];
let arr1 = [1, 2];
let arr2 = [3, 4];
console.log(arr1.concat(arr2))

//Reverse this array:
//let letters = ["a", "b", "c"];
let letters = ["a", "b", "c"];
console.log(letters.reverse())


//Check if "banana" exists in this array:
//let groceries = ["apple", "orange", "banana"];
let groceries = ["apple", "orange", "banana"];
console.log(groceries.includes("banana"))


//Objects (5 questions)
//Access the age property of this object:
//let person = { name: "John", age: 30 };
let person = { name: "John", age: 30 };
console.log(person.age);


//Add a new property to this object:
//let car = { make: "Toyota" };
// Add model: "Camry"
let car = { make: "Toyota" };
car.model = "Camry";
console.log(car); 


//Get all keys of this object:
//let student = { name: "Alice", grade: "A" };
let student = { name: "Alice", grade: "A" };
console.log(Object.keys(student));

//Delete the password property from this object:
//let user = { name: "Bob", password: "123" };
let user = { name: "Bob", password: "123" };
delete user.password

//Check if this object has an "email" property:
//let contact = { name: "Sarah", phone: "555-1234" };
let contact = { name: "Sarah", phone: "555-1234" };
let newcontact = Object.keys(contact)
console.log(newcontact.includes("email"));





