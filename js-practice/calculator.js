const calculator = {
    add: (a, b) => a + b,

    subtract: (a, b) => a - b,

    multiply: (a, b) => a * b,

    divide: (a, b) => {
        if (b === 0) {
            return "Cannot divide by zero";
        }

        return a / b;
    },

    power: (a, b) => a ** b,

    modulus: (a, b) => a % b
};

console.log("Addition:", calculator.add(20, 10));
console.log("Subtraction:", calculator.subtract(20, 10));
console.log("Multiplication:", calculator.multiply(20, 10));
console.log("Division:", calculator.divide(20, 10));
console.log("Power:", calculator.power(2, 3));
console.log("Modulus:", calculator.modulus(10, 3));