import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../node_modules/@fortawesome/fontawesome-free/js/all.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import PupulateList from './modules/displayList.js';
import {
  addTodo,
  deleteTodo,
  updateTodo,
  todoObjects,
  completeTodo,
} from './modules/todoCRUD.js';

window.onload = () => {
  const form = document.querySelector('form');
  const inputTodo = document.querySelector('form .input-todo');
  const todoList = document.querySelector('.todo-list');

  const saveToLocalStorage = () => {
    localStorage.setItem('todoObjects', JSON.stringify(todoObjects));
  };

  const updateUI = () => {
    todoList.innerHTML = '';
    todoList.append(...PupulateList(todoObjects));
  };

  const registerListEvents = () => {
    const todoEdit = document.querySelectorAll('.todo-edit');
    const todoComplete = document.querySelectorAll('.todo-check');
    const todoDelete = document.querySelectorAll('.todo-delete');

    todoEdit.forEach((input, index) => {
      input.addEventListener('input', (e) => {
        updateTodo(index, e.target.value);
        saveToLocalStorage();
      });
    });

    todoEdit.forEach((input) => {
      input.addEventListener('click', () => {
        input.parentElement.style.backgroundColor = '#f1f8b5';
        input.style.backgroundColor = '#f1f8b5';
      });
    });

    todoEdit.forEach((input) => {
      input.addEventListener('mouseout', () => {
        input.parentElement.style.backgroundColor = '#fff';
        input.style.backgroundColor = '#fff';
      });
    });

    todoDelete.forEach((todo, index) => {
      todo.addEventListener('click', () => {
        deleteTodo(index);
        saveToLocalStorage();
        updateUI();
        registerListEvents();
      });
    });

    todoComplete.forEach((todo, index) => {
      todo.addEventListener('click', () => {
        completeTodo(index);
        todo.nextElementSibling.style.display = 'block !important';
        todo.style.display = 'none !important';
        saveToLocalStorage();
        updateUI();
        registerListEvents();
      });
    });
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  inputTodo.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      if (e.target.value) addTodo(e);
      saveToLocalStorage();
      updateUI();
      registerListEvents();
    }
  });
};
