import { storeData } from './localStorage.js';

const clearCompleted = (todoList) => {
  if (Array.isArray(todoList.list) && todoList.list.length) {
    const incomplete = todoList.list.filter((todo) => !todo.completed);
    incomplete.forEach((todo, index) => {
      todo.index = index;
    });
    storeData(incomplete);
  }
};

export default clearCompleted;
