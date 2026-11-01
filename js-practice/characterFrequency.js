function characterFrequency(str) {
    const frequency = {};

    for (const char of str) {
        frequency[char] = (frequency[char] || 0) + 1;
    }

    return frequency;
}

console.log(characterFrequency("javascript"));
console.log(characterFrequency("hello"));