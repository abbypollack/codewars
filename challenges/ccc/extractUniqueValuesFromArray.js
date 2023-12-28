// Write a function that takes in an array of numbers and returns an array with only the unique values using the new Set() method.
 
// Example:
 
// uniqueValues([1, 2, 3, 2, 4, 3, 5]
 
// should return: [1, 2, 3, 4, 5]

function uniqueValues(arr) {
    const uniqueValuesSet = new Set(arr);
    const uniqueValuesArray = Array.from(uniqueValuesSet)
    return uniqueValuesArray;
  }

  // Example usage:
const inputArray = [1, 2, 3, 2, 4, 3, 5];
console.log(uniqueValues(inputArray));