// ES6 ARRAY METHODS

// Create a script with a function named multiplyNumbers that takes a mixed array as input.

// The function will do the following:
//  1. filter the non-numbers and multiply the remaining number by 5
//  2. hint:use the array.proto methods filter and map

// input is const mixedArray - ['Matrix', 1, true, 2, false, 3]

// output in the terminal should be $ node q2.js 
// [5, 10, 15]

const mixedArray = ['Matrix', 1, true, 2, false, 3]
let multiplyNumbers = (mixedArray) => {
    const filtered = mixedArray.filter(n => Number.isFinite(n));
    let multiplyNumbers = filtered.map(n => n * 5)
    return multiplyNumbers;
};



console.log(multiplyNumbers(mixedArray));