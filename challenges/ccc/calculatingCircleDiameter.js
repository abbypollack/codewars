// Create a function createCircle and inside declare a variable circle. Assign an object with a property of diameter to the variable circle.  The value of the diameter property should make a call to getDiameter to calculate the diameter for a given radius. Your function should return the circle object.
 
// Create a function, getDiameter, that returns the diameter of any given radius.

function createCircle(radius) {
    let circle = {
        diameter: getDiameter(radius)
    };
    return circle;
}

function getDiameter(radius) {
    return 2 * radius;
}

// Example usage:
console.log(createCircle(5));