import './style.css';
import add from './modules/add_task.js';
import displayOnLoad from './modules/display_tasks_onLoad.js';
import editTask from './modules/edit_content.js';

add();
displayOnLoad();

document.addEventListener('DOMContentLoaded', () => {
  editTask();
});

if (module.hot) {
  module.hot.accept();
}
