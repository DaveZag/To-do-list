/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./app/style.css\");\n/* harmony import */ var _modules_add_task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/add_task.js */ \"./app/modules/add_task.js\");\n/* harmony import */ var _modules_display_tasks_onLoad_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/display_tasks_onLoad.js */ \"./app/modules/display_tasks_onLoad.js\");\n/* harmony import */ var _modules_edit_content_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/edit_content.js */ \"./app/modules/edit_content.js\");\n/* harmony import */ var _modules_delete_from_DOM_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/delete_from_DOM.js */ \"./app/modules/delete_from_DOM.js\");\n/* harmony import */ var _modules_checkboxes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/checkboxes.js */ \"./app/modules/checkboxes.js\");\n/* harmony import */ var _modules_clear_all_completed_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/clear_all_completed.js */ \"./app/modules/clear_all_completed.js\");\n/* harmony import */ var _modules_reinitialize_tasks_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/reinitialize_tasks.js */ \"./app/modules/reinitialize_tasks.js\");\n\n\n\n\n\n\n\n\n\n(0,_modules_add_task_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_display_tasks_onLoad_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_reinitialize_tasks_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  (0,_modules_edit_content_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  (0,_modules_delete_from_DOM_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  (0,_modules_checkboxes_js__WEBPACK_IMPORTED_MODULE_5__.checkState)();\n  (0,_modules_checkboxes_js__WEBPACK_IMPORTED_MODULE_5__.checkOnLoad)();\n  (0,_modules_clear_all_completed_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n});\n\nif (false) {}\n\n\n//# sourceURL=webpack://to-do-list/./app/index.js?");

/***/ }),

/***/ "./app/modules/add_task.js":
/*!*********************************!*\
  !*** ./app/modules/add_task.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _task_template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task_template.js */ \"./app/modules/task_template.js\");\n/* harmony import */ var _selectors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectors.js */ \"./app/modules/selectors.js\");\n/* harmony import */ var _save_to_local_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save_to_local.js */ \"./app/modules/save_to_local.js\");\n/* harmony import */ var _display_tasks_onAdd_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display_tasks_onAdd.js */ \"./app/modules/display_tasks_onAdd.js\");\n/* harmony import */ var _taskArr_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taskArr.js */ \"./app/modules/taskArr.js\");\n/* harmony import */ var _edit_content_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit_content.js */ \"./app/modules/edit_content.js\");\n\n\n\n\n\n\n\n// Create new task on keyboard enter and call funtion to save to Browser's localStorage\nfunction add() {\n  let taskId = _taskArr_js__WEBPACK_IMPORTED_MODULE_4__.counter;\n\n  _selectors_js__WEBPACK_IMPORTED_MODULE_1__.taskInput.addEventListener('keypress', (event) => {\n    if (event.key === 'Enter') {\n      if (_selectors_js__WEBPACK_IMPORTED_MODULE_1__.taskInput.value !== '') {\n        const newTask = new _task_template_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_selectors_js__WEBPACK_IMPORTED_MODULE_1__.taskInput.value.trim());\n        newTask.id = taskId;\n        (0,_display_tasks_onAdd_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(newTask);\n        (0,_save_to_local_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(newTask);\n        _selectors_js__WEBPACK_IMPORTED_MODULE_1__.taskInput.value = '';\n        taskId += 1;\n      } else {\n        _selectors_js__WEBPACK_IMPORTED_MODULE_1__.errorMsg.classList.add('show');\n      }\n      (0,_edit_content_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    }\n  });\n\n  _selectors_js__WEBPACK_IMPORTED_MODULE_1__.taskInput.addEventListener('input', () => {\n    _selectors_js__WEBPACK_IMPORTED_MODULE_1__.errorMsg.classList.remove('show');\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (add);\n\n\n//# sourceURL=webpack://to-do-list/./app/modules/add_task.js?");

/***/ }),

