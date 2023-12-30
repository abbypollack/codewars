// Write an asynchronous function main that is passed a person's name as a string, age as an integer and delay as an integer in milliseconds.  The function should return a string "[name] is [age] years old." after a delay in milliseconds.


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function returnValueAfterDelay(ms, name) {
    await delay(ms);
    return name;
}

async function main(name, age, delayMs) {
    const delayedName = await returnValueAfterDelay(delayMs, name);
    const result = `${delayedName} is ${age} years old.`;
    return result;
}


// Example usage:
main('John Doe', 34, 500).then(result => {
    console.log(result);
});