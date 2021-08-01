let projectList = [];

const projectFactory = (name) => {
  let tasks = [];
  const addTask = (task) => {
    if (task === undefined) {
      return;
    } else {
      project.tasks.push(task);
    }
  };
  const deleteTask = (task) => {
    if (isNaN(task)) {
      return;
    } else {
      const pos = tasks.findIndex(task);
      tasks.splice(pos, 1);
    }
  };
  const changeName = (newName) => {
    if (newName.length <= 0) {
      return;
    } else {
      console.log(project);
      project.name = newName;
    }
  };
  const project = { name, tasks, changeName, addTask, deleteTask };
  projectList.push(project);
  return project;
};

export default { projectFactory, projectList };