/***/ "./app/modules/check_storage.js":
/*!**************************************!*\
  !*** ./app/modules/check_storage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction checkStorage() {\n  let tasks;\n  let counter;\n  const tested = [];\n  if (\n    localStorage.getItem('tasks') === null\n    || localStorage.getItem('tasks') === '[]'\n  ) {\n    tasks = [];\n    counter = tasks.length + 1;\n  } else {\n    tasks = JSON.parse(localStorage.getItem('tasks'));\n    counter = tasks[tasks.length - 1].id + 1;\n  }\n\n  tested.push(tasks);\n  tested.push(counter);\n  return tested;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkStorage());\n\n\n//# sourceURL=webpack://to-do-list/./app/modules/check_storage.js?");

/***/ }),

/***/ "./app/modules/checkboxes.js":
/*!***********************************!*\
  !*** ./app/modules/checkboxes.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkOnLoad\": () => (/* binding */ checkOnLoad),\n/* harmony export */   \"checkState\": () => (/* binding */ checkState)\n/* harmony export */ });\n/* harmony import */ var _selectors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectors.js */ \"./app/modules/selectors.js\");\n\n\nlet tasks;\nfunction checkState() {\n  _selectors_js__WEBPACK_IMPORTED_MODULE_0__.todoList.addEventListener('click', (e) => {\n    if (\n      localStorage.getItem('tasks') !== null\n      && localStorage.getItem('tasks') !== '[]'\n    ) {\n      tasks = JSON.parse(localStorage.getItem('tasks'));\n    }\n    if (e.target.nodeName === 'INPUT') {\n      const element = e.target;\n      const item = element.parentElement.innerText;\n\n      if (element.checked) {\n        element.parentElement.classList.add('completed');\n\n        const editedArr = tasks.map((task) => {\n          if (task.desc === item) {\n            //  return modified object property\n            return { ...task, completed: element.checked };\n          }\n          return task;\n        });\n        localStorage.setItem('tasks', JSON.stringify(editedArr));\n      } else {\n        element.parentElement.classList.remove('completed');\n\n        const editedArr = tasks.map((task) => {\n          if (task.desc === item) {\n            //  return modified object property\n            return { ...task, completed: false };\n          }\n          return task;\n        });\n        localStorage.setItem('tasks', JSON.stringify(editedArr));\n      }\n    }\n  });\n}\n\n// check if checkbox is checked on load then style the checked task\nfunction checkOnLoad() {\n  const arrChecks = [..._selectors_js__WEBPACK_IMPORTED_MODULE_0__.checkboxes];\n  arrChecks.forEach((check) => {\n    if (check.hasAttribute('checked')) {\n      check.parentElement.classList.add('completed');\n    }\n  });\n}\n\n\n\n\n//# sourceURL=webpack://to-do-list/./app/modules/checkboxes.js?");

/***/ }),

/***/ "./app/modules/clear_all_completed.js":
/*!********************************************!*\
  !*** ./app/modules/clear_all_completed.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _selectors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectors.js */ \"./app/modules/selectors.js\");\n\n\nfunction clearCompleted() {\n  _selectors_js__WEBPACK_IMPORTED_MODULE_0__.clearBtn.addEventListener('click', () => {\n    // delete from DOM\n    const checkboxes = [...document.getElementsByClassName('check')];\n    checkboxes.forEach((check) => {\n      if (check.checked === true) {\n        check.parentElement.parentElement.parentElement.remove();\n      }\n    });\n\n    // delete from localStorage\n    let tasks;\n    if (\n      localStorage.getItem('tasks') !== null\n      && localStorage.getItem('tasks') !== '[]'\n    ) {\n      tasks = JSON.parse(localStorage.getItem('tasks'));\n    }\n    // const arrClear = [...checkboxes];\n    const arrUnchecked = tasks.filter((element) => element.completed !== true);\n    localStorage.setItem('tasks', JSON.stringify(arrUnchecked));\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearCompleted);\n\n\n//# sourceURL=webpack://to-do-list/./app/modules/clear_all_completed.js?");

/***/ }),

