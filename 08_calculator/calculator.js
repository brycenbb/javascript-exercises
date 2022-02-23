const add = function(num1, num2) {
  return num1 + num2;
	
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  var sum = 0;
	for(i=0; i < array.length;i++){
    sum += array[i];
  }
  return sum;
};

const multiply = function(array) {
  var sum = 1;
	for(i=0; i < array.length;i++){
    sum *= array[i];
  }
  return sum;
};

const power = function(num1, num2) {
  return num1 ** num2;
	
};

const factorial = function(num) {
  var factorial = 1;
  for(i=2; i <= num ; i++){
    factorial *= i;
  }
	return factorial;
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
