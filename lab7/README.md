# Lab 7: Events and Interactivity in JavaScript

## Live Demo Link
🔗 **GitHub Pages URL:** https://yourusername.github.io/lab-7-events-yourusername/

*(Replace with your actual GitHub Pages URL after enabling GitHub Pages)*

## Brief Reflection

### What I Learned
In this lab, I learned how to handle various user events in JavaScript to create interactive web applications. I learned how to:

- **Handle click events** using `addEventListener()` and inline event handlers
- **Capture keyboard events** like `keyup` to respond to user input
- **Create mouse events** such as `mouseover` and `mouseout` for hover effects
- **Build interactive components** like a counter with increment, decrement, and reset functionality
- **Validate form inputs** before submission to ensure data quality
- **Use timers** with `setTimeout()` to create delayed actions
- **Prevent default browser behavior** using `preventDefault()` to customize link and form actions

Key event types practiced:
- `click`
- `keyup`
- `mouseover`
- `mouseout`
- `submit`
- `dblclick`
- `keydown`

### Challenges Faced
The main challenge was understanding how to properly manage timers with `setTimeout()` and ensuring that multiple timers don't conflict. I had to implement a system to clear existing timers before starting new ones to prevent unexpected behavior. Another challenge was form validation - ensuring that the `submit` event is properly handled with `preventDefault()` to stop actual form submission while still validating the input. I also learned how to combine multiple events (like mouseover, click, and keypress) to create a cohesive interactive experience. Keyboard shortcuts required careful implementation to avoid interfering with normal browser functionality.

## Resources Used
- [MDN Web Docs - Introduction to Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- [MDN - Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events)
- [W3Schools - JavaScript Events](https://www.w3schools.com/js/js_events.asp)
- [MDN - setTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)
- [MDN - preventDefault()](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
- Browser Developer Tools Console (F12)
