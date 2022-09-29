import { editable } from './selectors.js';

export default function editTask() {
  const arrEdit = [...editable];
  let editedText;
  arrEdit.forEach((todo) => {
    todo.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        editedText = todo.innerText;
      }
      return editedText;
    });
  });
}
