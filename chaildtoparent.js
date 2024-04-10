// Parent function
function parentFunction(callback) {
  console.log("Parent function is executing...");
  // Execute the callback function passed as an argument
  callback();
}

// Child function
function childFunction() {
  console.log("Child function is executing...");
}

// Call the parent function and pass the child function as a callback
parentFunction(childFunction);
