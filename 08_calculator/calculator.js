const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce((previousValue, currentValue) =>  previousValue + currentValue, 0);
};

const multiply = function(arr) {
  return arr.reduce((previousValue, currentValue) =>  previousValue * currentValue);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
	let factorial = a;
  let result = factorial;
  if (a === 0) return 1;
  for (let i = 1; i < factorial; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
