// Write a function that takes an array of numbers and destructures the array to extract the first two numbers. Then, use these variables to return a message that says:

// "The first two numbers are [firstNumber] and [secondNumber]."

// Your function should return the string, "The arguments provided are invalid." when your function is given an array with no values, one value or if one of the first two values is a non-numeric value.

function printNumbers(numbers) {
    const [firstNumber, secondNumber] = numbers;
    if (numbers.length < 2 || typeof firstNumber !== 'number' & typeof secondNumber !== 'number') {
        return "The arguments provided are invalid.";
    } else {
        return `The first two numbers are ${firstNumber} and ${secondNumber}.`;
    }
}

// Example usage:

console.log(printNumbers([1, 2]));
console.log(printNumbers([3, "four"])); 
console.log(printNumbers([])); 
console.log(printNumbers([5]))