function checkStorage() {
  let tasks;

  if (
    localStorage.getItem('tasks') === null ||
    localStorage.getItem('tasks') === '[]'
  ) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  return tasks;
}

export default checkStorage();
