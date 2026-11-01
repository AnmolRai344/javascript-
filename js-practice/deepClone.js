function deepClone(obj) {
    return structuredClone(obj);
}

const original = {
    name: "Rahul",
    address: {
        city: "Gurgaon",
        country: "India"
    },
    skills: ["JavaScript", "React", "Node.js"]
};

const cloned = deepClone(original);

cloned.address.city = "Delhi";
cloned.skills.push("MongoDB");

console.log("Original:", original);
console.log("Cloned:", cloned);