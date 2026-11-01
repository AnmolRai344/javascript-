function factorial(num) {
    if (!Number.isInteger(num) || num < 0) {
        return "Invalid input";
    }

    let result = 1;

    for (let i = 2; i <= num; i++) {
        result *= i;
    }

    return result;
}

console.log(factorial(5));
console.log(factorial(7));
console.log(factorial(0));