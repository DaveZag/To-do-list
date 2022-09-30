function saveToLocal(value) {
  let tasks;
  if (
    localStorage.getItem('tasks') === null
    || localStorage.getItem('tasks') === '[]'
  ) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(value);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export default saveToLocal;
