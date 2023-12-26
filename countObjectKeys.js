// Write a function that takes an object as a parameter and returns the number of keys it has using the Object.keys() method. 
function countKeys(obj) {
    return Object.keys(obj).length;
}

// Example usage:
const myObject = {
    key1: "value1",
    key2: "value2",
    key3: "value3"
};

console.log("Number of keys in the object:", countObjectKeys(myObject));