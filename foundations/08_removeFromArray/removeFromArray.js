const removeFromArray = function(arr, target, ...moreTarget) {
    let result = arr.filter(val => val !== target);
    for (let item of moreTarget) {
        result = result.filter(val => val !== item);
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
