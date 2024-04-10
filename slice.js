// const myArray = [1, 2, 3, 4, 5];

// console.log(myArray.slice(0, 4));
// console.log(myArray.slice(0, 3));
// console.log(myArray.slice(1, 4));

// const myArray = [1, 2, 3, 4, 5, 7, 8, 5, 4, 6, 3, 6, 4, 5, 6];
// console.log(myArray.slice(3, 7));

// const myArray = [1, 2, 3, 4, 5];

// const sliceof = myArray.slice(-1, -3);

// console.log(sliceof); //[]

// const myArray = [1, 2, 3, 4, 5];

// const sliceof = myArray.slice(-3, -1);

// console.log(sliceof);

// const myArray = [1, 2, 3, 4, 5];

// const sliceof = myArray.slice(-3);

// console.log(sliceof); //[ 3, 4, 5 ]

//splice
// const myArray = [1, 2, 3, 4, 5];

// console.log(myArray.splice(1, 3));
// console.log(myArray);

let fruits = ["apple", "banana", "cherry", "date"];

fruits.splice(1, 1, "grape");

console.log("Array after replacing element:", fruits); // Output: ["apple", "grape", "cherry", "date"]
