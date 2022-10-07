import displayTask from './diplay.js';
import checkStorage from './check_storage.js';

function displayOnAdd() {
  const tasks = checkStorage;
  document.addEventListener('DOMContentLoaded', () => {
    tasks.forEach((task) => {
      displayTask(task);
    });
  });
}

export default displayOnAdd;
