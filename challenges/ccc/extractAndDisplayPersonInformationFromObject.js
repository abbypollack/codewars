// Write a function that takes an object representing a person and destructures the object to extract the person's name, age, and address. Then, use these variables to log a message that says:

// "The person's name is [name], they are [age] years old, and they live at [address]."

// If any one or all of the key/value pairs are missing, your function should return the following message, "Missing required key-value pair(s).".

function printPersonInfo(person) {
    const { name, age, address } = person;

    if (name !== undefined && age !== undefined && address !== undefined) {
        return `The person's name is ${name}, they are ${age} years old, and they live at ${address}.`;
    } else {
        return "Missing required key-value pair(s).";
    }
}

// Example usage:
const person1 = {
    name: "John",
    age: 30,
    address: "123 Main St"
};
const person2 = {
    name: "Alice",
    age: 25
};
const person3 = {
    name: "Bob",
    address: "456 Elm St"
};

console.log(printPersonInfo(person1));
console.log(printPersonInfo(person2)); 
console.log(printPersonInfo(person3)); 
