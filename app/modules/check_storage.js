function checkStorage() {
  let tasks;
  let counter;
  const tested = [];
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
    counter = 0;
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    counter = tasks[tasks.length - 1].id + 1;
  }
  tested.push(tasks);
  tested.push(counter);
  return tested;
}

export default checkStorage();
