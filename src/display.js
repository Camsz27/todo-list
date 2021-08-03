const taskList = document.querySelector("#taskList");
let active;

function displayTask(task) {
  // Reference for place to append new task
  const addTask = document.querySelector(".addTask");

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
  deleteIconContainer.addEventListener("click", deleteTask);
  return deleteIconContainer;
}

function deleteTask() {
  this.parentNode.parentNode.remove();
  const taskName = this.parentNode.querySelector(".taskName").textContent;
  active.tasks = active.tasks.filter((task) => task.name !== taskName);
}

function changeProject(project) {
  const header = document.querySelector("h1.display");
  header.textContent = project.name;
  deleteTasks();
  addProjectTasks(project);
  active = project;
}

function addProjectTasks(project) {
  project.tasks.forEach((task) => displayTask(task));
}

function deleteTasks() {
  const listRemove = Array.from(taskList.children);
  if (listRemove.length === 1) {
    return;
  }
  listRemove.forEach((element) =>
    element.classList.contains("addTask") ? null : element.remove()
  );
}

function getActive() {
  return active;
}

function checked(e) {
  e.target.parentNode.parentNode.classList.toggle("completed");
  const task = active.tasks.filter(
    (task) => e.target.getAttribute("id") === task.name
  )[0];
  task.completed = !task.completed;
}

export default { displayTask, deleteTask, changeProject, getActive };
