// Lab 5: JavaScript Basics
// Registration: 22/EG/CO/1735

// Sample code from PDF
let name = "Alice";
console.log("Hello, " + name);

function greet(user) {
    alert("Welcome, " + user);
}
greet("Bob");

// Activity 1: Add variables for age and major, then log them to console
let age = 22;
let major = "Computer Engineering";
console.log("Age: " + age);
console.log("Major: " + major);
console.log("Student: " + name + ", Age: " + age + ", Major: " + major);

// Activity 2: Create a function to calculate the sum of two numbers and display via alert
function calculateSum(num1, num2) {
    let sum = num1 + num2;
    alert("The sum of " + num1 + " and " + num2 + " is: " + sum);
    return sum;
}

// Test the sum function
calculateSum(15, 25);
calculateSum(100, 50);

// Activity 3: Use if-else - Check if a number (input via prompt) is even or odd
function checkEvenOdd() {
    let number = prompt("Enter a number to check if it's even or odd:");
    
    if (number === null || number === "") {
        alert("No number entered!");
        return;
    }
    
    number = Number(number);
    
    if (isNaN(number)) {
        alert("Please enter a valid number!");
        return;
    }
    
    if (number % 2 === 0) {
        alert(number + " is an EVEN number.");
        console.log(number + " is even");
    } else {
        alert(number + " is an ODD number.");
        console.log(number + " is odd");
    }
}

// Call the even/odd checker
checkEvenOdd();

// Activity 4: Loop through an array of fruits and log each one
let fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes", "Strawberry"];

console.log("List of fruits:");
for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit " + (i + 1) + ": " + fruits[i]);
}

// Alternative loop using forEach
console.log("Using forEach loop:");
fruits.forEach(function(fruit, index) {
    console.log("Fruit " + (index + 1) + ": " + fruit);
});

// Additional demonstration: Display all fruits in an alert
let fruitList = "Fruits in the array:\n";
for (let i = 0; i < fruits.length; i++) {
    fruitList += (i + 1) + ". " + fruits[i] + "\n";
}
alert(fruitList);

// Activity 5: Script moved to external file (script.js) - COMPLETED
console.log("Lab 5 completed successfully!");
console.log("Registration: 22/EG/CO/1735");
