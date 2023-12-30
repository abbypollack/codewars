// Create a function that returns true if the number is an even number and false if it is an odd number and assign this function to the variable callback on line 1 below.

// Then write a function filterEvens that accepts two arguments. The first argument passed will be an array of integers. The second argument will be your callback function that you created above. Your filterEvens function should return an array of only the even numbers and should use your callback function to decide if the number you are iterating over are even.

let callback = (number) => number % 2 === 0;

function filterEvens(array, callback) {
    return array.filter(callback);
}


// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterEvens(numbers, callback);

console.log("Even Numbers:", evenNumbers);
