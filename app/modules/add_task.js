import Task from './task_template.js';
import { taskInput, errorMsg } from './selectors.js';
import saveToLocal from './save_to_local.js';
import displayOnAdd from './display_tasks_onAdd.js';
import { counter } from './taskArr.js';
import editTask from './edit_content.js';

// Create new task on keyboard enter and call funtion to save to Browser's localStorage
function add() {
  let taskId = counter;

  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      if (taskInput.value !== '') {
        const newTask = new Task(taskInput.value.trim());
        newTask.id = taskId;
        displayOnAdd(newTask);
        saveToLocal(newTask);
        taskInput.value = '';
        taskId += 1;
      } else {
        errorMsg.classList.add('show');
      }
      editTask();
    }
  });

  taskInput.addEventListener('input', () => {
    errorMsg.classList.remove('show');
  });
}

export default add;
