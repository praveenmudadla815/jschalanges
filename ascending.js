// ________Write a function that takes an array of objects and a key,
//  and returns a new array sorted based on the values of that key in ascending order.________

const arrayOfObjects = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
];

const sorted = (array, key) => [...array].sort((a, b) => a[key] - b[key]);

const ascending = sorted(arrayOfObjects, "age");
console.log(ascending);

const arrayOfObjects = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
];

const sorted = (array, key) => [...array].sort((a, b) => b[key] - a[key]);

const descending = sorted(arrayOfObjects, "age");
console.log(descending); //this is descinding order
