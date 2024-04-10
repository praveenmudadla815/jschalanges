const numOfTerms = 20;

const fibonaccseris = (terms) => {
  let sequnce = [0, 1];
  if (terms === 1) return 0;
  if (terms === 2) return sequnce.join(", ");
  for (let i = 2; i < terms; i++) {
    const nextFibonaccseris = sequnce[i - 1] + sequnce[i - 2];
    sequnce.push(nextFibonaccseris);
  }
  return sequnce.join(", ");
};

console.log(fibonaccseris(numOfTerms));
// output 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181
