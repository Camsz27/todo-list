import popUp from "./popUp";
import project from "./project";

let active;
let taskEdit;

function displayTask(task) {
  // Reference for place to append new task
  let taskList = document.querySelector("#taskList");
  let addTask = document.querySelector(".addTask");

  // Creates elements for new task
  const newTask = document.createElement("li");
  newTask.classList.add("display");
  const taskItems = document.createElement("ul");
  taskItems.classList.add("displayItems");
  if (task.completed) {
    taskItems.classList.add("completed");
  }
  taskItems.append(
    addCheckbox(task),
    addTaskInfo(task),
    addEditIcon(),
    addDeleteIcon()
  );
  newTask.append(taskItems);
  taskList.insertBefore(newTask, addTask);
}

function addCheckbox(task) {
  const item = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", task.name);
  checkbox.setAttribute("value", "yes");
  checkbox.classList.add("checkbox");
  checkbox.addEventListener("click", checked);
  item.append(checkbox);
  if (task.completed) {
    checkbox.checked = true;
  }
  return item;
}

function addTaskInfo(task) {
  const taskInfo = document.createElement("li");
  const taskName = document.createElement("p");
  taskName.classList.add("taskName");
  taskName.textContent = task.name;
  taskName.classList.remove("taskDate");
  const taskDate = document.createElement("p");
  taskDate.classList.add("taskDate");
  taskDate.textContent = task.date;
  taskInfo.append(taskName, taskDate);
  return taskInfo;
}

function addEditIcon() {
  const editIconContainer = document.createElement("li");
  editIconContainer.classList.add("taskIconContainer");
  const editIcon = document.createElement("img");
  editIcon.classList.add("editIcon");
  editIcon.setAttribute("src", "../src/images/edit.svg");
  editIcon.addEventListener("click", taskEdited);
  editIcon.addEventListener("click", popUp.editTask);
  editIconContainer.append(editIcon);
  return editIconContainer;
}

function addDeleteIcon() {
  const deleteIconContainer = document.createElement("li");
  deleteIconContainer.classList.add("taskIconContainer");
  const deleteIcon = document.createElement("img");
  deleteIcon.classList.add("deleteIcon");
  deleteIcon.setAttribute("src", "../src/images/delete.svg");
  deleteIconContainer.append(deleteIcon);
  deleteIcon.addEventListener("click", deleteTask);
  return deleteIconContainer;
}

function deleteTask() {
  this.parentNode.parentNode.parentNode.remove();
  const taskName =
    this.parentNode.parentNode.querySelector(".taskName").textContent;
  active.tasks = active.tasks.filter((task) => task.name !== taskName);
}

// Changes the name and tasks that are shown according to the project
function changeProject(project) {
  const div = document.querySelector("#display");
  if (div.children.length > 1) {
    Array.from(div.children).map((element) => element.remove());
  }
  addProjectContent();
  addProjectTasks(project);
  addProjectHeader(project);
  active = project;
}

function addProjectTasks(project) {
  project.tasks.forEach((task) => displayTask(task));
}

function addProjectHeader(project) {
  const display = document.querySelector("#display");
  const headerContent = document.createElement("a");
  headerContent.classList.add("displayHeader");

  const header = document.createElement("h1");
  header.classList.add("display");
  header.textContent = project.name;

  const editIcon = document.createElement("img");
  editIcon.setAttribute("id", "displayHeaderIcon");
  editIcon.setAttribute("alt", "edit icon");
  editIcon.setAttribute("src", "../src/images/edit.svg");
  editIcon.addEventListener("click", popUp.editProject);

  headerContent.append(header, editIcon);
  display.insertBefore(headerContent, display.firstChild);
}

function addProjectContent() {
  const div = document.querySelector("#display");
  const taskContainer = document.createElement("ul");
  taskContainer.setAttribute("id", "taskList");
  taskContainer.classList.add("display");
  const addTaskContainer = document.createElement("li");
  addTaskContainer.classList.add("addTask");
  const addTask = document.createElement("img");
  addTask.setAttribute("src", "../src/images/add.svg");
  addTask.setAttribute("alt", "add icon");
  addTask.addEventListener("click", popUp.taskPopUp);
  const text = document.createElement("h4");
  text.textContent = "Add Task";
  text.addEventListener("click", popUp.taskPopUp);

  addTaskContainer.append(addTask, text);
  taskContainer.append(addTaskContainer);
  div.append(taskContainer);
}

// Returns the project that is currently active
function getActive() {
  return active;
}

// Changes the status of the task when checked or unchecked
function checked(e) {
  e.target.parentNode.parentNode.classList.toggle("completed");
  const task = active.tasks.filter(
    (task) => e.target.getAttribute("id") === task.name
  )[0];
  task.completed = !task.completed;
}

function changeProjectName() {
  const newName = document.querySelector("#nameInput").value;
  active.changeName(newName);
  const header = document.querySelector("h1.display");
  header.textContent = newName;
  const projectSidebar = document.querySelector(".active");
  projectSidebar.textContent = newName;
  projectSidebar.setAttribute("id", newName);
}

function deleteProject() {
  const projectDel = document.querySelector(".active");
  projectDel.remove();
  const display = document.querySelector("#display");
  Array.from(display.children).forEach((element) => element.remove());
  project.projectList = project.projectList.filter((element) =>
    element === active ? null : element
  );
}

// Assigns to the variable the task that is currently being edited
function taskEdited() {
  taskEdit = this.parentNode.parentNode.firstChild.firstChild;
}

function changeTaskInfo() {
  const taskInfo = taskEdit.parentNode.parentNode.children[1];
  const nameDisplay = taskInfo.children[0];
  const dateDisplay = taskInfo.children[1];
  const task = active.tasks.filter(
    (task) => taskEdit.getAttribute("id") === task.name
  )[0];
  const name = document.querySelector("#nameInput").value;
  let date = new Date(document.querySelector("#dateInput").value);
  task.changeDate(date);
  task.changeName(name);
  nameDisplay.textContent = task.name;
  dateDisplay.textContent = task.date;
  taskEdit.setAttribute("id", task.name);
}

export default {
  displayTask,
  deleteTask,
  changeProject,
  getActive,
  changeProjectName,
  deleteProject,
  changeTaskInfo,
};
