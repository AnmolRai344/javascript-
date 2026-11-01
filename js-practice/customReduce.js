function customReduce(arr, callback, initialValue) {
    let accumulator = initialValue;

    for (let i = 0; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i], i, arr);
    }

    return accumulator;
}

const numbers = [10, 20, 30, 40];

const total = customReduce(
    numbers,
    (sum, num) => sum + num,
    0
);

console.log(total);