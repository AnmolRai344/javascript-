function createCounter() {
    let count = 0;

    return {
        increment() {
            return ++count;
        },

        decrement() {
            return --count;
        },

        reset() {
            count = 0;
            return count;
        },

        getValue() {
            return count;
        }
    };
}

const counter = createCounter();

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.getValue());
console.log(counter.reset());