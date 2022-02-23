const getTheTitles = function(books) {
    var titles = [];
    for(i=0; i < books.length; i++){
        titles.push(books[i].title)
        console.log(titles)
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
