function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return 'Error: Division by zero is not allowed.';
  }
}
  
  module.exports = {
    addition,
    subtraction,
    multiplication,
    division
  };