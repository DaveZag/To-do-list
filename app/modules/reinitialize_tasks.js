import { delAllBtn, todos } from './selectors.js';

export default function clearAllTasks() {
  delAllBtn.addEventListener('click', () => {
    if (
      localStorage.getItem('tasks') !== null
      && localStorage.getItem('tasks') !== '[]'
    ) {
      delAllBtn.classList.add('rotateIcon');
    } else {
      delAllBtn.classList.remove('rotateIcon');
    }
    localStorage.clear();
    const arrTodo = [...todos];
    setTimeout(() => {
      arrTodo.forEach((element) => {
        element.remove();
      });
    }, 400);
  });
}
