//objects and keys calling

import React from 'react'

export default function variables() {
  return (
    <div>variables</div>
  )
}

const person = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(person.name); // John
console.log(person['age']); // 30

//arrays and index calling
const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // Apple
console.log(fruits[2]); // Cherry   

//variables and usage
let x = 10;
const y = 20;
var z = 30; 
console.log(x); // 10
console.log(y); // 20

console.log(z); // 30
x = 15; // reassigning x
console.log(x); // 15
z = 35; // reassigning z
console.log(z); // 35

// Note: const variables cannot be reassigned
// Example of const variable
const pi = 3.14;
console.log(pi); // 3.14
// pi = 3.14159; // This will throw an error

// Demonstrating block scope with let and var
if (true) {
    let a = 50;
    var b = 60;
    console.log(a); // 50
    console.log(b); // 60
}
// console.log(a); // This will throw an error as 'a' is not defined outside the block
console.log(b); // 60, 'b' is accessible here because var is function-scoped

