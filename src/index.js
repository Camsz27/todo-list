import "./style.css";
import { isPast } from "date-fns/esm";
import popUp from "./popUp";
import taskFactory from "./task";
import project from "./project";
import display from "./display";
import displayProject from "./sideBar";

const task1 = taskFactory("Clean house", "Aug 30");
//task1.changeDate("11 - 03 - 1990");
//console.log(task6);
const task2 = taskFactory("Do Homework", "Aug 2");
const task3 = taskFactory("Take dog for a walk", "Aug 13");
const task4 = taskFactory("Buy groceries", "Aug 17");

const project1 = project.projectFactory("Project 1");
project1.addTask(task1);
project1.addTask(task2);
const project2 = project.projectFactory("Project 2");
project2.addTask(task3);
project2.addTask(task4);

displayProject(project1);
displayProject(project2);
start();

function start() {
  const projects = document.querySelector("ul.projectList");
  const start = projects.children[0];
  start.classList.add("active");
  display.changeProject(project1);
}
