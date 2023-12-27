
// Write a function that takes an object as a parameter and returns an array of its values using the Object.values() method.

function getObjectValues(obj) {
    return Object.values(obj);
}


// Example usage:
const myObject = {
    key1: "value1",
    key2: "value2",
    key3: "value3"
  };

  console.log("Object values:", getObjectValues(myObject));