import add from '../modules/add.js';
import deleteFromDOM from '../modules/delete_from_DOM.js';

describe('add and delete test', () => {
  test(' Adds properly a task', () => {
    document.body.innerHTML = `
    <input
    class="todo-input limit"
    type="text"
    placeholder="Add to your list..."
    required="required"
    value = "Homework"
  />
    <ul class="todo-list"></ul>`;

    const taskInput = document.querySelector('input');
    taskInput.value = 'Homework';
    add(taskInput);

    expect(document.getElementsByClassName('todo')).toHaveLength(1);
  });

  test('Deletes properly from Dom and localStorage', () => {
    document.getElementsByClassName('todo');
    const todo = document.querySelector('.todo');
    deleteFromDOM(todo);

    expect(document.getElementsByClassName('todo')).toHaveLength(0);
    expect(localStorage.getItem('tasks')).toBe('[]');
  });

});
