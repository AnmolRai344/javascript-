function secondLargest(arr) {
    const unique = [...new Set(arr)];

    if (unique.length < 2) {
        return "No second-largest number";
    }

    unique.sort((a, b) => b - a);

    return unique[1];
}

console.log(secondLargest([10, 50, 30, 90, 70]));
console.log(secondLargest([5, 5, 4, 3]));