window.addEventListener("load", showGreeting);

function showGreeting() {
  const hour = new Date().getHours();
  const greeting = document.getElementById("greeting");

  if (hour < 12) {
    greeting.textContent = "Good morning!";
  } else if (hour < 18) {
    greeting.textContent = "Good afternoon!";
  } else {
    greeting.textContent = "Good evening!";
  }
}


const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  navMenu.classList.toggle("hidden");
}


const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", toggleTheme);

function toggleTheme() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "Switch to light mode";
  } else {
    themeBtn.textContent = "Switch to dark mode";
  }
}


const cards = document.querySelectorAll(".card");
const projectInfo = document.getElementById("project-info");
const defaultInfo = projectInfo.textContent;

cards.forEach(function (card) {
  card.addEventListener("mouseenter", showProjectInfo);
  card.addEventListener("mouseleave", resetProjectInfo);
});

function showProjectInfo(event) {
  projectInfo.textContent = event.currentTarget.dataset.info;
}

function resetProjectInfo() {
  projectInfo.textContent = defaultInfo;
}


const todoInput = document.getElementById("todo-input");
const inputHint = document.getElementById("input-hint");

todoInput.addEventListener("focus", showHint);
todoInput.addEventListener("blur", hideHint);

function showHint() {
  inputHint.classList.remove("hidden");
}

function hideHint() {
  inputHint.classList.add("hidden");
}


const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

addBtn.addEventListener("click", addTask);

todoInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const text = todoInput.value.trim();

  if (text === "") {
    return;
  }

  const li = document.createElement("li");

  const taskText = document.createElement("span");
  taskText.textContent = text;
  taskText.addEventListener("click", function () {
    li.classList.toggle("done");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✕";
  deleteBtn.className = "delete-btn";
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(taskText);
  li.appendChild(deleteBtn);
  todoList.appendChild(li);

  todoInput.value = "";
}