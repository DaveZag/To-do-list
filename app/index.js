import './style.css';
import add from './modules/add_task.js';
import displayOnLoad from './modules/display_tasks_onLoad.js';
import editTask from './modules/edit_content.js';
import deleteFromDom from './modules/delete_from_DOM.js';
import { checkState, checkOnLoad } from './modules/checkboxes.js';
import clearCompleted from './modules/clear_all_completed.js';
import clearAllTasks from './modules/reinitialize_tasks.js';

add();
displayOnLoad();
clearAllTasks();

document.addEventListener('DOMContentLoaded', () => {
  editTask();
  deleteFromDom();
  checkState();
  checkOnLoad();
  clearCompleted();
});

if (module.hot) {
  module.hot.accept();
}
