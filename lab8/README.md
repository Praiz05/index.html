# Lab 8: Integrated Project - To-Do List App

## Live Demo Link
🔗 **GitHub Pages URL:** https://yourusername.github.io/lab-8-todo-yourusername/

*(Replace with your actual GitHub Pages URL after enabling GitHub Pages)*

## Brief Reflection

### What I Learned
In this final integrated project, I combined all the skills learned throughout the course (HTML, CSS, JavaScript) to build a fully functional To-Do List application. I learned how to:

- **Create dynamic elements** with JavaScript using `createElement()` and `appendChild()`
- **Implement CRUD operations** (Create, Read, Update, Delete) for tasks
- **Use localStorage** to persist data across browser sessions, ensuring tasks survive page reloads
- **Add interactive features** like task completion toggle (strikethrough) and delete buttons
- **Style with CSS** including gradients, animations, hover effects, and responsive design
- **Handle user events** including click, keypress, and form submission
- **Debug applications** using browser console tools to identify and fix issues
- **Make responsive layouts** with media queries for mobile devices

### Challenges Faced
The main challenge was implementing the localStorage persistence correctly. I had to ensure that tasks were properly saved, loaded, updated, and deleted from storage while keeping the UI in sync. Managing the task completion state (strikethrough) across page reloads required storing both the task text and completion status. Another challenge was creating the delete button for each task dynamically and ensuring it removed the correct task from both the DOM and localStorage. Debugging these issues using `console.log()` statements helped identify where the problems were occurring. The responsive design also required careful planning to ensure the app looked good on both desktop and mobile devices.

## Resources Used
- [MDN Web Docs - localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [MDN - Creating Elements](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [W3Schools - To-Do List Tutorial](https://www.w3schools.com/howto/howto_js_todolist.asp)
- [MDN - CSS Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries)
- [MDN - Console API](https://developer.mozilla.org/en-US/docs/Web/API/Console)
- Browser Developer Tools (F12)
