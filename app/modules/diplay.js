import { todoList } from './selectors.js';

function displayTask(task) {
  const todo = document.createElement('li');
  todo.classList.add('todo', 'flex', 'flex-jc-sb', 'limit');
  todo.setAttribute('tabindex', '0');
  todoList.appendChild(todo);
  const block1 = document.createElement('div');
  block1.classList.add('todo-block1');
  todo.appendChild(block1);
  const todoText = document.createElement('div');
  todoText.classList.add('flex', 'flex-center', 'text');
  if (task.completed === true) {
    todoText.innerHTML = `
  <input class="check" type="checkbox" name="todo" checked/>
     <span class="todo-editable" contenteditable="true"
   >${task.desc}</span>
`;
  } else {
    todoText.innerHTML = `
    <input class="check" type="checkbox" name="todo"/>
       <span class="todo-editable" contenteditable="true"
     >${task.desc}</span>
  `;
  }
  block1.appendChild(todoText);
  const block2 = document.createElement('div');
  block2.classList.add('todo-block2', 'flex', 'flex-center');
  block2.innerHTML = `
        <button class="flex flex-center button"><i class="fa-solid fa-ellipsis-vertical todo-move"></i></button>
        <button class="flex flex-center button"><i class="fa-solid fa-trash-can todo-delete"></i></button>
      `;
  todo.appendChild(block2);
}

export default displayTask;
