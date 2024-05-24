document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', addTask);
    taskList.addEventListener('click', handleTaskAction);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${taskText}</span>
                <div>
                    <button class="edit">Edit</button>
                    <button class="delete">Delete</button>
                    <button class="complete">Complete</button>
                </div>
            `;
            taskList.appendChild(li);
            taskInput.value = '';
        }
    }

    function handleTaskAction(e) {
        if (e.target.classList.contains('edit')) {
            editTask(e.target.parentElement.parentElement);
        } else if (e.target.classList.contains('delete')) {
            deleteTask(e.target.parentElement.parentElement);
        } else if (e.target.classList.contains('complete')) {
            completeTask(e.target.parentElement.parentElement);
        }
    }

    function editTask(taskItem) {
        const taskText = taskItem.querySelector('span').textContent;
        taskInput.value = taskText;
        taskList.removeChild(taskItem);
    }

    function deleteTask(taskItem) {
        taskList.removeChild(taskItem);
    }

    function completeTask(taskItem) {
        taskItem.classList.toggle('completed');
    }
});
