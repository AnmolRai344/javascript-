function mostFrequent(arr) {
    const frequency = {};

    for (const item of arr) {
        frequency[item] = (frequency[item] || 0) + 1;
    }

    let maxCount = 0;
    let result = null;

    for (const item in frequency) {
        if (frequency[item] > maxCount) {
            maxCount = frequency[item];
            result = item;
        }
    }

    return result;
}

console.log(mostFrequent([1, 2, 2, 3, 3, 3, 4]));
console.log(mostFrequent(["apple", "banana", "apple"]));