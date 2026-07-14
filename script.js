const inputBox = document.getElementById("inputBox");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todolist");

// Holds the index in localStorage when user is editing.
// null => normal add mode
let editIndex = null;

// Reads todos from localStorage.
const getTodos = () => {
  const raw = localStorage.getItem("todos");
  return raw ? JSON.parse(raw) : [];
};

// Writes the whole todos array back to localStorage.
const setTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const createTodoLi = (todoText, index) => {
  const li = document.createElement("li");
  li.dataset.index = String(index);

  const p = document.createElement("p");
  // Use textContent to avoid HTML injection
  p.textContent = todoText;
  li.appendChild(p);

  const editBtn = document.createElement("button");
  editBtn.type = "button";
  editBtn.innerText = "Edit";
  editBtn.classList.add("btn", "editBtn");
  li.appendChild(editBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.innerText = "Remove";
  deleteBtn.classList.add("btn", "deleteBtn");
  li.appendChild(deleteBtn);

  return li;
};

// Function to add/update todo
const addTodo = () => {
  const inputText = inputBox.value.trim();

  if (inputText.length <= 0) {
    alert("You must write something in your to do");
    return false;
  }

  const todos = getTodos();

  if (addBtn.value === "Edit" && editIndex !== null) {
    todos[editIndex] = inputText;
    setTodos(todos);

    // update UI
    const li = todoList.querySelector(`li[data-index="${editIndex}"]`);
    if (li) {
      li.querySelector("p").textContent = inputText;
    }

    addBtn.value = "Task";
    editIndex = null;
  } else {
    todos.push(inputText);
    setTodos(todos);

    todoList.appendChild(createTodoLi(inputText, todos.length - 1));
  }

  inputBox.value = "";
};

// Function to update : (Edit/Delete) todo
const updateTodo = (e) => {
  const btn = e.target;
  if (!(btn instanceof HTMLElement)) return;

  const li = btn.closest("li");
  if (!li) return;

  const index = Number(li.dataset.index);
  if (Number.isNaN(index)) return;

  const todos = getTodos();

  if (btn.innerHTML === "Remove") {
    todos.splice(index, 1);
    setTodos(todos);
    // Re-render to keep dataset indexes correct
    todoList.innerHTML = "";
    todos.forEach((t, i) => todoList.appendChild(createTodoLi(t, i)));

    if (editIndex === index) {
      addBtn.value = "Task";
      editIndex = null;
    }
  }

  if (btn.innerHTML === "Edit") {
    inputBox.value = todos[index];
    inputBox.focus();
    addBtn.value = "Edit";
    editIndex = index;
  }
};

// Function to get local todo
const getLocalTodos = () => {
  const todos = getTodos();
  todoList.innerHTML = "";
  todos.forEach((todo, index) => {
    todoList.appendChild(createTodoLi(todo, index));
  });
};

document.addEventListener("DOMContentLoaded", getLocalTodos);
addBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", updateTodo);

// Keyboard support: press Enter to add/update
inputBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});
