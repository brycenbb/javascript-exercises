const caesar = function(phrase, offset) {
    // mod 122 for lowercase starts at 97, mod 90 for uppercase, starts at 65,
    // (97 + offset) mod 122 for lowercase and (65 + offset) mod 90 for uppercase, doesnt work for subtraction
    // (122 - offset) mod 122?
    // the above answer doesnt work, but i could use mod 25 on the offset to reduce the amount of changes needed.
    // as the total size of the alphabet is only 25.
    var change = Math.abs(offset) % 26;
    console.log("change is ", change);
    var temp = phrase;
    if(change === 0) return phrase;
    var positive = true;
    if(offset < 0) {
        change *= -1;
        positive = false;
    }
    console.log("change is ", change);


    for(i=0; i< phrase.length;i++){
        console.log("looping");

        //If not alpha:
        if(!(/[A-Za-z]/).test(phrase[i])){
            console.log("i am continuing");
            continue;
        }
        //If uppercase:
        if((/[A-Z]/).test(phrase[i])){
            console.log("am uppercase");

            if(positive){
                console.log("am positive");

                if(phrase.charCodeAt(i) + change > 90) {
                    console.log("looping past Z");

                    // phrase = phrase.replace(phrase[i],String.fromCharCode(phrase.charCodeAt(i) + change - 26));
                    phrase = phrase.substring(0,i) + String.fromCharCode(phrase.charCodeAt(i) + change - 26) + phrase.substring(i+1)

                }
                else{
                    console.log("not looping past Z");
                    // phrase = phrase.replace(phrase[i],String.fromCharCode(phrase.charCodeAt(i) + change));
                    phrase = phrase.substring(0,i) + String.fromCharCode(phrase.charCodeAt(i) + change) + phrase.substring(i+1)

                }
            }
            else{
                console.log("am negative");

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
            console.log("am lowercase");
            console.log("current letter is" , phrase[i]);

            if(positive){
                console.log("am positive");
                if(phrase.charCodeAt(i) + change > 122) {
                    // phrase = phrase.replace(phrase[i],String.fromCharCode(phrase.charCodeAt(i) + change - 26));
                    phrase = phrase.substring(0,i) + String.fromCharCode(phrase.charCodeAt(i) + change - 26) + phrase.substring(i+1)

                }
                else{
                    // phrase = phrase.replace(phrase[i],String.fromCharCode(phrase.charCodeAt(i) + change));
                    phrase = phrase.substring(0,i) + String.fromCharCode(phrase.charCodeAt(i) + change) + phrase.substring(i+1)

                }
                console.log("new letter is" , phrase[i]);

            }
            else{
                console.log("am negative");

                if(phrase.charCodeAt(i) + change < 97) {
                    // phrase = phrase.replace(phrase[i],String.fromCharCode(phrase.charCodeAt(i) + change + 26));
                    phrase = phrase.substring(0,i) + String.fromCharCode(phrase.charCodeAt(i) + change + 26) + phrase.substring(i+1)

                }
                else{
                    // phrase = phrase.replace(phrase[i],String.fromCharCode(phrase.charCodeAt(i) + change));
                    phrase = phrase.substring(0,i) + String.fromCharCode(phrase.charCodeAt(i) + change) + phrase.substring(i+1)
                }
                console.log("new letter is" , phrase[i]);

            }
        }
        console.log("input phrase is " , temp);
        console.log("current phrase is" , phrase);

    }
    return phrase;
};

// Do not edit below this line
module.exports = caesar;
