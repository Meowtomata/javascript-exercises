const add = function(...args) {
	return args.reduce((a,b) => {return a + b},0);
};

const subtract = function(...args) {
	return args.reduce((a,b) => {return -a - b},0);
};

const sum = function(args) {
	return args.reduce((a,b) => a + b, 0);
};

const multiply = function(args) {
  return args.reduce((a,b) => a * b, 1);
};

const power = function(a,b) {
  total = 1;
  for (let i = 0; i < b; i++) {
    total *= a;
  }
  return total;
};

const factorial = function(a) {
  if (a < 1) {
    return 1;
  } else {
    return a * factorial(a-1);
  }
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
