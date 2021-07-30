import "./style.css";
import { isPast } from "date-fns/esm";
import popUp from "./popUp";
import taskFactory from "./task";
import projectFactory from "./project";
import displayTask from "./display";

const task1 = taskFactory("Really long name", "Aug 30");
//task1.changeDate("11 - 03 - 1990");
//console.log(task6);

const task2 = taskFactory("Attempt", "Jul 30");
/*console.log(task2);

let trial1 = projectFactory("Project 1");
trial1.changeName("change is good");
trial1.addTask();
trial1.addTask(task1);
trial1.addTask(task2);
console.log(trial1); */

displayTask(task1);
displayTask(task1);
displayTask(task2);
displayTask(task2);
displayTask(task2);
displayTask(task1);
