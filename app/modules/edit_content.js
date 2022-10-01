import { todoList } from './selectors.js';

export default function editTask() {
  let tasks;

  todoList.addEventListener('click', (e) => {
    if (
      localStorage.getItem('tasks') !== null
      || localStorage.getItem('tasks') !== '[]'
    ) {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    const itemToEdit = e.target;
    const textContent = e.target.innerText;
    let editedText;
    if (e.target.classList.contains('todo-editable')) {
      itemToEdit.addEventListener('input', () => {
        editedText = itemToEdit.innerText;

        const editedArray = tasks.map((task) => {
          if (task.desc === textContent) {
            //  return modified object property
            return { ...task, desc: `${editedText}` };
          }
          return task;
        });

        localStorage.setItem('tasks', JSON.stringify(editedArray));
      });
    }
  });
}
