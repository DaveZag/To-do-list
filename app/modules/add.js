import saveToLocal from './save_to_local.js';
import displayOnAdd from './display_tasks_onAdd.js';
import Task from './task_template.js';

function add(input) {
  const counter = localStorage.getItem('tasks')
    ? JSON.parse(localStorage.getItem('tasks')).length + 1
    : 1;
  const list = document.querySelector('ul');
  const newTask = new Task(input.value.trim());
  newTask.id = counter;
  displayOnAdd(newTask, list);
  saveToLocal(newTask);
  input.value = '';
}

export default add;
