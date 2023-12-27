// Write a function isPalindrome(str) that takes a string as input and returns true if the string is a palindrome (i.e., reads the same forwards and backwards), and false otherwise.

function isPalindrome(str) {
    let cleanString = str.replace(/\s/g, '').toLowerCase();
    let reverseString = str.split('').reverse().join('');
    return reverseString == cleanString;
}

// Example usage:
const palindromeString1 = "racecar";
const palindromeString2 = "A man a plan a canal Panama";
const nonPalindromeString = "hello";

console.log(`"${palindromeString1}" is a palindrome:`, isPalindrome(palindromeString1));
console.log(`"${palindromeString2}" is a palindrome:`, isPalindrome(palindromeString2));
console.log(`"${nonPalindromeString}" is a palindrome:`, isPalindrome(nonPalindromeString));