/***/ "./app/modules/delete_from_DOM.js":
/*!****************************************!*\
  !*** ./app/modules/delete_from_DOM.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ deleteFromDom)\n/* harmony export */ });\n/* harmony import */ var _delete_from_localStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete_from_localStorage.js */ \"./app/modules/delete_from_localStorage.js\");\n/* harmony import */ var _selectors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectors.js */ \"./app/modules/selectors.js\");\n\n\n\nfunction deleteFromDom() {\n  _selectors_js__WEBPACK_IMPORTED_MODULE_1__.todoList.addEventListener('click', (e) => {\n    const item = e.target;\n    const parent = item.parentElement.parentElement;\n    // remove element from Dom when button is clicked\n    if (\n      item.nodeName === 'BUTTON'\n      && item.children[0].classList.contains('todo-delete')\n    ) {\n      item.parentElement.parentElement.remove();\n\n      // call delete in storage function\n      (0,_delete_from_localStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(parent);\n      return;\n    }\n\n    // display or hide delete button on todo focus/blur\n    if (item.nodeName === 'LI') {\n      const delBtn = item.children[1].children[1].children[0];\n      const moveBtn = item.children[1].children[0].children[0];\n      const todos = _selectors_js__WEBPACK_IMPORTED_MODULE_1__.todoList.querySelectorAll('.todo');\n\n      todos.forEach((todo) => {\n        if (item === todo) {\n          delBtn.classList.add('show');\n          moveBtn.classList.add('hide');\n        } else {\n          todo.children[1].children[0].children[0].classList.remove('hide');\n          todo.children[1].children[1].children[0].classList.remove('show');\n        }\n      });\n    }\n  });\n}\n\n\n//# sourceURL=webpack://to-do-list/./app/modules/delete_from_DOM.js?");

/***/ }),

/***/ "./app/modules/delete_from_localStorage.js":
/*!*************************************************!*\
  !*** ./app/modules/delete_from_localStorage.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// import { tasks } from './taskArr.js';\n\nfunction deleteInStorage(element) {\n  let tasks;\n  if (\n    localStorage.getItem('tasks') !== null\n    && localStorage.getItem('tasks') !== '[]'\n  ) {\n    tasks = JSON.parse(localStorage.getItem('tasks'));\n  }\n  const itemToDelete = element.children[0].children[0].children[1].innerText;\n  const index = tasks.map((task) => task.desc).indexOf(itemToDelete);\n  tasks.splice(index, 1);\n  let count = 1;\n  tasks.forEach((element) => {\n    element.id = count;\n    count += 1;\n  });\n\n  localStorage.setItem('tasks', JSON.stringify(tasks));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteInStorage);\n\n\n//# sourceURL=webpack://to-do-list/./app/modules/delete_from_localStorage.js?");

/***/ }),

/***/ "./app/modules/diplay.js":
/*!*******************************!*\
  !*** ./app/modules/diplay.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _selectors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectors.js */ \"./app/modules/selectors.js\");\n\n\nfunction displayTask(task) {\n  const todo = document.createElement('li');\n  todo.classList.add('todo', 'flex', 'flex-jc-sb', 'limit');\n  todo.setAttribute('tabindex', '0');\n  _selectors_js__WEBPACK_IMPORTED_MODULE_0__.todoList.appendChild(todo);\n  const block1 = document.createElement('div');\n  block1.classList.add('todo-block1');\n  todo.appendChild(block1);\n  const todoText = document.createElement('div');\n  todoText.classList.add('flex', 'flex-center', 'text');\n  if (task.completed === true) {\n    todoText.innerHTML = `\n  <input class=\"check\" type=\"checkbox\" name=\"todo\" checked/>\n     <span class=\"todo-editable\" contenteditable=\"true\"\n   >${task.desc}</span>\n`;\n  } else {\n    todoText.innerHTML = `\n    <input class=\"check\" type=\"checkbox\" name=\"todo\"/>\n       <span class=\"todo-editable\" contenteditable=\"true\"\n     >${task.desc}</span>\n  `;\n  }\n  block1.appendChild(todoText);\n  const block2 = document.createElement('div');\n  block2.classList.add('todo-block2', 'flex', 'flex-center');\n  block2.innerHTML = `\n        <button class=\"flex flex-center button\"><i class=\"fa-solid fa-ellipsis-vertical todo-move\"></i></button>\n        <button class=\"flex flex-center button\"><i class=\"fa-solid fa-trash-can todo-delete\"></i></button>\n      `;\n  todo.appendChild(block2);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayTask);\n\n\n//# sourceURL=webpack://to-do-list/./app/modules/diplay.js?");

