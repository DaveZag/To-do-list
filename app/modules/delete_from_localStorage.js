import { tasks } from './taskArr.js';

function deleteInStorage(element) {
  const itemToDelete = element.children[0].children[0].children[1].innerText;
  const index = tasks.map((task) => task.desc).indexOf(itemToDelete);
  tasks.splice(index, 1);
  let count = 1;
  tasks.forEach((element) => {
    element.id = count;
    count += 1;
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export default deleteInStorage;
