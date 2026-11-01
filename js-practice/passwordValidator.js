function validatePassword(password) {
    const rules = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /[0-9]/.test(password),
        special: /[!@#$%^&*]/.test(password)
    };

    console.log("Password validation:", rules);

    return Object.values(rules).every(Boolean);
}

console.log(validatePassword("Hello@123"));
console.log(validatePassword("hello"));