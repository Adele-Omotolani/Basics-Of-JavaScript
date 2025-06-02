//OBJECT
//It allows you to store collections of key value pairs.
const obj = {}
const datas = {
    user1 : "",
    num : 3
}
//Nested
const student = {
  name: "Tosin",
  grades: {
    English: "A1",
    Biology: "B3",
    Physic: "B2",
  },
  isActive : true
};
console.log(student.name)
//Prototype
const animal = {
    type : "unknown",
    sound : "none",
    makeSound () {
        console.log(this.sound)
    }
}
const dog = Object.create(animal)
dog.type = "dog";
dog.sound = "woof"

console.log(dog)

//Object.assign
//It combines multiple object into one

const defaultsettings = {
    theme : "light", fontsize: 16};
const userSettings = {fontsize : 18}
const finalSetting = Object.assign({},defaultsettings,userSettings)
console.log(finalSetting)

// const final = defaultsettings.theme.replace("light","dark")
// console.log(final)

// Object.fromentries
// It convert array of key and value to object

const ent = [["name","Tosin"],["age", 25]];
console.log(Object.fromEntries(ent))

//Spread Operator

const original = {A : 77, B : 66}
const finalResult = {...original, C : 55}
console.log(finalResult)

//Object.Keys:Returns an array of an object's keys (property names).
const user = { name: "Jane", age: 25 };
console.log(Object.keys(user));

//Object.Entries:Returns an array of key-value pairs (as arrays).
const user2 = { name: "Jane", age: 25 };
console.log(Object.entries(user2));

//Object.values:Returns an array of the values of an object.
const user3 = { name: "Jane", age: 25 };
console.log(Object.values(user3));

//Object.Freeze:Freezes the object: you cannot add, change, or delete properties.
const user4 = { name: "Jane" };
Object.freeze(user4);
user4.name = "John"; // Won't work
user4.age = 30; // Won't work
console.log(user4); 

//Object.Seal:Seals the object: you can change existing properties, but cannot add or delete properties.
const user5 = { name: "Jane" };
Object.seal(user5);
user5.name = "John";   // Works
user5.age = 30;        // Won't work
delete user.name;     // Won't work
console.log(user5);    // { name: "John" }

//How to delete in an object
const user6 = { name: "Jane", age: 25 };
delete user6.age;
console.log(user6);


