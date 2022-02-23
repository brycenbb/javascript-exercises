const repeatString = function(string, num) {
    if(num < 0) {
        return "ERROR"
    }
    var newStr = ""
    for(i=0; i < num; i++) {
        newStr = newStr+string;
    }
    return newStr;
};

// Do not edit below this line
module.exports = repeatString;
