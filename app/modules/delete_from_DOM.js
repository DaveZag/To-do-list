import deleteInStorage from './delete_from_localStorage.js';
import { todoList } from './selectors.js';

export default function deleteFromDom() {
  todoList.addEventListener('click', (e) => {
    const item = e.target;
    const parent = item.parentElement.parentElement;
    // remove element from Dom when button is clicked
    if (
      item.nodeName === 'BUTTON'
      && item.children[0].classList.contains('todo-delete')
    ) {
      item.parentElement.parentElement.remove();

      // call delete in storage function
      deleteInStorage(parent);
      return;
    }

    // display or hide delete button on todo focus/blur
    if (item.nodeName === 'LI') {
      const delBtn = item.children[1].children[1].children[0];
      const moveBtn = item.children[1].children[0].children[0];
      const todos = todoList.querySelectorAll('.todo');

      todos.forEach((todo) => {
        if (item === todo) {
          delBtn.classList.add('show');
          moveBtn.classList.add('hide');
        } else {
          todo.children[1].children[0].children[0].classList.remove('hide');
          todo.children[1].children[1].children[0].classList.remove('show');
        }
      });
    }
  });
}
