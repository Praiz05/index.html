// Lab 6: DOM Manipulation with JavaScript
// Registration: 22/EG/CO/1735

// Activity 1: Add a paragraph and change its text color using JS
function changeColor() {
    const paragraph = document.getElementById("colorParagraph");
    
    // Array of colors to cycle through
    const colors = ["red", "blue", "green", "purple", "orange", "teal"];
    
    // Get current color or start with first color
    let currentColor = paragraph.style.color;
    
    if (!currentColor || currentColor === "") {
        paragraph.style.color = colors[0];
    } else {
        let currentIndex = colors.indexOf(currentColor);
        let nextIndex = (currentIndex + 1) % colors.length;
        paragraph.style.color = colors[nextIndex];
    }
    
    console.log("Paragraph color changed to: " + paragraph.style.color);
}

// Activity 2: Create a new list item dynamically and append to an existing ul
function addListItem() {
    const input = document.getElementById("newItem");
    const itemText = input.value.trim();
    
    if (itemText === "") {
        alert("Please enter some text for the list item!");
        return;
    }
    
    // Create new list item
    const newItem = document.createElement("li");
    newItem.textContent = itemText;
    
    // Optional: Add delete button to each new item
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.style.backgroundColor = "#f44336";
    deleteBtn.style.padding = "2px 8px";
    deleteBtn.onclick = function() {
        newItem.remove();
        console.log("Item deleted: " + itemText);
    };
    
    newItem.appendChild(deleteBtn);
    
    // Append to existing ul
    const list = document.getElementById("itemList");
    list.appendChild(newItem);
    
    // Clear input
    input.value = "";
    
    console.log("Added new list item: " + itemText);
}

// Activity 3: Use querySelector to select a class and toggle its visibility
function toggleVisibility() {
    const toggleElement = document.querySelector(".toggle-box");
    
    if (toggleElement) {
        if (toggleElement.style.display === "none") {
            toggleElement.style.display = "block";
            console.log("Element is now VISIBLE");
        } else {
            toggleElement.style.display = "none";
            console.log("Element is now HIDDEN");
        }
    } else {
        console.log("Error: .toggle-box element not found!");
    }
}

// Activity 4: Fetch input from a form field and display it in a div
function displayInput() {
    const userInput = document.getElementById("userInput");
    const outputText = document.getElementById("outputText");
    const inputValue = userInput.value.trim();
    
    if (inputValue === "") {
        outputText.textContent = "Please enter something!";
        outputText.style.color = "red";
        console.log("Error: Empty input provided");
    } else {
        outputText.textContent = inputValue;
        outputText.style.color = "#2196F3";
        console.log("Displayed input: " + inputValue);
    }
}

// Activity 5: Handle errors - Try selecting a non-existent element and log the issue
function handleError() {
    console.log("Testing error handling...");
    
    // Try to select a non-existent element
    const nonExistentElement = document.getElementById("nonExistentElement");
    
    if (nonExistentElement === null) {
        const errorMessage = "ERROR: Element with id 'nonExistentElement' does not exist in the DOM!";
        console.log(errorMessage);
        
        // Display error message on page
        const errorDiv = document.getElementById("errorMessage");
        errorDiv.textContent = errorMessage;
        errorDiv.classList.add("show");
        
        // Auto-hide after 3 seconds
        setTimeout(() => {
            errorDiv.classList.remove("show");
        }, 3000);
    } else {
        console.log("Element found!");
    }
    
    // Additional error handling demonstration: Try to access property of null
    try {
        const testElement = document.getElementById("anotherNonExistent");
        testElement.style.color = "red"; // This will cause error
    } catch (error) {
        console.log("Caught error: " + error.message);
        console.log("Error type: " + error.name);
        console.log("This demonstrates proper error handling using try-catch!");
    }
}

// Additional DOM manipulation examples
console.log("Lab 6 - DOM Manipulation");
console.log("Registration: 22/EG/CO/1735");

// Add initial items with delete buttons to existing list items
document.addEventListener("DOMContentLoaded", function() {
    // Add delete buttons to existing list items
    const existingItems = document.querySelectorAll("#itemList li");
    existingItems.forEach(item => {
        if (!item.querySelector("button")) {
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.style.marginLeft = "10px";
            deleteBtn.style.backgroundColor = "#f44336";
            deleteBtn.style.padding = "2px 8px";
            deleteBtn.onclick = function() {
                item.remove();
                console.log("Item deleted: " + item.textContent.replace("Delete", "").trim());
            };
            item.appendChild(deleteBtn);
        }
    });
    
    console.log("Page loaded and ready!");
    console.log("All DOM manipulation functions are ready to use.");
});
