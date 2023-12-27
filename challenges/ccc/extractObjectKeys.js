// Write a function that takes an object and returns an array of all the keys in the object using a for...in loop.
function keysToArray(obj) {
    let keysArray = [];

    for (let key in obj) {
        keysArray.push(key)
    }
    return keysArray;
}

// Example usage:
const myObject = {
    key1: "value1",
    key2: "value2",
    key3: "value3"
};

console.log("Object keys:", keysToArray(myObject));