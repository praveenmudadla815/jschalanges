const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = (str) => str.filter((num) => num % 2 === 0);

console.log(evenNumbers(numbers));

// ______________using reduce method for even_____________

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const even = (str) =>
  str.reduce((acc, num) => {
    return num % 2 === 0 ? [...acc, num] : acc;
  }, []);
console.log(even(numbers));

// /________________________________odd numbers________________________

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumbers = (str) => str.filter((num) => num % 2 !== 0);

console.log(oddNumbers(numbers));

// __________________odd using reduce___________________

const numbers = [1, 2, [3, 4, 5], 6, 7, [8, 9, 10]];

const flatten = (str) => str.flat(Infinity);
console.log(flatten(numbers));

const oddNumbers = flatten(numbers).reduce((acc, num) => {
  return num % 2 !== 0 ? [...acc, num] : acc;
}, []);

console.log(oddNumbers);

// _____________________prime Number _______________

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};
console.log(isPrime);

const findPrimeNumber = numbers.reduce((acc, num) => {
  return isPrime(num) ? [...acc, num] : acc;
}, []);

console.log(findPrimeNumber);
