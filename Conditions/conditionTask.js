
//loan

let age = 65
let score = 700
let income =30000


if ((age >= 18 && age <= 65) && (score >= 700) && (income >= 30000)) {
  console.log("User Approved");
} else if (age < 18 || age > 65) {
  console.log("You must be between the age of 18 - 65");
} else if (score < 700) {
  console.log("Score too low");
} else if (income < 30000) {
  console.log(`income must be up to  $${income} per year`);
} else {
  console.log("User Rejected");
}

// Advanced Grading System

let grade =89
if (grade >= 95) {
  console.log("A+");
} else if (grade >= 90) {
  console.log("A");
} else if (grade >= 85 ) {
  console.log("B+");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70 ) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
}
else{
    console.log("F")
}


// . Shipping Cost Calculator

let weight = 1
let cost;
let expressShipping = true
if (weight <= 1) {
    cost = 5
 
} else if (weight <= 5) {
  cost = 10;
} else if (weight <= 10) {
  cost = 15;
} else if (weight > 10) {
  cost = 20;
}
if (expressShipping === true) {
  cost += 10;
} 

console.log( `weight:${weight}kg, shipping cost is $${cost}`)


// 4. Progressive Tax Calculator

let Income = 10
let taxRate;
let tax;
if(Income <= 10000){
    taxRate = 0;
    tax = 0
}
else if (Income <= 50000){
    taxRate = 10;
    tax = (Income - 10000) * 0.1
}
else if (Income <= 100000) {
    taxRate = 20;
    tax = (40000 * 0.1) + (Income - 50000) * 0.2;
}else{
    taxRate = 30;
    tax = (40000 * 0.1) + (50000 * 0.2) + (Income - 100000) * 0.3;
}

console.log(`since your income is $${Income},your tax rate is ${taxRate}% and your tax amount is $${tax}`);

// 5. User Role & Permission Checker


let userRole = "Admin"
if (userRole === "Admin") {
  console.log("Full Access");
} 
else if (userRole === "Editor") {
  console.log("Edit & View");
} 
else if (userRole === "Viewer") {
  console.log("View only");
} 
else if (userRole === "Guest") {
  console.log("Limited access");
}


// 6. BMI Classification


let BMI = 29

if (BMI >= 30) {
  console.log("obese");
} else if (BMI >= 25) {
  console.log("Overweight");
} else if (BMI >= 18.5) {
  console.log("Normal");
} else if (BMI < 18.5) {
  console.log("Underweight");
}

// 7. Membership-Based Discount


let members = "silver"
let discount= 0
let purchase = 120
 
if (members ===  "silver" && purchase > 100) {
    discount = purchase * 0.10
} else if (members === "Gold" && purchase > 50){
    discount = purchase * 0.20
}
let finalPrice = purchase - discount;
console.log(`member:${members}, Amount: $${purchase}, you have been given $${discount},and your final price is $${finalPrice}`);

//Password check

let password = "Tolani123$";
let capitalLetter = /[A-Z]/.test(password);
let number = /\d/.test(password);
let specialChar = /[!@#$%^&*()_+={};':"|,<>.?]/.test(password);

if (password.length >= 8 && capitalLetter && number && specialChar) {
  console.log("Password is strong!");
} else {
  console.log(
    "Password is weak. Please ensure it meets the following requirement:"
  );
  if (password.length < 8) console.log(" At least must be 8 characters long");
  if (!capitalLetter) console.log(" At least must have one uppercase letter");
  if (!number) console.log(" At least must have one number");
  if (!specialChar) console.log("At least must have one special character");
}

// 9. Tiered Electricity Bill


let unit = 299
let price;

 if(unit <= 100){
    price = 0.5 * unit
}

else if(unit <= 300 ){
    price = 100 * 0.5 + (unit - 100) * 0.75
}

 else {
    price = 100 * 0.5 + 200 * 0.75 + (unit - 300) * 1
}

console.log(`${unit} units,$${price}`)

// 10. Flight Booking System


let AvailableSeat = 100
let passport = "valid"
let suffFunds = 400

if(AvailableSeat <= 100 && passport=== "valid" && suffFunds >= 500){
    console.log("flight booked")
}else{
    console.log("flight declined")
    if (passport != "valid")console.log("passport not valid");
    if (AvailableSeat >100)console.log("no seat available");
    if (suffFunds< 500)console.log("insufficient funds")
}