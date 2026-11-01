const STORAGE_KEY = "users";

function getUsers() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function addUser(user) {
    const users = getUsers();

    users.push({
        id: Date.now(),
        ...user
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

function updateUser(id, updatedData) {
    const users = getUsers().map(user =>
        user.id === id ? { ...user, ...updatedData } : user
    );

    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

function deleteUser(id) {
    const users = getUsers().filter(user => user.id !== id);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

addUser({ name: "Rahul", email: "rahul@example.com" });

console.log(getUsers());