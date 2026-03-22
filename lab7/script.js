// Lab 7: Events and Interactivity in JavaScript
// Registration: 22/EG/CO/1735

// Sample code from PDF
document.getElementById("btn").addEventListener("click", function() {
    alert("Button clicked!");
});

document.getElementById("input").addEventListener("keyup", function(event) {
    console.log("Key pressed: " + event.key);
    document.getElementById("keyDisplay").textContent = "Last key pressed: " + event.key;
});

// Activity 1: Add a mouseover event to change an element's background
const hoverBox = document.getElementById("hoverBox");

hoverBox.addEventListener("mouseover", function() {
    this.style.backgroundColor = "#FF9800";
    console.log("Mouse entered hover box - background changed to orange");
});

hoverBox.addEventListener("mouseout", function() {
    this.style.backgroundColor = "#2196F3";
    console.log("Mouse left hover box - background restored to blue");
});

// Activity 2: Create a simple counter - Increment a number on button click and display it
let count = 0;
const counterDisplay = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");
const resetBtn = document.getElementById("resetBtn");

function updateCounter() {
    counterDisplay.textContent = count;
    console.log("Counter updated: " + count);
}

incrementBtn.addEventListener("click", function() {
    count++;
    updateCounter();
});

decrementBtn.addEventListener("click", function() {
    count--;
    updateCounter();
});

resetBtn.addEventListener("click", function() {
    count = 0;
    updateCounter();
    console.log("Counter reset to zero");
});

// Activity 3: Validate form input - Check if email field contains '@' on submit
const emailForm = document.getElementById("emailForm");
const emailInput = document.getElementById("email");
const validationMessage = document.getElementById("validationMessage");

emailForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission
    
    const email = emailInput.value.trim();
    
    if (email === "") {
        validationMessage.textContent = "Please enter an email address!";
        validationMessage.className = "validation-message error";
        console.log("Validation error: Empty email field");
    } else if (email.includes("@")) {
        validationMessage.textContent = "✓ Valid email address! Form submitted successfully.";
        validationMessage.className = "validation-message success";
        console.log("Valid email submitted: " + email);
        
        // Optional: Clear input after successful submission
        emailInput.value = "";
        
        // Auto-hide success message after 3 seconds
        setTimeout(() => {
            validationMessage.style.display = "none";
        }, 3000);
    } else {
        validationMessage.textContent = "✗ Invalid email! Email must contain '@' symbol.";
        validationMessage.className = "validation-message error";
        console.log("Validation error: Email missing '@' - " + email);
    }
    
    // Make message visible
    validationMessage.style.display = "block";
});

// Activity 4: Use timers - Change text after 5 seconds using setTimeout
const timerText = document.getElementById("timerText");
const resetTimerBtn = document.getElementById("resetTimerBtn");
let timerId = null;

function startTimer() {
    // Clear any existing timer
    if (timerId) {
        clearTimeout(timerId);
    }
    
    // Reset text
    timerText.textContent = "Text will change after 5 seconds...";
    timerText.style.backgroundColor = "#ff9800";
    
    // Start new timer
    timerId = setTimeout(function() {
        timerText.textContent = "✓ 5 seconds have passed! Text changed by setTimeout!";
        timerText.style.backgroundColor = "#4CAF50";
        console.log("Timer completed: Text changed after 5 seconds");
    }, 5000);
    
    console.log("Timer started - will change text in 5 seconds");
}

resetTimerBtn.addEventListener("click", function() {
    startTimer();
    console.log("Timer reset by user");
});

// Start timer when page loads
startTimer();

// Activity 5: Prevent default behavior - Stop a link from navigating
const preventLink = document.getElementById("preventLink");
const linkMessage = document.getElementById("linkMessage");

preventLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent navigation
    linkMessage.textContent = "✓ Navigation prevented! The link would have gone to: " + this.getAttribute("href");
    console.log("Link clicked but navigation prevented. Target URL: " + this.getAttribute("href"));
    
    // Auto-hide message after 3 seconds
    setTimeout(() => {
        linkMessage.textContent = "";
    }, 3000);
});

// Additional interactive features
console.log("Lab 7 - Events and Interactivity");
console.log("Registration: 22/EG/CO/1735");

// Add double-click event to counter display
counterDisplay.addEventListener("dblclick", function() {
    count = 0;
    updateCounter();
    console.log("Counter reset by double-clicking the counter display");
});

// Add keyboard shortcut: Press 'r' to reset counter
document.addEventListener("keydown", function(event) {
    if (event.key === 'r' || event.key === 'R') {
        count = 0;
        updateCounter();
        console.log("Counter reset using keyboard shortcut 'R'");
    }
    
    if (event.key === 'c' || event.key === 'C') {
        console.log("Current counter value: " + count);
    }
});

// Log all activity
console.log("All event handlers initialized and ready!");
