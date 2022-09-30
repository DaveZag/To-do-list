import { editable, todoList } from './selectors.js';

export default function editTask() {
  const arrEdit = [...editable];
  let editedText;

  todoList.addEventListener('click', (event) => {
    const itemToEdit = event.target.innerText;

    arrEdit.forEach((todo) => {
      todo.addEventListener('keypress', (e) => {
        let tasks;

        // If Enter is pressed
        if (e.key === 'Enter') {
          e.preventDefault();

          if (
            localStorage.getItem('tasks') !== null
            || localStorage.getItem('tasks') !== '[]'
          ) {
            tasks = JSON.parse(localStorage.getItem('tasks'));
          }
          editedText = todo.innerText;

          // check if element the target is in localStorage then store edited text
          const editedArr = tasks.map((task) => {
            if (task.desc === itemToEdit) {
              // 👇️ change value of name property
              return { ...task, desc: `${editedText}` };
            }
            return task;
          });

          // save the edited array to local storage
          localStorage.setItem('tasks', JSON.stringify(editedArr));
          e.target.blur();
        }
      });
    });
  });
}
