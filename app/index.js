import './style.css';
import add from './modules/add.js';
import displayOnLoad from './modules/display_tasks_onLoad.js';
import editTask from './modules/edit_content.js';
import deleteFromDom from './modules/delete_from_DOM.js';
import { checkState, checkOnLoad } from './modules/checkboxes.js';
import clearCompleted from './modules/clear_all_completed.js';
import clearAllTasks from './modules/reinitialize_tasks.js';
import { taskInput, errorMsg, todoList } from './modules/selectors.js';

taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    if (taskInput.value !== '') {
      add(taskInput);
    } else {
      errorMsg.classList.add('show');
    }
  }
});

// hide delete btn
taskInput.addEventListener('input', () => {
  errorMsg.classList.remove('show');
});

// delete from dom
todoList.addEventListener('click', (e) => {
  const item = e.target;
  const parent = item.parentElement.parentElement;

  // remove element from Dom when button is clicked
  if (
    item.nodeName === 'BUTTON'
    && item.children[0].classList.contains('todo-delete')
  ) {
    deleteFromDom(parent);
  }

  // display or hide delete button on todo focus/blur
  if (item.nodeName === 'LI') {
    const delBtn = item.children[1].children[1].children[0];
    const moveBtn = item.children[1].children[0].children[0];
    const todos = todoList.querySelectorAll('.todo');

    todos.forEach((todo) => {
      if (item === todo) {
        delBtn.classList.add('show');
        moveBtn.classList.add('hide');
      } else {
        todo.children[1].children[0].children[0].classList.remove('hide');
        todo.children[1].children[1].children[0].classList.remove('show');
      }
    });
  }
});

displayOnLoad();
clearAllTasks();

document.addEventListener('DOMContentLoaded', () => {
  editTask();
  checkState();
  checkOnLoad();
  clearCompleted();
});

if (module.hot) {
  module.hot.accept();
}
