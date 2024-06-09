let tasks = [];

function addTask() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;

    if (!title || !description || !dueDate) {
        alert("Please fill in all fields");
        return;
    }

    const task = {
        id: tasks.length,
        title,
        description,
        dueDate
    };

    tasks.push(task);
    displayTasks();
    clearForm();
}

function displayTasks() {
    const taskContainer = document.getElementById('tasks');
    taskContainer.innerHTML = '';

    tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.className = 'task';
        taskElement.innerHTML = `
            <h2>${task.title}</h2>
            <p>${task.description}</p>
            <p>Due: ${task.dueDate}</p>
            <button onclick="deleteTask(${task.id}, this)">Delete</button>
        `;
        taskContainer.appendChild(taskElement);
    });
}

function clearForm() {
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('dueDate').value = '';
}

function deleteTask(id, element) {
    element.parentElement.style.animation = 'fadeOut 0.5s ease-in-out';
    setTimeout(() => {
        tasks = tasks.filter(task => task.id !== id);
        displayTasks();
    }, 500);
}

window.onload = displayTasks;
