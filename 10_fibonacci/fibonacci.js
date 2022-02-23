const fibonacci = function(position) {
    var number = Number(position);
    if( number < 0) {
        return "OOPS";
    }
    if(number < 3) {
        return 1;
    }
    var lastnum = 1;
    var currentnum = 1;
    var temp;
    for(i=3; i <= number; i++) {
        temp = currentnum;
        currentnum += lastnum;
        lastnum = temp;
    }
    return currentnum;
};

// Do not edit below this line
module.exports = fibonacci;
