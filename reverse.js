// _______________________reverseMethod using reduce___________________________

const inputString = "Hello, World!";

const split = (str) => str.split("");
 console.log(split(inputString));   first string convert into array

const reversed = split(inputString).reduce(
  (reverse, char) => char + reverse,
  ""
);

console.log(reversed);
// _____________________using split reverse join_________________
const inputString = "Hello, World!";

const reversed = (str) => str.split("").reverse("").join("");

console.log(reversed(inputString));

// _____________________reverse a string without using the split() method._________________________

const inputString = "Hello, World!";

const withoutUsing = (str) =>
  (str = Array.from(
    { length: str.length },
    (_, i) => str[str.length - i - 1]
  ).join(""));
const reversed = withoutUsing(inputString);
console.log(reversed);

// ___________const inputString = "Hello, World!"; this the input _____i want out put "olleH, !dlroW" ______________
const inputString = "Hello, World!";

const reversed = inputString.replace(/\w+/g, function (str) {
  return str.split("").reduce((reverse, char) => char + reverse, "");
});
console.log(reversed);

// ______________________________using Array.form and reduce_________________
const test = "Hello World!";

const reversed = test.replace(/\w+/g, function (word) {
  return Array.from(word).reduce(
    (reversedWord, char) => char + reversedWord,
    ""
  );
});

console.log(reversed);

// _____________________use split(), reverse(), and join() methods to reverse each word in the string.___________

const test = "Hello World!";

const reversed = test.replace(/\w+/g, function (str) {
  return str.split("").reverse("").join("");
});

console.log(reversed);

// _________________const a = ['praveen', 'pavan', 'hari'];_________________

const a = ["praveen", "pavan", "hari"];

const reversed = a.reverse();
console.log(reversed);

// _________________const a = ['praveen', 'pavan', 'hari'];___ output Output: ['neevarp', 'navap', 'irah']__________

const a = ["praveen", "pavan", "hari"];

const reverse = a.map((str) => str.split("").reverse("").join(""));

console.log(reverse);
