import { tasks } from './taskArr.js';

function saveToLocal(value) {
  tasks.push(value);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export default saveToLocal;
