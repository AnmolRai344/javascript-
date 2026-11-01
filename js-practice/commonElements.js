function findCommon(arr1, arr2) {
    const secondSet = new Set(arr2);

    return [...new Set(arr1)].filter(item => secondSet.has(item));
}

console.log(findCommon([1, 2, 3, 4], [3, 4, 5, 6]));
console.log(findCommon(["a", "b", "c"], ["b", "c", "d"]));