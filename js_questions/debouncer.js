// Debounce function delays execution until user stops triggering it
function debounce(func, wait) {
    let timer;

    return function (...args) {
        // clear previous timer
        clearTimeout(timer);

        // set new timer
        timer = setTimeout(() => {
            func.apply(this, args);
        }, wait);
    };
}


// Example usage
const log = debounce(() => {
    console.log("Function called");
}, 1000);

log();
log();
log(); // Only this will execute after 1 second