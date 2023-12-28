// Write a function in JavaScript that takes an array of numbers and returns a new array containing a string  '[number] squared is [number squared]' for each number in the original array using template literals.

// Example:
// squareNumbers([3,4,5])
// should return ['3 squared is 9', '4 squared is 16', '5 squared is 25']

function squareNumbers(numbers) {
    const squaredStrings = numbers.map(number => `${number} squared is ${number * number}`)
    return squaredStrings;
}

// Example usage:
const inputNumbers = [3, 4, 5];
console.log(squareNumbers(inputNumbers));