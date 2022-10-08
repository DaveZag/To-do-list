import clearAllTasks from './reinitialize_tasks.js';
import {
  taskInput, errorMsg, todoList, clearBtn,
} from './selectors.js';
import deleteFromDom from './delete_from_DOM.js';
import add from './add.js';
import displayOnLoad from './display_tasks_onLoad.js';
import editTask from './edit_task.js';
import checkState, { checkOnLoad } from './checkboxes.js';
import clearCompleted from './clear_all_completed.js';

const base = () => {
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

  // edit task
  todoList.addEventListener('click', (e) => {
    const itemToEdit = e.target;
    const parent = itemToEdit.parentElement.parentElement.parentElement;
    let textContent;

    if (itemToEdit.classList.contains('todo-editable')) {
      itemToEdit.addEventListener('input', () => {
        textContent = itemToEdit.innerText;
        editTask(parent, textContent);
      });
    }
  });

  // event listene for checkboxes
  todoList.addEventListener('click', (e) => {
    if (e.target.nodeName === 'INPUT') {
      const element = e.target;
      checkState(element);
    }
  });

  // Event listener for function clearAll_Completed
  clearBtn.addEventListener('click', () => {
    clearCompleted();
  });

  displayOnLoad();
  clearAllTasks();
  document.addEventListener('DOMContentLoaded', () => {
    checkOnLoad();
  });
};

export default base;
