import { clearBtn } from './selectors.js';

function clearCompleted() {
  clearBtn.addEventListener('click', () => {
    // delete from DOM
    const checkboxes = [...document.getElementsByClassName('check')];
    checkboxes.forEach((check) => {
      if (check.checked === true) {
        check.parentElement.parentElement.parentElement.remove();
      }
    });

    // delete from localStorage
    let tasks;
    if (
      localStorage.getItem('tasks') !== null
      && localStorage.getItem('tasks') !== '[]'
    ) {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    // const arrClear = [...checkboxes];
    const arrUnchecked = tasks.filter((element) => element.completed !== true);
    localStorage.setItem('tasks', JSON.stringify(arrUnchecked));
  });
}

export default clearCompleted;
