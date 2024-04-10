// var num = 8;
// var num = 10;

// console.log(num);

//* answer = 10;*
// With the var keyword, you can declare multiple variables with the same name.
// The variable will then hold the latest value. You cannot do this with let or const since they're block-scoped
// ____________________2nd question____________________
// function sayHi() {
//   console.log(name);
//   console.log(age);
//   var name = "Ayush";
//   let age = 21;
// }

// sayHi();

// ans : undefined and ReferenceError

// function sayHi() {
//   var name = "Ayush";
//   let age = 21;
//   console.log(name);
//   console.log(age);
// }

// sayHi();

// ans: Ayush, 21;

// ___________Question 3___________

// function getAge() {
//   "use strict";
//   age = 21;
//   console.log(age);
// }

// getAge();
// ans: age is not defined

// "use strict", you can make sure that you don't accidentally declare global variables. We never declared the variable age, and since we use "use strict",
//  it will throw a reference error. If we didn't use "use strict", it would have worked

// ______________question 4____________

// let number = 0;
// console.log(number++);
// ans: 0;
// console.log(++number);
// ans: 1;

// console.log(number);
// ans: 0;

// but if i give combine ans : 0 2 2
// let number = 4;
// console.log(number++);
// console.log(++number);
// console.log(number);

// _____________question 5_______________

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(1, "2"));

// _________________question6________________;

// for (let i = 1; i < 5; i++) {
//   if (i === 4) continue;
//   console.log(i);
// }

// ans 1 2 3    The continue statement skips an iteration if a certain condition returns true.

// ________________question7___________________
// function sayHi() {
//   return (() => 0)();
// }

// console.log(typeof sayHi());

// _________________question8________________

// console.log(typeof typeof 1);   ans : string

// __________________question9____________________;
// var a = 10;
// var b = a;
// b = 20;

// console.log(a);  // 10
// console.log(b);   //20
// whenever you create a copy of a variable of primitive data type, the value is copied to a new memory
// location to which the new variable is pointing to. When you make a copy, it will be a real copy.
// __________________question10____________________;

// console.log("1" - -"1");
// 1;   // ans: 2

// console.log("1" + -"1");
// 2;

// ans: 1-1

// ___________________question10___________________;

// let lang = "javascript";
// (function () {
//   let lang = "java";
// })();
// console.log(lang); // Output: javascript (1)

// |||||||||||||||||||||||||||||
// (function () {
//   var lang2 = "java";
// })();
// console.log(lang2); // ReferenceError: lang2 is not defined (2)

// In the first part, you declare a variable lang using let and initialize it with the string 'javascript'. Then, inside an immediately-invoked function expression (IIFE), another variable lang is declared using let and initialized with the string 'java'.
//  Since the inner let lang is scoped to the IIFE, it doesn't affect the outer lang. Therefore,
//  when you log lang outside the IIFE, it still refers to the outer variable, and you get 'javascript' logged.

// In the second part, inside another IIFE, a variable lang2 is declared using var and initialized with the string
//  'java'. However, var has function scope, so lang2 is scoped to the IIFE and is not accessible outside of it.
//  Therefore, when you try to log lang2, you get a ReferenceError because lang2 is not defined in the outer scope

// ___________________question11___________

// (function () {
//   console.log(typeof this);
// }).call(10);

// object

// __________________question12________________;

// const obj = { a: "one", b: "two", a: "three" };
// console.log(obj);
// ans: { a: 'three', b: 'two' }
// Explanation If you have two keys with the same name, the key will be replaced.
// It will still be in its first position,
//  but with the last specified value.

// ________________question13_____________

// let c = { greeting: "Hey!" };
// let d;

// d = c;
// c.greeting = "Hello";
// console.log(d.greeting);

// ans: Hello

// In JavaScript, all objects interact by reference when setting them equal to each other.

// First, a variable c holds a value to an object. Later, we assign d with the same reference that c has to the object.
//  When you change one object, you change all of them.

// ______________question14___________

// let a = 3;
// let b = new Number(3);
// let c = 3;

// console.log(a == b);
// console.log(a === b);
// console.log(b === c);

// true false false
// Explanation new Number() is a built-in function constructor. Although it looks like a number, it's not really a number: it has a bunch of extra features and is an object.

