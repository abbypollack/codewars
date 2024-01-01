// Declare a variable PI globally and assign it the value 3.14 so that both calculateCircleArea and calculateSphereVolume should calculate their respective values given a radius using the variable PI declared globally.

let PI = 3.14;

function calculateCircleArea(radius) {
   return PI * radius**2;
}

function calculateSphereVolume(radius) {
   return (4 / 3) * PI * radius**3;
}

// Example usage:
console.log("Area of a circle with radius 5:", calculateCircleArea(5));
console.log("Volume of a sphere with radius 5:", calculateSphereVolume(5));
