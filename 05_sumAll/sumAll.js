const sumAll = function(num1,num2) {
    //checking input are numbers and nonnegative
    if(!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0 ) {
        return "ERROR";
    }
    var total = 0;
    for(i = Math.min(num1,num2); i<Math.max(num1,num2)+1; i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
