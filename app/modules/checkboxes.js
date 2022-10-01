import { todoList } from './selectors.js';

export default function checkState() {
  todoList.addEventListener('click', (e) => e);
}
