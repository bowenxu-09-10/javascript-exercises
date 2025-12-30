const sumAll = function(start, end) {
    if (typeof start !== 'number' || typeof end !== 'number'
        || start < 0 || end < 0
        || start % 1 != 0 || end % 1 != 0
    ) {
        return "ERROR";
    }

    let bigger, smaller;
    let sum = 0;
    start > end ? smaller = end: smaller = start;
    start > end ? bigger = start : bigger = end;

    for (let i = smaller; i <= bigger; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