/***/ }),

/***/ "./app/modules/display_tasks_onAdd.js":
/*!********************************************!*\
  !*** ./app/modules/display_tasks_onAdd.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _diplay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diplay.js */ \"./app/modules/diplay.js\");\n\n\nfunction displayOnAdd(task) {\n  (0,_diplay_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(task);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayOnAdd);\n\n\n//# sourceURL=webpack://to-do-list/./app/modules/display_tasks_onAdd.js?");

/***/ }),

/***/ "./app/modules/display_tasks_onLoad.js":
/*!*********************************************!*\
  !*** ./app/modules/display_tasks_onLoad.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _diplay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diplay.js */ \"./app/modules/diplay.js\");\n/* harmony import */ var _taskArr_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskArr.js */ \"./app/modules/taskArr.js\");\n\n\n\nfunction displayOnAdd() {\n  document.addEventListener('DOMContentLoaded', () => {\n    _taskArr_js__WEBPACK_IMPORTED_MODULE_1__.tasks.forEach((task) => {\n      (0,_diplay_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(task);\n    });\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayOnAdd);\n\n\n//# sourceURL=webpack://to-do-list/./app/modules/display_tasks_onLoad.js?");

/***/ }),

/***/ "./app/modules/edit_content.js":
/*!*************************************!*\
  !*** ./app/modules/edit_content.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ editTask)\n/* harmony export */ });\n/* harmony import */ var _selectors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectors.js */ \"./app/modules/selectors.js\");\n\n\nfunction editTask() {\n  let tasks;\n\n  _selectors_js__WEBPACK_IMPORTED_MODULE_0__.todoList.addEventListener('click', (e) => {\n    if (\n      localStorage.getItem('tasks') !== null\n      || localStorage.getItem('tasks') !== '[]'\n    ) {\n      tasks = JSON.parse(localStorage.getItem('tasks'));\n    }\n\n    const itemToEdit = e.target;\n    const textContent = e.target.innerText;\n    let editedText;\n    if (e.target.classList.contains('todo-editable')) {\n      itemToEdit.addEventListener('input', () => {\n        editedText = itemToEdit.innerText;\n\n        const editedArray = tasks.map((task) => {\n          if (task.desc === textContent) {\n            //  return modified object property\n            return { ...task, desc: `${editedText}` };\n          }\n          return task;\n        });\n\n        localStorage.setItem('tasks', JSON.stringify(editedArray));\n      });\n    }\n  });\n}\n\n\n//# sourceURL=webpack://to-do-list/./app/modules/edit_content.js?");

/***/ }),

/***/ "./app/modules/reinitialize_tasks.js":
/*!*******************************************!*\
  !*** ./app/modules/reinitialize_tasks.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clearAllTasks)\n/* harmony export */ });\n/* harmony import */ var _selectors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectors.js */ \"./app/modules/selectors.js\");\n\n\nfunction clearAllTasks() {\n  _selectors_js__WEBPACK_IMPORTED_MODULE_0__.delAllBtn.addEventListener('click', () => {\n    if (\n      localStorage.getItem('tasks') !== null\n      && localStorage.getItem('tasks') !== '[]'\n    ) {\n      _selectors_js__WEBPACK_IMPORTED_MODULE_0__.delAllBtn.classList.add('rotateIcon');\n    } else {\n      _selectors_js__WEBPACK_IMPORTED_MODULE_0__.delAllBtn.classList.remove('rotateIcon');\n    }\n    localStorage.clear();\n    const arrTodo = [..._selectors_js__WEBPACK_IMPORTED_MODULE_0__.todos];\n    setTimeout(() => {\n      arrTodo.forEach((element) => {\n        element.remove();\n      });\n    }, 400);\n  });\n}\n\n\n//# sourceURL=webpack://to-do-list/./app/modules/reinitialize_tasks.js?");

