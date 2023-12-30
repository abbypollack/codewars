// Write a function called delay that will be passed an integer value representing time in milliseconds and returns a Promise that resolves after that amount of time.
 
// Hint: Research and use setTimeout() to create the delay. When the promise resolves it should return the string, "Times up!".

function delay(ms) {
    return new Promise(resolve => {
     setTimeout(() => resolve("Times up!"), ms)   
    })
}


// Example usage:
delay(2000).then(message => {
  console.log(message);
});