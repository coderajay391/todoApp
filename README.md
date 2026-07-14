# To-Do App (spireX)

A simple front-end To-Do app built with plain HTML/CSS/JavaScript.
## Preview
<image src="./assets/todoApp1.png">Prewview</image>
<image src="./assets/todoApp2.png">Prewview</image>
<image src="./assets/todoApp3.png">Prewview</image>
<image src="./assets/todoApp4.png">Prewview</image>

## Demo
[[watch Demo](assets/todoApp.mp4)](assets/todo1.png)

## Features

- Add new todos
- Edit existing todos
- Remove todos
- Persists todos using `localStorage`
- Keyboard support: press **Enter** in the input to add/update

## How it works

- Todos are stored in `localStorage` under the key: `todos`
- Each rendered `<li>` has a `data-index` that matches its index in the stored array
- Edit mode updates both the UI and `localStorage`
- Delete re-renders the list to keep indexes consistent

## Run

Open `index.html` in a browser.

## Files

- `index.html` - markup
- `style.css` - styling
- `script.js` - app logic
