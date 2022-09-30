import './style.css';
import add from './modules/add_task.js';
import displayOnLoad from './modules/display_tasks_onLoad.js';
import editTask from './modules/edit_content.js';
import deleteFromDom from './modules/delete_from_DOM.js';

add();
displayOnLoad();

document.addEventListener('DOMContentLoaded', () => {
  editTask();
  deleteFromDom();
});

if (module.hot) {
  module.hot.accept();
}
