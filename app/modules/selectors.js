const taskInput = document.querySelector('.todo-input');
const delBtn = document.querySelector('.todo-delete');
const errorMsg = document.querySelector('.error-cont');
const todoList = document.querySelector('.todo-list');
const todos = document.getElementsByClassName('todo');
const editable = document.getElementsByClassName('todo-editable');

export {
  taskInput, delBtn, errorMsg, todoList, todos, editable,
};