/***/ }),

/***/ "./app/modules/save_to_local.js":
/*!**************************************!*\
  !*** ./app/modules/save_to_local.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction saveToLocal(value) {\n  let tasks;\n  if (\n    localStorage.getItem('tasks') === null\n    || localStorage.getItem('tasks') === '[]'\n  ) {\n    tasks = [];\n  } else {\n    tasks = JSON.parse(localStorage.getItem('tasks'));\n  }\n\n  tasks.push(value);\n  localStorage.setItem('tasks', JSON.stringify(tasks));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (saveToLocal);\n\n\n//# sourceURL=webpack://to-do-list/./app/modules/save_to_local.js?");

/***/ }),

/***/ "./app/modules/selectors.js":
/*!**********************************!*\
  !*** ./app/modules/selectors.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkboxes\": () => (/* binding */ checkboxes),\n/* harmony export */   \"clearBtn\": () => (/* binding */ clearBtn),\n/* harmony export */   \"delAllBtn\": () => (/* binding */ delAllBtn),\n/* harmony export */   \"editable\": () => (/* binding */ editable),\n/* harmony export */   \"errorMsg\": () => (/* binding */ errorMsg),\n/* harmony export */   \"taskInput\": () => (/* binding */ taskInput),\n/* harmony export */   \"todoList\": () => (/* binding */ todoList),\n/* harmony export */   \"todos\": () => (/* binding */ todos)\n/* harmony export */ });\nconst taskInput = document.querySelector('.todo-input');\nconst errorMsg = document.querySelector('.error-cont');\nconst todoList = document.querySelector('.todo-list');\nconst todos = document.getElementsByClassName('todo');\nconst editable = document.getElementsByClassName('todo-editable');\nconst checkboxes = document.getElementsByClassName('check');\nconst clearBtn = document.querySelector('.clear-all');\nconst delAllBtn = document.querySelector('.delete-all');\n\n\n\n\n//# sourceURL=webpack://to-do-list/./app/modules/selectors.js?");

/***/ }),

/***/ "./app/modules/taskArr.js":
/*!********************************!*\
  !*** ./app/modules/taskArr.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"counter\": () => (/* binding */ counter),\n/* harmony export */   \"tasks\": () => (/* binding */ tasks)\n/* harmony export */ });\n/* harmony import */ var _check_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check_storage.js */ \"./app/modules/check_storage.js\");\n\n\n// check if local storage is empty or not then store the boolean value in a constant.\n// check the id of the last added element if there is any in local storage.\nconst tasks = _check_storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][0];\nconst counter = _check_storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][1];\n\n\n\n//# sourceURL=webpack://to-do-list/./app/modules/taskArr.js?");

/***/ }),

