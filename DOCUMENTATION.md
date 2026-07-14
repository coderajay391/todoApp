# Documentation - To-Do App (spireX)

## Overview

This is a simple To-Do application implemented using:

- HTML (UI)
- CSS (styling)
- Vanilla JavaScript (behavior + persistence)

Todos are persisted in the browser using `localStorage`.

## Data model

- Storage key: `todos`
- Stored value: an array of strings
  - Example: `["Buy milk", "Read book"]`

## DOM structure (important)

- Input box: `#inputBox`
- Add/Edit button: `#addBtn`
- Todo container: `#todolist`
- Each todo item is rendered as:
  - `<li data-index="...">`
    - `<p>` (todo text)
    - `Edit` button
    - `Remove` button

## Behaviors

### Add

1. User types text into `#inputBox`.
2. Clicks `#addBtn` or presses **Enter**.
3. The text is appended to the `todos` array in `localStorage`.
4. The UI renders a new `<li>`.

### Edit

1. User clicks the `Edit` button on a todo.
2. The input box is populated with that todo text.
3. Clicking `#addBtn` again (or pressing **Enter**) updates the corresponding entry in `localStorage`.
4. The UI updates in place.

### Remove

1. User clicks `Remove`.
2. The selected todo is removed from the `todos` array in `localStorage`.
3. The list is re-rendered so that `data-index` stays aligned with the array.

## Keyboard support

- Press **Enter** inside `#inputBox` to call `addTodo()`.
- If the app is currently in Edit mode, **Enter** updates the selected todo.

## Notes / design choices

- Todo text is rendered with `textContent` to prevent HTML injection.
- After deletions, the list is re-rendered so indexes remain correct.
