import deleteInStorage from './delete_from_localStorage.js';

export default function deleteFromDom(parent) {
  parent.remove();

  // call delete in storage function
  deleteInStorage(parent);
}