/***/ "./app/modules/task_template.js":
/*!**************************************!*\
  !*** ./app/modules/task_template.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Task {\n  constructor(description) {\n    this.desc = description;\n    this.id = 0;\n    this.completed = false;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n\n//# sourceURL=webpack://to-do-list/./app/modules/task_template.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./app/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./app/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/move.cur */ \"./app/assets/move.cur\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* ............. Css Resets ........... */\\r\\n\\r\\n*,\\r\\n*::after,\\r\\n*::before {\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n* {\\r\\n  /* outline: 1px solid red; */\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\nbody,\\r\\nhtml {\\r\\n  box-sizing: inherit;\\r\\n  width: 100%;\\r\\n  min-height: 100%;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-size: 100%;\\r\\n  font-family: \\\"Roboto\\\", Arial, Helvetica, sans-serif;\\r\\n  line-height: 1.5;\\r\\n  background-color: #e8e5e5;\\r\\n}\\r\\n\\r\\nimg,\\r\\npicture {\\r\\n  max-width: 100%;\\r\\n  display: block;\\r\\n}\\r\\n\\r\\nul {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n::-webkit-scrollbar {\\r\\n  width: 0.45rem;\\r\\n  background-color: #f5f5f5;\\r\\n}\\r\\n\\r\\n::-webkit-scrollbar-track {\\r\\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\\r\\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n::-webkit-scrollbar-thumb {\\r\\n  width: 1rem;\\r\\n  height: 1rem;\\r\\n  background-color: rgb(43, 42, 42);\\r\\n  border-radius: 10px;\\r\\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);\\r\\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);\\r\\n}\\r\\n\\r\\n/* Reusable classes ........... */\\r\\n\\r\\n.limit {\\r\\n  padding-inline: 0.9rem;\\r\\n  padding-block: 0.7rem;\\r\\n}\\r\\n\\r\\n.flex {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.flex-col {\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.flex-center {\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.flex-jc-c {\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.flex-al-c {\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.flex-jc-sb {\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n/* ............... Main Content .............. */\\r\\n\\r\\n.container {\\r\\n  height: 100vh;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.todo-cont {\\r\\n  width: 40rem;\\r\\n  background-color: rgb(255, 255, 255);\\r\\n  max-height: 80%;\\r\\n  overflow: auto;\\r\\n}\\r\\n\\r\\n.container h1 {\\r\\n  font-size: 1.4rem;\\r\\n  color: rgb(30, 30, 30);\\r\\n}\\r\\n\\r\\n.delete-all {\\r\\n  color: rgb(143, 143, 143);\\r\\n  cursor: pointer;\\r\\n  transition: transform 500ms ease-in-out;\\r\\n  -webkit-transition: transform 500ms ease-in-out;\\r\\n  -moz-transition: transform 500ms ease-in-out;\\r\\n  -ms-transition: transform 500ms ease-in-out;\\r\\n  -o-transition: transform 500ms ease-in-out;\\r\\n}\\r\\n\\r\\n.rotateIcon {\\r\\n  transform: rotate(180deg);\\r\\n  -webkit-transform: rotate(180deg);\\r\\n  -moz-transform: rotate(180deg);\\r\\n  -ms-transform: rotate(180deg);\\r\\n  -o-transform: rotate(180deg);\\r\\n}\\r\\n\\r\\n.delete-all:hover {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.input-cont {\\r\\n  position: relative;\\r\\n  overflow-x: hidden;\\r\\n}\\r\\n\\r\\n.todo-input {\\r\\n  width: 100%;\\r\\n  font-style: italic;\\r\\n  border: none;\\r\\n  font-size: 1rem;\\r\\n}\\r\\n\\r\\n.enter-key {\\r\\n  width: 0.8rem;\\r\\n  height: 0.8rem;\\r\\n  object-fit: contain;\\r\\n  position: absolute;\\r\\n  top: 50%;\\r\\n  translate: 0 -50%;\\r\\n  right: 1rem;\\r\\n  opacity: 0.5;\\r\\n  cursor: text;\\r\\n}\\r\\n\\r\\n.error-cont {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.error {\\r\\n  background-color: rgb(235, 163, 163);\\r\\n  color: rgb(53, 1, 1);\\r\\n  width: 90%;\\r\\n  margin: 0.5rem auto;\\r\\n  padding: 0.2rem;\\r\\n}\\r\\n\\r\\n.show {\\r\\n  display: block !important;\\r\\n}\\r\\n\\r\\n.hide {\\r\\n  display: none !important;\\r\\n}\\r\\n\\r\\n.completed {\\r\\n  text-decoration: line-through;\\r\\n  color: rgb(60, 60, 60);\\r\\n}\\r\\n\\r\\n.todo-list {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.todo {\\r\\n  width: inherit;\\r\\n  font-size: 1.15rem;\\r\\n}\\r\\n\\r\\n.todo:focus,\\r\\n.todo:has(.todo-editable:focus) {\\r\\n  background-color: #ebe998;\\r\\n}\\r\\n\\r\\n.todo-block1 {\\r\\n  display: flex;\\r\\n  justify-content: flex-start;\\r\\n}\\r\\n\\r\\n.text {\\r\\n  gap: 0.3rem;\\r\\n}\\r\\n\\r\\ninput[type=\\\"checkbox\\\"] {\\r\\n  appearance: none;\\r\\n  -webkit-appearance: none;\\r\\n  display: grid;\\r\\n  place-content: center;\\r\\n  grid-template-columns: 1.15rem;\\r\\n  background-color: #fff;\\r\\n  color: rgb(143, 143, 143);\\r\\n  font: inherit;\\r\\n  width: 1.15rem;\\r\\n  height: 1.15rem;\\r\\n  border: 0.15rem solid currentColor;\\r\\n  border-radius: 0.15rem;\\r\\n  margin: 0;\\r\\n  -webkit-border-radius: 0.15rem;\\r\\n  -moz-border-radius: 0.15rem;\\r\\n  -ms-border-radius: 0.15rem;\\r\\n  -o-border-radius: 0.15rem;\\r\\n}\\r\\n\\r\\ninput[type=\\\"checkbox\\\"]:hover {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\ninput[type=\\\"checkbox\\\"]::before {\\r\\n  content: \\\"\\\";\\r\\n  width: 1rem;\\r\\n  height: 1rem;\\r\\n  scale: 0;\\r\\n  box-shadow: inset 1em 1em black;\\r\\n  transition: 50ms transform ease-in-out;\\r\\n  -webkit-transition: 50ms transform ease-in-out;\\r\\n  -moz-transition: 50ms transform ease-in-out;\\r\\n  -ms-transition: 50ms transform ease-in-out;\\r\\n  -o-transition: 50ms transform ease-in-out;\\r\\n  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\\r\\n}\\r\\n\\r\\ninput[type=\\\"checkbox\\\"]:checked {\\r\\n  color: transparent;\\r\\n}\\r\\n\\r\\ninput[type=\\\"checkbox\\\"]:checked,\\r\\ninput[type=\\\"checkbox\\\"]:checked::before {\\r\\n  scale: 1;\\r\\n}\\r\\n\\r\\n.todo-editable:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.button {\\r\\n  background-color: transparent;\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  padding-inline: 0.2rem;\\r\\n}\\r\\n\\r\\nbutton:is(:hover, :active) > i {\\r\\n  color: rgb(4, 4, 4);\\r\\n}\\r\\n\\r\\n.button:has(.todo-move) {\\r\\n  cursor: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \"), auto;\\r\\n}\\r\\n\\r\\n.button:has(.todo-delete) {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.todo-move {\\r\\n  pointer-events: none;\\r\\n}\\r\\n\\r\\n.todo-delete {\\r\\n  display: none;\\r\\n  pointer-events: none;\\r\\n}\\r\\n\\r\\n.todo-move,\\r\\n.todo-delete {\\r\\n  color: rgb(143, 143, 143);\\r\\n  font-size: 1.2rem;\\r\\n}\\r\\n\\r\\n.clear-all {\\r\\n  border: none;\\r\\n  width: 100%;\\r\\n  padding: 1.2rem 0;\\r\\n  font-size: 1.15rem;\\r\\n  transition: background-color 200ms ease-in-out;\\r\\n  -webkit-transition: background-color 200ms ease-in-out;\\r\\n  -moz-transition: background-color 200ms ease-in-out;\\r\\n  -ms-transition: background-color 200ms ease-in-out;\\r\\n  -o-transition: background-color 200ms ease-in-out;\\r\\n}\\r\\n\\r\\n.clear-all:hover {\\r\\n  cursor: pointer;\\r\\n  background-color: rgb(183, 176, 176);\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./app/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./app/style.css":
/*!***********************!*\
  !*** ./app/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./app/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./app/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./app/assets/move.cur":
/*!*****************************!*\
  !*** ./app/assets/move.cur ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"./assets/move.cur\";\n\n//# sourceURL=webpack://to-do-list/./app/assets/move.cur?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app/index.js");
/******/ 	
/******/ })()
;