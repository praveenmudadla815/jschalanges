// __________________facotrial_____________________

const n = 5;

const factorial = (n) => (n === 0 || n === 1 ? 1 : n * factorial(n - 1));

console.log(factorial(n));
