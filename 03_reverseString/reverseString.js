const reverseString = function(string) {
    newStr = ""
    for(i=0; i< string.length; i++) {
        newStr+=string[string.length-1-i];
    }
    return newStr
};

// Do not edit below this line
module.exports = reverseString;
