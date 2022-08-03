const sumAll = function(min, max) {
    let total = 0;
    
    if (min > max) {
        let reverse = min;
        min = max;
        max = reverse;
    }

    if (min < 0 || max < 0) {
        return "ERROR";
    }

    if (!Number.isInteger(min) || !Number.isInteger(max)) {
        return "ERROR";
    }
    
    for (let i = min; i <= max; i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
