function clearCompleted() {
  // delete from DOM
  const checkboxes = [...document.getElementsByClassName('check')];

  checkboxes.forEach((check) => {
    if (check.checked === true) {
      check.parentElement.parentElement.parentElement.remove();
    }
  });

  // delete from localStorage
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const arrUnchecked = tasks.filter((element) => element.completed !== true);
  let count = 1;
  arrUnchecked.forEach((element) => {
    element.id = count;
    count += 1;
  });
  localStorage.setItem('tasks', JSON.stringify(arrUnchecked));
}

export default clearCompleted;
