import display from "./display";

function displayProject(project) {
  // References for place to append new task
  const projectList = document.querySelector("ul.projectList");

  // Creates elements for new task
  const projectItem = document.createElement("li");
  projectItem.classList.add("projectItem");
  projectItem.addEventListener("click", selectProject);
  projectItem.addEventListener("click", display.changeProject);
  projectItem.setAttribute("id", project.name);
  projectItem.textContent = project.name;
  projectList.append(projectItem);
}

function selectProject() {
  const projects = Array.from(this.parentNode.children);
  projects.forEach((project) => project.classList.remove("active"));
  this.classList.toggle("active");
}

export default displayProject;
