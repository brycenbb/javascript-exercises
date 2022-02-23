const removeFromArray = function(input_array, ...toFind) {
    if(toFind === 'undefined' || toFind.length === 0) {
        return input_array;
    }
    
    for(i=0; i < toFind.length; i++) {
        if(input_array.includes(toFind[i])){
            var index = input_array.indexOf(toFind[i]);
            input_array.splice(index,1);
        }   
    }
    return input_array;
};

// Do not edit below this line
module.exports = removeFromArray;
