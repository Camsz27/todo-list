function displayProject(project) {
  // References for place to append new task
  const projectList = document.querySelector("ul.projectList");
  const addProject = document.querySelector("a.addProject");

  // Creates elements for new task
  const projectItem = document.createElement("li");
  projectItem.classList.add("projectItem");
  projectItem.textContent = project.name;
  projectList.append(projectItem);
}

export default displayProject;
