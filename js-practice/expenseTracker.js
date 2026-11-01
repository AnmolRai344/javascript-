const expenses = [];

function addExpense(title, amount, category) {
    expenses.push({
        id: Date.now(),
        title,
        amount,
        category
    });
}

function getTotalExpenses() {
    return expenses.reduce(
        (total, expense) => total + expense.amount,
        0
    );
}

function getExpensesByCategory(category) {
    return expenses.filter(
        expense => expense.category === category
    );
}

addExpense("Food", 500, "Food");
addExpense("Transport", 200, "Travel");
addExpense("Shopping", 1000, "Shopping");

console.log("All expenses:", expenses);
console.log("Total:", getTotalExpenses());
console.log("Food expenses:", getExpensesByCategory("Food"));