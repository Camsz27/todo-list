const taskList = document.querySelector("#taskList");

function displayTask(task) {
  // Reference for place to append new task
  const addTask = document.querySelector(".addTask");

  // Creates elements for new task
  const newTask = document.createElement("li");
  newTask.classList.add("display");
  const taskItems = document.createElement("ul");
  taskItems.classList.add("displayItems");

  taskItems.append(addTaskInfo(task), addEditIcon(), addDeleteIcon());
  newTask.append(taskItems);
  taskList.insertBefore(newTask, addTask);
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
}

function changeProject() {
  const header = document.querySelector("h1.display");
  header.textContent = this.textContent;
  deleteTasks();
}

function deleteTasks() {
  const listRemove = Array.from(taskList.children);
  listRemove.forEach((element) =>
    element.classList.contains("addTask") ? null : element.remove()
  );
}

export default { displayTask, deleteTask, changeProject };
