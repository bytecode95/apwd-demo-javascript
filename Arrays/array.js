console.log("array page");

const name = "Kamal";
const name1 = "Sunil";
const name2 = "Jayantha";

const names = [true , name1, 55, {age:23, skin:"soft"}, [{},{}]];
const d = [];
const values = [2,6,4,8]
console.log(typeof(names));
console.log(typeof(values));
console.log(typeof(d));

console.log(names);
console.log(names[2]);
console.log(names[4]);

const cars = [];
cars[0] = "BMW"
cars[1] = "Toyota"
cars[2] = "Volvo"
cars[3] = "Ford"
console.log(cars)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
// array length

console.log(fruits.length);
console.log(names.length);
console.log(cars.length);

// methods in array

console.log("..............pop...............")
// pop - remove final element in an array
fruits.pop()
console.log(fruits);
console.log(fruits.length);


console.log("..............push...............")
//push - add value after the last index
fruits.push("Mango");
console.log(fruits);
console.log(fruits.length);

console.log("..............shift...............")
//shift - remove first value of the array
fruits.shift();
console.log(fruits);

console.log("..............unshift...............")
//unshift - add value to first index
fruits.unshift("banana");
console.log(fruits);