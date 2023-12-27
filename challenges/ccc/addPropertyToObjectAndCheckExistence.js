/* Write a function, addNewProperty, with three parameters: object, propName and propValue. 
The function should add a new key/value pair where propName is the key and propValue is the corresponding value. 
The function should return a boolean indicating that the property exists. */

function addNewProperty(obj, propName, propValue) {
    obj[propName] = propValue;
    return obj.hasOwnProperty(propName);
}

// Example usage:
const myObject = {};
const propertyName = "exampleProperty";
const propertyValue = 42;

console.log("Property added successfully:", addNewProperty(myObject, propertyName, propertyValue));