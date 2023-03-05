import './style.css';
import clearCompleted from './modules/todoStatus.js';
import todoList from './modules/todoCRUD.js';
import { readData } from './modules/localStorage.js';

window.onload = () => {
  const form = document.querySelector('form');
  const inputTodo = document.querySelector('form .input-todo');
  todoList.todoObjects = readData();

  document.querySelector('.clear-todo').addEventListener('click',
    () => {
      clearCompleted(todoList.todoObjects);
      todoList.todoObjects = readData();
      todoList.populateList();
    });

  if (todoList.todoObjects.length) {
    todoList.populateList();
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  inputTodo.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      if (inputTodo.value) todoList.addTodo(inputTodo.value);
      inputTodo.value = '';
    }
  });
};
