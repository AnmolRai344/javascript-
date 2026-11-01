function findMissingNumbers(arr, start, end) {
    const numbers = new Set(arr);
    const missing = [];

    for (let i = start; i <= end; i++) {
        if (!numbers.has(i)) {
            missing.push(i);
        }
    }

    return missing;
}

console.log(findMissingNumbers([1, 2, 4, 6, 8], 1, 8));