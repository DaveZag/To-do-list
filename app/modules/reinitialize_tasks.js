import { delAllBtn, todoList } from './selectors.js';

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
    setTimeout(() => {
      todoList.remove();
    }, 400);
  });
}
