import checkStorage from './check_storage.js';

// check if local storage is empty or not then store the boolean value in a constant.
const tasks = checkStorage[0];
const counter = checkStorage[1];
export { tasks, counter };