// ________________question15__________

// function getAge(...args) {
//   console.log(typeof args);
// }

// getAge(21); //object

// _____________question16________
// let greeting;
// greetign = {}; // Typo!
// console.log(greetign); //ans:{}

// ____________question17___________

// const obj = { 1: "a", 2: "b", 3: "c" };
// const set = new Set([1, 2, 3, 4, 5]);

// console.log(obj.hasOwnProperty("1"));
// console.log(obj.hasOwnProperty(1));
// console.log(set.has("1"));
// console.log(set.has(1));
// ans:true
// true
// false
// true

// __________question18________________

const a = {};
const b = { key: "b" };
const c = { key: "c" };
const d = { key: "d" };

a[b] = 123;
a[c] = 456;
a[d] = 786;

console.log(a[b]);
// ans: 786

// ___________________question19_____________

const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers); //ans: [ 1, 2, 3, <7 empty items>, 11 ]

// When you set a value to an element in an array that exceeds the length of the array, JavaScript creates something called “empty slots”.
// These actually have the value of undefined,
//  but you will see something like:

// ___________question20_________;

const arr = [1, 2, 3].map((num) => {
  if (typeof num === "number") return;
  return num * 2;
});

console.log(arr); //[ undefined, undefined, undefined ]

// It checks if the type of num is 'number'.
// If num is not a number, it immediately returns undefined due to the return; statement.
// If num is a number, it does nothing (implicitly returning undefined because there's no explicit return value).
// So, effectively, this code will produce an array of undefined values with the same length as the original array [1, 2, 3].

// _____________question21___________

// var obj = { a: 1 };
// var secondObj = obj;
// secondObj.a = 2;

// console.log(obj);
// console.log(secondObj); //{ a: 2 } { a: 2 }

// first create an object obj with a property a set to 1. Then, you create a variable secondObj and assign it
//  the reference to the same object obj.Therefore, secondObj refers to the same object as obj.

// When you modify secondObj.a to 2, you are also modifying the same property a of the original object obj
// because both obj and secondObj point to the same object in memory.

// ______________question22__________

// var obj = { a: 1 };
// var secondObj = obj;
// secondObj = { a: 2 };

// console.log(obj); //{a:1}
// console.log(secondObj); //{a:2}
// If the object is reassigned with a new object then it is allocated to a new memory location,
//  i.e it will be a real copy (call by value).

// ______________________question23_______

// const arrTest = [10, 20, 30, 40, 50][(1, 3)];
// console.log(arrTest); // Output: 40

// The last element from the second array is used as the index to get the value from first array like arrTest[3].

// _________________question24___________

console.log([] + []); // Output: ""

// When you use the + operator between two arrays in JavaScript, it performs array-to-string conversion followed by string concatenation

console.log([1] + []); // Output: "1"
console.log([1] + "abc"); // Output: "1abc"
console.log([1, 2, 3] + [1, 3, 4]); // Output: "1,2,31,3,4"
const ans1 = NaN === NaN;
console.log(ans1); // Output: false

const ans2 = Object.is(NaN, NaN);
console.log(ans2); // Output: true

//The Object.is() method is a static method that compares two values for equality. Unlike the equality operator (===), Object.is() considers NaN values to be equal. So, when you use Object.is()
//  to compare NaN with itself, the result will be true.

// _______________question25______________;

// const arr99 = [1, 2, undefined, NaN, null, false, true, "", "abc", 3];
// console.log(arr99.filter(Boolean));
// 1;

// const arr88 = [1, 2, undefined, NaN, null, false, true, "", "abc", 3];
// console.log(arr88.filter(!Boolean)); //false is not a function

// __________________question26_____________
// const foo = () => console.log("First"); //first
// const bar = () => setTimeout(() => console.log("Second")); //third
// const baz = () => console.log("Third"); //second

// bar();
// foo();
// baz();
// ______________question28______________
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }

// _______________question29_________________

let obj = {
  x: 2,
  getX: function () {
    setTimeout(() => console.log("a"), 0);
    new Promise((res) => res(1)).then((v) => console.log(v));
    setTimeout(() => console.log("b"), 0);
  },
};

obj.getX();
