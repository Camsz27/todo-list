import "./style.css";
import popUp from "./popUp";
import taskFactory from "./task";
import projectFactory from "./project";

const task1 = taskFactory("task 1", "11/07/2022");
task1.changeName("asdf");
//task1.changeDate(11 / 03 / 1990);
console.log(task1);

let trial1 = projectFactory("Project 1");
trial1.changeName("change is good");
trial1.addTask(4);
trial1.addTask(5);
console.log(trial1);
