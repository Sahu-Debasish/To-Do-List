const taskInput = document.getElementById('task');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('tasks');

addTaskButton.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <span class="actions">
                <button class="complete-button">Complete</button>
                <button class="delete-button">Delete</button>
                <button class="priority-button">Priority</button>
            </span>
        `;
        taskList.appendChild(li);
        taskInput.value = '';

        const completeButton = li.querySelector('.complete-button');
        const deleteButton = li.querySelector('.delete-button');
        const priorityButton = li.querySelector('.priority-button');
        const taskTextSpan = li.querySelector('.task-text');

        completeButton.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        deleteButton.addEventListener('click', () => {
            li.remove();
        });

        priorityButton.addEventListener('click', () => {
            li.classList.toggle('priority');
        });
    }
}
