// Lab 8: Integrated Project - To-Do List App
// Registration: 22/EG/CO/1735

// Load tasks from localStorage when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadTasks();
    updateTaskCount();
    console.log("To-Do List App initialized");
    console.log("Registration: 22/EG/CO/1735");
});

// Function to add a new task
function addTask() {
    let taskInput = document.getElementById("task");
    let task = taskInput.value.trim();
    
    if (task) {
        createTaskElement(task);
        saveTaskToLocalStorage(task, false);
        taskInput.value = "";
        updateTaskCount();
        console.log("Task added: " + task);
    } else {
        alert("Please enter a task!");
        console.log("Error: Empty task not added");
    }
}

// Function to create task element
function createTaskElement(task, isCompleted = false) {
    let li = document.createElement("li");
    
    let taskText = document.createElement("span");
    taskText.className = "task-text";
    if (isCompleted) {
        taskText.classList.add("completed");
    }
    taskText.textContent = task;
    
    // Activity 2: Make completed tasks strikethrough on click
    taskText.addEventListener("click", function() {
        this.classList.toggle("completed");
        updateTaskCompletionInStorage(task, this.classList.contains("completed"));
        console.log("Task toggled: " + task + " - Completed: " + this.classList.contains("completed"));
    });
    
    // Activity 1: Add delete button to each list item
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", function() {
        li.remove();
        deleteTaskFromStorage(task);
        updateTaskCount();
        console.log("Task deleted: " + task);
    });
    
    li.appendChild(taskText);
    li.appendChild(deleteBtn);
    
    document.getElementById("list").appendChild(li);
}

// Activity 3: Add persistence - Use localStorage to save tasks across reloads
function saveTaskToLocalStorage(task, isCompleted) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ text: task, completed: isCompleted });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log("Task saved to localStorage");
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        createTaskElement(task.text, task.completed);
    });
    console.log("Loaded " + tasks.length + " tasks from localStorage");
}

function updateTaskCompletionInStorage(task, isCompleted) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let taskIndex = tasks.findIndex(t => t.text === task);
    if (taskIndex !== -1) {
        tasks[taskIndex].completed = isCompleted;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        console.log("Task completion updated in localStorage");
    }
}

function deleteTaskFromStorage(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(t => t.text !== task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log("Task removed from localStorage");
}

function clearAllTasks() {
    if (confirm("Are you sure you want to delete all tasks?")) {
        document.getElementById("list").innerHTML = "";
        localStorage.removeItem("tasks");
        updateTaskCount();
        console.log("All tasks cleared");
    }
}

// Update task count display
function updateTaskCount() {
    let taskCount = document.querySelectorAll("#list li").length;
    document.getElementById("taskCount").textContent = taskCount;
}

// Activity 5: Debug - Intentionally break the code and fix using console
function debugTest() {
    console.log("=== Debug Test Started ===");
    
    // Intentionally trying to access non-existent element
    try {
        let nonExistent = document.getElementById("nonExistentElement");
        nonExistent.style.color = "red";
    } catch (error) {
        console.log("Error caught: " + error.message);
        console.log("This demonstrates how to debug using console!");
    }
    
    // Check if tasks are loading correctly
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    console.log("Current tasks in localStorage: ", tasks);
    
    // Check if DOM elements exist
    let taskInput = document.getElementById("task");
    let addButton = document.querySelector("button");
    let taskList = document.getElementById("list");
    
    console.log("DOM Elements Check:");
    console.log("- Task Input exists: " + (taskInput !== null));
    console.log("- Add Button exists: " + (addButton !== null));
    console.log("- Task List exists: " + (taskList !== null));
    
    console.log("=== Debug Test Completed ===");
}

// Add keyboard support: Press Enter to add task
document.getElementById("task").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
        console.log("Enter key pressed - Task added");
    }
});

// Add debug function to window for console testing
window.debugTest = debugTest;

console.log("All functions loaded and ready!");
console.log("To test debugging, type 'debugTest()' in console");
