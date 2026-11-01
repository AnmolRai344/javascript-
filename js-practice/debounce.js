function debounce(callback, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            callback.apply(this, args);
        }, delay);
    };
}

const search = debounce((query) => {
    console.log("Searching for:", query);
}, 1000);

search("Java");
search("JavaScript");
search("JavaScript Developer");