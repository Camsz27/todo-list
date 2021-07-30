import taskFactory from "./task";

const body = document.querySelector("body");

// Adds event listeners to be able to add projects
const projectButtonText = document.querySelector("h4.addProject");
projectButtonText.addEventListener("click", projectPopUp);
const projectButtonIcon = document.querySelector("img.addIcon");
projectButtonIcon.addEventListener("click", projectPopUp);

// Adds event listeners to be able to add tasks
const inboxAddButton = document.querySelector("#addIcon");
inboxAddButton.addEventListener("click", taskPopUp);
const taskButtonText = document.querySelector(".addTask h4");
taskButtonText.addEventListener("click", taskPopUp);
const taskButtonIcon = document.querySelector(".addTask img");
taskButtonIcon.addEventListener("click", taskPopUp);

function projectPopUp() {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  const content = document.createElement("div");
  content.classList.add("modalContent");

  const header = document.createElement("h3");
  header.textContent = "Add project";
  header.classList.add("popUpHeader");

  const form = document.createElement("form");
  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "name");
  nameLabel.textContent = "Name";
  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("required", "");

  const footer = document.createElement("div");
  footer.classList.add("footer");
  const cancelButton = document.createElement("button");
  cancelButton.textContent = "Cancel";
  cancelButton.addEventListener("click", removePopUp);
  const addButton = document.createElement("button");
  addButton.setAttribute("type", "submit");
  addButton.classList.add("addButton");
  addButton.textContent = "Add";
  //addButton.addEventListener("click", removePopUp);

  footer.append(cancelButton, addButton);
  form.append(nameLabel, nameInput, footer);
  content.append(header, form);
  modal.append(content);
  body.append(modal);
}

function removePopUp() {
  document.querySelector(".modal").remove();
}

function taskPopUp() {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  const content = document.createElement("div");
  content.classList.add("modalContent");

  const header = document.createElement("h3");
  header.textContent = "Add task";
  header.classList.add("popUpHeader");

  const form = document.createElement("form");
  form.setAttribute("onSubmit", "return false");
  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "nameInput");
  nameLabel.textContent = "Name";
  const nameInput = document.createElement("input");
  nameInput.setAttribute("id", "nameInput");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("required", "");

  const dateLabel = document.createElement("label");
  dateLabel.setAttribute("for", "dateInput");
  dateLabel.textContent = "Date";
  const dateInput = document.createElement("input");
  dateInput.setAttribute("id", "dateInput");
  dateInput.setAttribute("type", "date");

  const footer = document.createElement("div");
  footer.classList.add("footer");
  const cancelButton = document.createElement("button");
  cancelButton.textContent = "Cancel";
  cancelButton.addEventListener("click", removePopUp);
  const addButton = document.createElement("button");
  addButton.setAttribute("type", "submit");
  addButton.classList.add("addButton");
  addButton.textContent = "Add";
  addButton.addEventListener("click", createTask);
  addButton.addEventListener("click", removePopUp);

  footer.append(cancelButton, addButton);
  form.append(nameLabel, nameInput, dateLabel, dateInput, footer);
  content.append(header, form);
  modal.append(content);
  body.append(modal);
}

function createTask() {
  const name = document.querySelector("#nameInput").value;
  const date = document.querySelector("#dateInput").value;
  console.log(name);
  console.log(date);
  const task = taskFactory(name, date);
  console.log("this is working".length);
  console.log(task.name);
  console.log(task.date);
}
