export default function editTask(task, textContent) {
  const tasks = localStorage.getItem('tasks')
    ? JSON.parse(localStorage.getItem('tasks'))
    : [];
  tasks.forEach((element, index) => {
    if (index === parseInt(task.getAttribute('id'), 10) - 1) {
      tasks[index].desc = textContent;
    }
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
