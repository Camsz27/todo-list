const taskFactory = (name, date) => {
  let completed = false;
  const changeName = (newName) => {
    if (newName.length <= 0) {
      return;
    } else {
      task.name = newName;
    }
  };
  const changeDate = (newDate) => {
    if (isNaN(newDate.getTime())) {
      return;
    } else {
      task.date = newDate.toDateString().slice(4, 10);
    }
  };
  const changeComplete = () => {
    task.completed = true;
  };
  const task = {
    name,
    date,
    completed,
    changeName,
    changeDate,
    changeComplete,
  };
  return task;
};

export default taskFactory;
