// INSTRUCTIONS: Write a function titleCase(str) that takes a string as input and returns the same string with the first letter of each word capitalized.

function titleCase(str) {
    const words = str.split(" ");
    return words.map(word => {
       return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(" ")
}

console.log(titleCase("hello my name is ABBY"));