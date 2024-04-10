// closure example

function x() {
  var a = 9;

  function y() {
    console.log(a);
  }
  y();
}
x(); //9

// ______________example2__________

function outerFunction() {
  var a = "praveen";

  function inner() {
    console.log(a);
  }
  inner();
}
outerFunction();

// closures can be used to create private variables:

function createCounter() {
  var count = 0;

  function increment() {
    count++;
    console.log(count);
  }
  return increment;
}

var counter = createCounter();

counter();
counter();
