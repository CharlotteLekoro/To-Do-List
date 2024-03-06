// Define a variable to store tasks
let tasks = [];

// Function to add a new task
function addTask(taskName) {
    tasks.push({ name: taskName, completed: false });
    displayTasks();
}

// Function to mark a task as completed
function markTaskCompleted(index) {
    tasks[index].completed = true;
    displayTasks();
}

// Function to display tasks based on status
function displayTasks(status = 'all') {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        if (status === 'all' || (status === 'completed' && task.completed) || (status === 'incomplete' && !task.completed)) {
            const listItem = document.createElement('li');
            listItem.textContent = task.name;

            if (task.completed) {
                listItem.classList.add('completed');
            }

            // Add event listener to mark task as completed
            listItem.addEventListener('click', () => markTaskCompleted(index));

            taskList.appendChild(listItem);
        }
    });
}

// Function to initialize the app
function initializeApp() {
    // Add event listener to the form for adding tasks
    const addTaskForm = document.getElementById('addTaskForm');
    addTaskForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const taskInput = document.getElementById('taskInput');
        const taskName = taskInput.value.trim();
        if (taskName !== '') {
            addTask(taskName);
            taskInput.value = '';
        }
    });

    // Add event listener to the select element for task filtering
    const taskFilterSelect = document.getElementById('taskFilter');
    taskFilterSelect.addEventListener('change', () => {
        const selectedStatus = taskFilterSelect.value;
        displayTasks(selectedStatus);
    });
}

// Call initializeApp function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', initializeApp);
