function sortNumbers(arr) {
    return [...arr].sort((a, b) => a - b);
}

console.log(sortNumbers([50, 10, 40, 20, 30]));
console.log(sortNumbers([9, 2, 7, 1, 5]));