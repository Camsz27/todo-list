import "./style.css";
import { isPast } from "date-fns/esm";
import popUp from "./popUp";
import taskFactory from "./task";
import projectFactory from "./project";
import display from "./display";
import displayProject from "./sideBar";

const task1 = taskFactory("Reaaaaaaally loooooong nameeeeeee", "Aug 30");
//task1.changeDate("11 - 03 - 1990");
//console.log(task6);

const task2 = taskFactory("Attempt", "Jul 30");

const project1 = projectFactory("Project 1");

display.displayTask(task1);
display.displayTask(task2);
display.deleteTask(task1);
displayProject(project1);
