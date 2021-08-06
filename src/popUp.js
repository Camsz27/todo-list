import taskFactory from './task';
import project from './project';
import displayProject from './sideBar';
import display from './display';
import deleteIconImg from './images/delete.svg';

const body = document.querySelector('body');

// Adds event listeners to be able to add projects
const projectButtonText = document.querySelector('h4.addProject');
projectButtonText.addEventListener('click', projectPopUp);
const projectButtonIcon = document.querySelector('img.addIcon');
projectButtonIcon.addEventListener('click', projectPopUp);

// Shows/Creates the dialogue when someone clicks the add icon on project
function projectPopUp() {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  const content = document.createElement('div');
  content.classList.add('modalContent');

  const header = document.createElement('h3');
  header.textContent = 'Add project';
  header.classList.add('popUpHeader');

  const form = document.createElement('form');
  form.setAttribute('onSubmit', 'return false');
  const nameLabel = document.createElement('label');
  nameLabel.setAttribute('for', 'name');
  nameLabel.textContent = 'Name';
  const nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('id', 'nameInput');
  nameInput.setAttribute('required', '');

  const footer = document.createElement('div');
  footer.classList.add('footer');
  const cancelButton = document.createElement('button');
  cancelButton.textContent = 'Cancel';
  cancelButton.addEventListener('click', removePopUp);
  const addButton = document.createElement('button');
  addButton.setAttribute('type', 'submit');
  addButton.classList.add('addButton');
  addButton.textContent = 'Add';
  addButton.addEventListener('click', createProject);
  addButton.addEventListener('click', removePopUp);

  footer.append(cancelButton, addButton);
  form.append(nameLabel, nameInput, footer);
  content.append(header, form);
  modal.append(content);
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      createProject();
      removePopUp();
    }
  });
  body.appendChild(modal);
}

function removePopUp() {
  document.querySelector('.modal').remove();
}

// Shows/Creates the dialogue when someone clicks the add icon on task
function taskPopUp() {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  const content = document.createElement('div');
  content.classList.add('modalContent');

  const header = document.createElement('h3');
  header.textContent = 'Add task';
  header.classList.add('popUpHeader');

  const form = document.createElement('form');
  form.setAttribute('onSubmit', 'return false');
  const nameLabel = document.createElement('label');
  nameLabel.setAttribute('for', 'nameInput');
  nameLabel.textContent = 'Name';
  const nameInput = document.createElement('input');
  nameInput.setAttribute('id', 'nameInput');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('required', '');

  const dateLabel = document.createElement('label');
  dateLabel.setAttribute('for', 'dateInput');
  dateLabel.textContent = 'Date';
  const dateInput = document.createElement('input');
  dateInput.setAttribute('id', 'dateInput');
  dateInput.setAttribute('type', 'date');

  const footer = document.createElement('div');
  footer.classList.add('footer');
  const cancelButton = document.createElement('button');
  cancelButton.textContent = 'Cancel';
  cancelButton.addEventListener('click', removePopUp);
  const addButton = document.createElement('button');
  addButton.setAttribute('type', 'submit');
  addButton.classList.add('addButton');
  addButton.textContent = 'Add';
  addButton.addEventListener('click', createTask);
  addButton.addEventListener('click', removePopUp);

  footer.append(cancelButton, addButton);
  form.append(nameLabel, nameInput, dateLabel, dateInput, footer);
  content.append(header, form);
  modal.append(content);
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      createTask();
      removePopUp();
    }
  });
  body.append(modal);
}

function createTask() {
  const name = document.querySelector('#nameInput').value;
  let date = new Date(document.querySelector('#dateInput').value);
  if (name === '' || isNaN(date.getTime)) {
    alert('Please fill all the fields');
    return;
  }
  date = date.toDateString().slice(4, 10);
  const task = taskFactory(name, date);
  const project = display.getActive();
  project.addTask(task);
  display.displayTask(task);
}

function createProject() {
  const name = document.querySelector('#nameInput').value;
  const newProject = project.projectFactory(name);
  displayProject(newProject);
}

// Shows/Creates the dialogue when someone clicks the edit icon on project
function editProject() {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  const content = document.createElement('div');
  content.classList.add('modalContent');

  const header = document.createElement('div');
  header.setAttribute('id', 'headerText');
  const headerText = document.createElement('h3');
  headerText.textContent = 'Edit project';
  headerText.classList.add('popUpHeader');
  const deleteButton = document.createElement('img');
  deleteButton.setAttribute('id', 'deleteButton');
  deleteButton.setAttribute('src', deleteIconImg);
  deleteButton.addEventListener('click', display.deleteProject);
  deleteButton.addEventListener('click', removePopUp);

  const form = document.createElement('form');
  form.setAttribute('onSubmit', 'return false');
  const nameLabel = document.createElement('label');
  nameLabel.setAttribute('for', 'name');
  nameLabel.textContent = 'New name';
  const nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('id', 'nameInput');
  nameInput.setAttribute('required', '');

  const footer = document.createElement('div');
  footer.classList.add('footer');
  const cancelButton = document.createElement('button');
  cancelButton.textContent = 'Cancel';
  cancelButton.addEventListener('click', removePopUp);
  const addButton = document.createElement('button');
  addButton.setAttribute('type', 'submit');
  addButton.classList.add('addButton');
  addButton.textContent = 'Save';
  addButton.addEventListener('click', display.changeProjectName);
  addButton.addEventListener('click', removePopUp);

  header.append(headerText, deleteButton);
  footer.append(cancelButton, addButton);
  form.append(nameLabel, nameInput, footer);
  content.append(header, form);
  modal.append(content);
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      display.changeProjectName();
      removePopUp();
    }
  });
  body.appendChild(modal);
}

// Shows/Creates the dialogue when someone clicks the edit icon on task
function editTask() {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  const content = document.createElement('div');
  content.classList.add('modalContent');

  const headerText = document.createElement('h3');
  headerText.textContent = 'Edit task';
  headerText.classList.add('popUpHeader');

  const form = document.createElement('form');
  form.setAttribute('onSubmit', 'return false');
  const nameLabel = document.createElement('label');
  nameLabel.setAttribute('for', 'name');
  nameLabel.textContent = 'New name';
  const nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('id', 'nameInput');
  nameInput.setAttribute('required', '');
  const dateLabel = document.createElement('label');
  dateLabel.setAttribute('for', 'dateInput');
  dateLabel.textContent = 'Date';
  const dateInput = document.createElement('input');
  dateInput.setAttribute('id', 'dateInput');
  dateInput.setAttribute('type', 'date');

  const footer = document.createElement('div');
  footer.classList.add('footer');
  const cancelButton = document.createElement('button');
  cancelButton.textContent = 'Cancel';
  cancelButton.addEventListener('click', removePopUp);
  const addButton = document.createElement('button');
  addButton.setAttribute('type', 'submit');
  addButton.classList.add('addButton');
  addButton.textContent = 'Save';
  addButton.addEventListener('click', display.changeTaskInfo);
  addButton.addEventListener('click', removePopUp);

  footer.append(cancelButton, addButton);
  form.append(nameLabel, nameInput, dateLabel, dateInput, footer);
  content.append(headerText, form);
  modal.append(content);
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      display.changeTaskInfo();
      removePopUp();
    }
  });
  body.appendChild(modal);
}

export default { editProject, taskPopUp, editTask };
