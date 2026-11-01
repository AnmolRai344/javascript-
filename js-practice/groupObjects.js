function groupBy(arr, property) {
    return arr.reduce((groups, item) => {
        const key = item[property];

        if (!groups[key]) {
            groups[key] = [];
        }

        groups[key].push(item);
        return groups;
    }, {});
}

const users = [
    { name: "Rahul", role: "developer" },
    { name: "Aman", role: "designer" },
    { name: "Priya", role: "developer" },
    { name: "Neha", role: "designer" }
];

console.log(groupBy(users, "role"));