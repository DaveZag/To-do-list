import { editable } from './selectors.js';

export default function editTask() {
  const arrEdit = [...editable];

  let tasks;

  if (
    localStorage.getItem('tasks') !== null
    && localStorage.getItem('tasks') !== '[]'
  ) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  arrEdit.forEach((element) => {
    const itemToEdit = element.innerText;
    let editedText;
    let editedArr;
    element.addEventListener('input', () => {
      editedText = element.innerText;
      editedArr = tasks.map((task) => {
        if (task.desc === itemToEdit) {
          //  return modified object property
          return { ...task, desc: `${editedText}` };
        }
        return task;
      });
      localStorage.setItem('tasks', JSON.stringify(editedArr));
    });
  });
}
