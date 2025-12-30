const repeatString = function(str, num) {
    if (num < 0) {
        return 'ERROR';
    }

    let reslut = "";
    for (let i = 0; i < num; i++) {
        reslut += str;
    }
    return reslut;
};

// Do not edit below this line
module.exports = repeatString;
