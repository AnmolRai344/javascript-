function customFilter(arr, callback) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }

    return result;
}

const numbers = [10, 15, 20, 25, 30];

const filtered = customFilter(numbers, num => num > 20);

console.log(filtered);