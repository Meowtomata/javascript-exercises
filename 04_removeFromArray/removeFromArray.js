const removeFromArray = function(array, ...arg) {
    // return array with elements that do not include any elements from args
    return array.filter((x) => !arg.includes(x));
    
};

// Do not edit below this line
module.exports = removeFromArray;
