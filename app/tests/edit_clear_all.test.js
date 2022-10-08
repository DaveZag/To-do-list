import add from '../modules/add.js';
import checkState from '../modules/checkboxes.js';
import clearCompleted from '../modules/clear_all_completed.js';
import editTask from '../modules/edit_task.js';

describe('Tests for editing, clearing all completed tasks and checking tasks', () => {
  test('Properly edit a saved task', () => {
    document.body.innerHTML = `
    <input
    class="todo-input limit"
    type="text"
    placeholder="Add to your list..."
    required="required"
    value="take a walk"
  />
    <ul class="todo-list"></ul>`;
    const taskInput = document.querySelector('input');

    add(taskInput);
    const span = document.getElementsByClassName('todo-editable')[0];
    span.innerText = 'Hello';
    const todo = document.getElementsByClassName('todo')[0];
    editTask(todo, span.innerText);

    // element description edited in localStorage
    expect(JSON.parse(localStorage.getItem('tasks'))[0].desc).toBe('Hello');

    // element innerText edited in DOM
    expect(document.getElementsByClassName('todo-editable')[0].innerText).toBe(
      'Hello',
    );
  });

  test('Properly checks tasks', () => {
    const checkbox = document.getElementsByClassName('check');
    checkbox[0].checked = true;

    checkState(checkbox[0]);

    // checkbox state updated
    expect(JSON.parse(localStorage.getItem('tasks'))[0].completed).toBe(true);
  });

  test('Properly clears all checked tasks', () => {
    clearCompleted();

    // element removed from localStorage
    expect(JSON.parse(localStorage.getItem('tasks'))).toHaveLength(0);

    // element removed from DOM
    expect(document.getElementsByClassName('todo')).toHaveLength(0);
  });
});
