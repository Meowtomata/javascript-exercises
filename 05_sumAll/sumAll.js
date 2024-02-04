const sumAll = function(lowerInt, upperInt) {

    if (lowerInt < 0 || upperInt < 0) return "ERROR";
    if (typeof (lowerInt + upperInt) != "number") return "ERROR";
    higher = Math.max(lowerInt, upperInt);
    lower = Math.min(lowerInt, upperInt);

    let sum = 0;
    for (; lower <= higher; lower++) {
        sum += lower;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
