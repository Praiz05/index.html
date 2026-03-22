# Lab 6: DOM Manipulation with JavaScript

## Live Demo Link
🔗 **GitHub Pages URL:** https://yourusername.github.io/lab-6-dom-yourusername/

*(Replace with your actual GitHub Pages URL after enabling GitHub Pages)*

## Brief Reflection

### What I Learned
In this lab, I learned how to manipulate the Document Object Model (DOM) using JavaScript to dynamically change web page content and behavior. I learned how to:

- **Select DOM elements** using `getElementById()`, `querySelector()`, and other methods
- **Modify element properties** like text content, colors, and styles
- **Create new elements** dynamically using `createElement()` and append them to the DOM
- **Toggle element visibility** by changing CSS display properties
- **Handle form inputs** and display user-entered data
- **Implement error handling** to gracefully manage non-existent elements and potential runtime errors

Key DOM methods and properties practiced:
- `getElementById()`
- `querySelector()`
- `createElement()`
- `appendChild()`
- `remove()`
- `style` property manipulation
- Event handling with `onclick`
- `try-catch` error handling

### Challenges Faced
The main challenge was understanding how to properly handle errors when trying to access non-existent DOM elements. I learned to check for `null` values before attempting to manipulate elements and to use `try-catch` blocks for operations that might throw errors. Another challenge was ensuring that dynamically created elements (like the delete buttons) had proper event handlers attached. Using `addEventListener` and understanding event delegation helped solve this. I also learned the importance of `DOMContentLoaded` to ensure the DOM is fully loaded before manipulating elements.

## Resources Used
- [MDN Web Docs - DOM Manipulation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
- [MDN - Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [W3Schools - JavaScript HTML DOM](https://www.w3schools.com/js/js_htmldom.asp)
- [MDN - Error Handling (try-catch)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
- Browser Developer Tools Console (F12)
