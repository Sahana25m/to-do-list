function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText === '') return;

    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
        li.remove();
        updateLocalStorage();
    };

    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = '';
    updateLocalStorage();
}

function updateLocalStorage() {
    const tasks = [];
    const taskList = document.getElementById('task-list').children;

    for (let i = 0; i < taskList.length; i++) {
        tasks.push(taskList[i].textContent);
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

window.onload = function () {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));

    if (savedTasks) {
        const taskList = document.getElementById('task-list');

        savedTasks.forEach(taskText => {
            const li = document.createElement('li');
            li.textContent = taskText;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = function () {
                li.remove();
                updateLocalStorage();
            };

            li.appendChild(deleteButton);
            taskList.appendChild(li);
        });
    }
};
