import { storeData } from './localStorage.js';

const clearCompleted = (todoObjects) => {
  if (Array.isArray(todoObjects) && todoObjects.length) {
    const incomplete = todoObjects.filter((todo) => !todo.completed);
    incomplete.forEach((todo, index) => {
      todo.index = index;
    });
    storeData(incomplete);
  }
};

export default clearCompleted;