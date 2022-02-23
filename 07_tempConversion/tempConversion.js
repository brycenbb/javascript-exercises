const ftoc = function(num) {
  var conversion = (num - 32) * (5/9);

  return Number(conversion.toFixed(1));
};

const ctof = function(num) {
  var conversion = (num * (9/5)) + 32;

  return Number(conversion.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
