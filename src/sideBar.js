import display from "./display";
import project from "./project";

function displayProject(project) {
  // References for place to append new prject
  const projectList = document.querySelector("ul.projectList");

  // Creates elements for new project
  const projectItem = document.createElement("li");
  projectItem.classList.add("projectItem");
  projectItem.addEventListener("click", selectProject);
  projectItem.setAttribute("id", project.name);
  projectItem.textContent = project.name;
  projectList.append(projectItem);
}

function selectProject() {
  const projects = Array.from(this.parentNode.children);
  projects.forEach((project) => project.classList.remove("active"));
  this.classList.toggle("active");
  const activeProject = project.projectList.filter(
    (project) => project.name === this.getAttribute("id")
  );
  display.changeProject(activeProject[0]);
}

export default displayProject;
