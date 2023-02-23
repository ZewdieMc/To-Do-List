import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../node_modules/@fortawesome/fontawesome-free/js/all.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import PopulateList from './modules/displayList.js';
import CRUD from './modules/todoCRUD.js';

window.onload = () => {
  const form = document.querySelector('form');
  const inputTodo = document.querySelector('form .input-todo');
  const todoList = document.querySelector('.todo-list');

  CRUD.todoObjects = JSON.parse(localStorage.getItem('todoObjects')) || [];
  const updateUI = () => {
    todoList.innerHTML = '';
    todoList.append(...PopulateList(JSON.parse(localStorage.getItem('todoObjects'))));
  };

  const saveToLocalStorage = () => {
    localStorage.setItem('todoObjects', JSON.stringify(CRUD.todoObjects));
  };

  const registerListEvents = () => {
    const todoEdit = document.querySelectorAll('.todo-edit');
    const todoComplete = document.querySelectorAll('.todo-check');
    const todoDelete = document.querySelectorAll('.todo-delete');

    todoEdit.forEach((input, index) => {
      input.addEventListener('input', (e) => {
        CRUD.updateTodo(index, e.target.value);
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
        CRUD.deleteTodo(index);
        saveToLocalStorage();
        updateUI();
        registerListEvents();
      });
    });

    todoComplete.forEach((todo) => {
      todo.addEventListener('click', () => {
        CRUD.completeTodo(todo.parentElement.dataset.index);
        saveToLocalStorage();
        updateUI();
        registerListEvents();
      });
    });
  };

  if (CRUD.todoObjects.length) {
    updateUI();
    registerListEvents();
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  inputTodo.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      if (e.target.value) CRUD.addTodo(e);
      saveToLocalStorage();
      updateUI();
      registerListEvents();
    }
  });
};
