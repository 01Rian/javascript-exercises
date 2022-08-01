const repeatString = function(phrase, num) {
    let string = '';
    for (let i = 0; i < num; i++) {
        string += phrase;
    }
    if (num < 0) {
        return "ERROR";
    }
    
    return string;
};

// Do not edit below this line
module.exports = repeatString;
