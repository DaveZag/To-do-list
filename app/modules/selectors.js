const taskInput = document.querySelector('.todo-input');
const errorMsg = document.querySelector('.error-cont');
const todoList = document.querySelector('.todo-list');
const todos = document.getElementsByClassName('todo');
const editable = document.getElementsByClassName('todo-editable');
const checkboxes = document.getElementsByClassName('check');
const clearBtn = document.querySelector('.clear-all');
const delAllBtn = document.querySelector('.delete-all');

export {
  taskInput,
  errorMsg,
  todoList,
  todos,
  editable,
  checkboxes,
  clearBtn,
  delAllBtn,
};
