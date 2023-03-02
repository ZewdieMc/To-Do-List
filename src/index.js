import './style.css';
import clearCompleted from './modules/todoStatus.js';
import CRUD from './modules/todoCRUD.js';
import { readData } from './modules/localStorage.js';

window.onload = () => {
  const form = document.querySelector('form');
  const inputTodo = document.querySelector('form .input-todo');
  CRUD.todoObjects = readData();

  document.querySelector('.clear-todo').addEventListener('click',
    () => {
      clearCompleted(CRUD.todoObjects);
      CRUD.todoObjects = readData();
      CRUD.populateList();
    });

  if (CRUD.todoObjects.length) {
    CRUD.populateList();
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  inputTodo.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      if (inputTodo.value) CRUD.addTodo(e);
      CRUD.populateList();
    }
  });
};
