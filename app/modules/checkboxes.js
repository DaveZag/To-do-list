import { checkboxes } from './selectors.js';

// change checkbox state when checked or unchecked
export default function checkState(element) {
  const item = element.parentElement.children[1].innerText;
  const tasks = localStorage.getItem('tasks')
    ? JSON.parse(localStorage.getItem('tasks'))
    : [];
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

// check if checkbox is checked on load then style the checked task
function checkOnLoad() {
  const arrChecks = [...checkboxes];
  arrChecks.forEach((check) => {
    if (check.hasAttribute('checked')) {
      check.parentElement.classList.add('completed');
    }
  });
}

export { checkOnLoad };
