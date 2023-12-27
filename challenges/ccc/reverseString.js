// Write a function reverseString(str) that takes a string as input and returns a new string with the characters in reverse order using the .reverse() array method. 
 
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example usage:
console.log("Original String:", "Hello, World!");
console.log("Reversed String:", reverseString("Hello, World!"));