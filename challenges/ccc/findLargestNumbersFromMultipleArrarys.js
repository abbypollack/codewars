// Write a function called largestNumbers that takes any number of arrays as arguments, and returns an array of the largest numbers from each input array. Use the spread operator to make it possible to pass any number of arrays as arguments. For example your function should be able to handle the following calls:

function largestNumbers(...arrays) {
    const largestNumbersArray = arrays.map(array => Math.max(...array))
    return largestNumbersArray; 
}
  
  // Example usage:
  console.log(largestNumbers([4, 5, 6])); // Should return [6]
  console.log(largestNumbers([1, 7, 8], [5, 9, 10], [56, 6, 92])); // Should return [8, 10, 92]
  