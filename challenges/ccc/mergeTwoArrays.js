// Write a function called mergeArrays that takes in two arrays and returns a new array that contains all the elements from both arrays. Use the spread operator to merge the arrays. 

function mergeArrays(arr1, arr2){
    const arr3 = [...arr1, ...arr2];
    return arr3;
}

// Example usage:
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = mergeArrays(array1, array2);

console.log("Merged Array:", mergedArray);