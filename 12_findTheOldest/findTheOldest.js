const findTheOldest = function(people) {
    var oldest = 0;
    var person;
    for(i=0; i < people.length; i++){
        var death = people[i].yearOfDeath;
        if(typeof people[i].yearOfDeath === 'undefined'){
            var date = new Date();
            death = date.getFullYear();
        }
        var age = death - people[i].yearOfBirth;
        if(age > oldest){
            oldest = age;
            person = people[i];
        }
    }
    return person; 
};

// Do not edit below this line
module.exports = findTheOldest;
