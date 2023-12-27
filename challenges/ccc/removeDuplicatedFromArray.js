/* Write a function removeDuplicates(arr) that takes an array as input and returns a new array with all values from the original array 
except duplicate values. You should not modify the original array provided to the function.*/

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Example usage:
const originalArray = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicaates(originalArray);

console.log("Original Array:", originalArray);
console.log("Array with Duplicates Removed:", uniqueArray);