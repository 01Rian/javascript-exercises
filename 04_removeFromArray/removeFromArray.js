const removeFromArray = function(...args) {
    const array = args[0];
    const newArray = []; 
    
    for (const value of array) {
        if (!args.includes(value)) {
            newArray.push(value);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
