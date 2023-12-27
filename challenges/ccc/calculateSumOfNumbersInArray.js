// Write a function sumOfNumbers(arr) that takes an array 'arr' and adds them all together using the  .reduce() method. If the array is empty it should return 0;
function sumOfNumbers(arr) {
    return arr.reduce((acc, current) => acc + current, 0);
}

// Example usage:
const myArray = [1, 2, 3, 4, 5];
console.log("Sum of numbers:", sumOfNumbers(myArray));