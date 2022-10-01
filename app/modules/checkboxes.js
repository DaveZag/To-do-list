import { todoList, checkboxes } from './selectors.js';

let tasks;
function checkState() {
  todoList.addEventListener('click', (e) => {
    if (
      localStorage.getItem('tasks') !== null
      && localStorage.getItem('tasks') !== '[]'
    ) {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    if (e.target.nodeName === 'INPUT') {
      const element = e.target;
      const item = element.parentElement.innerText;

      if (element.checked) {
        element.parentElement.classList.add('completed');

        const editedArr = tasks.map((task) => {
          if (task.desc === item) {
            //  return modified object property
            return { ...task, completed: element.checked };
          }
          return task;
        });
        localStorage.setItem('tasks', JSON.stringify(editedArr));
      } else {
        element.parentElement.classList.remove('completed');

        const editedArr = tasks.map((task) => {
          if (task.desc === item) {
            //  return modified object property
            return { ...task, completed: false };
          }
          return task;
        });
        localStorage.setItem('tasks', JSON.stringify(editedArr));
      }
    }
  });
}

// check if checkbox is checked on load then style the checked task
function checkOnLoad() {
  const arrChecks = [...checkboxes];
  arrChecks.forEach((check) => {
    if (check.hasAttribute('checked')) {
      check.parentElement.classList.add('completed');
    }
  });
}

export { checkState, checkOnLoad };
