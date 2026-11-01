const tasks = [];

function addTask(title) {
    const task = {
        id: Date.now(),
        title,
        completed: false
    };

    tasks.push(task);
    return task;
}

function completeTask(id) {
    const task = tasks.find(task => task.id === id);

    if (task) {
        task.completed = true;
    }
}

function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);

    if (index !== -1) {
        tasks.splice(index, 1);
    }
}

function showTasks() {
    console.log(tasks);
}

const first = addTask("Learn JavaScript");
const second = addTask("Practice React");

completeTask(first.id);
showTasks();

deleteTask(second.id);
showTasks();