const caesar = function(phrase, offset) {
    // mod 122 for lowercase starts at 97, mod 90 for uppercase, starts at 65,
    // (97 + offset) mod 122 for lowercase and (65 + offset) mod 90 for uppercase, doesnt work for subtraction
    // (122 - offset) mod 122?
    // the above answer doesnt work, but i could use mod 25 on the offset to reduce the amount of changes needed.
    // as the total size of the alphabet is only 25.
    var change = Math.abs(offset) % 26;
    if(change === 0) return phrase;
    var positive = true;
    if(offset < 0) {
        change *= -1;
        positive = false;
    }


    for(i=0; i< phrase.length;i++){

        //If not alpha:
        if(!(/[A-Za-z]/).test(phrase[i])){
            continue;
        }
        //If uppercase:
        if((/[A-Z]/).test(phrase[i])){

            if(positive){

                if(phrase.charCodeAt(i) + change > 90) {

                    // phrase = phrase.replace(phrase[i],String.fromCharCode(phrase.charCodeAt(i) + change - 26));
                    phrase = phrase.substring(0,i) + String.fromCharCode(phrase.charCodeAt(i) + change - 26) + phrase.substring(i+1)

                }
                else{
                    // phrase = phrase.replace(phrase[i],String.fromCharCode(phrase.charCodeAt(i) + change));
                    phrase = phrase.substring(0,i) + String.fromCharCode(phrase.charCodeAt(i) + change) + phrase.substring(i+1)

                }
            }
            else{

                if(phrase.charCodeAt(i) + change < 65) {
                    // phrase = phrase.replace(phrase[i],String.fromCharCode(phrase.charCodeAt(i) + change + 26));
                    phrase = phrase.substring(0,i) + String.fromCharCode(phrase.charCodeAt(i) + change + 26) + phrase.substring(i+1)

                }
                else{
                    // phrase = phrase.replace(phrase[i],String.fromCharCode(phrase.charCodeAt(i) + change));
                    phrase = phrase.substring(0,i) + String.fromCharCode(phrase.charCodeAt(i) + change) + phrase.substring(i+1)

                }
            }
        }
        //Else is lowercase:
        else {
        

            if(positive){
                if(phrase.charCodeAt(i) + change > 122) {
                    // phrase = phrase.replace(phrase[i],String.fromCharCode(phrase.charCodeAt(i) + change - 26));
                    phrase = phrase.substring(0,i) + String.fromCharCode(phrase.charCodeAt(i) + change - 26) + phrase.substring(i+1)

                }
                else{
                    // phrase = phrase.replace(phrase[i],String.fromCharCode(phrase.charCodeAt(i) + change));
                    phrase = phrase.substring(0,i) + String.fromCharCode(phrase.charCodeAt(i) + change) + phrase.substring(i+1)

                }

            }
            else{

                if(phrase.charCodeAt(i) + change < 97) {
                    // phrase = phrase.replace(phrase[i],String.fromCharCode(phrase.charCodeAt(i) + change + 26));
                    phrase = phrase.substring(0,i) + String.fromCharCode(phrase.charCodeAt(i) + change + 26) + phrase.substring(i+1)

                }
                else{
                    // phrase = phrase.replace(phrase[i],String.fromCharCode(phrase.charCodeAt(i) + change));
                    phrase = phrase.substring(0,i) + String.fromCharCode(phrase.charCodeAt(i) + change) + phrase.substring(i+1)
                }

            }
        }

    }
    return phrase;
};

// Do not edit below this line
module.exports = caesar;
