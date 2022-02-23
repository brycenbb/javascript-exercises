const palindromes = function (input) {
    var regex = /[^A-Za-z0-9]/g;
    input = input.replace(regex, '');
    var converted = input.toLowerCase();
    console.log(converted);
    for(i=0;i<converted.length/2;i++){
        if(converted[i]!=converted[converted.length-1-i]){
            return false;
        }
    }
    return true;

};

// Do not edit below this line
module.exports = palindromes;
