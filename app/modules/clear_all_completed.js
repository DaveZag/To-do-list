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
    const tasks = localStorage.getItem('tasks')
      ? JSON.parse(localStorage.getItem('tasks'))
      : [];
    const arrUnchecked = tasks.filter((element) => element.completed !== true);
    localStorage.setItem('tasks', JSON.stringify(arrUnchecked));
  });
}

export default clearCompleted;
