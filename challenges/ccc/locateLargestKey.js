
// Write a function that takes an object where the values are numbers and returns the key with largest value using the for...in loop. 

function locateLargestKey(obj) {
    let largestKey = null;
    let largestValue = -Infinity;

    for (const key in obj) {
        if (obj[key] > largestValue) {
            largestValue = obj[key];
            largestKey = key;
        }
    }
    return largestKey;
}

// Example usage:
const myObject = { a: 10, b: 20, c: 30 };
console.log(findKeyOfMaxValue(myObject));