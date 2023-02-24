import './style.css';
import PopulateList from './modules/displayList.js';
import clearCompleted from './modules/todoStatus.js';
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
    const todoInComplete = document.querySelectorAll('.todo-check');
    const todoComplete = document.querySelectorAll('.todo-completed');
    const todoDelete = document.querySelectorAll('.todo-delete');

    const taskCompletionEvent = (task) => {
      task.addEventListener('click', (e) => {
        CRUD.completeTodo(task.parentElement.dataset.index);
        saveToLocalStorage();
        updateUI();
        registerListEvents();
        if (task.classList.contains('todo-check')) {
          // todo: removve the line-through
          e.currentTarget.nextElementSibling.classList.add('line-through');
        } else if (task.classList.contains('todo-completed')) {
          // todo: add the line-through
          e.currentTarget.nextElementSibling.classList.remove('line-through');
        }
      });
    };

    todoEdit.forEach((input, index) => {
      input.addEventListener('input', (e) => {
        CRUD.updateTodo(index, e.target.value);
        saveToLocalStorage();
      });
    });

    todoEdit.forEach((input) => {
      input.addEventListener('mousedown', () => {
        input.parentElement.style.backgroundColor = '#f1f8b5';
        input.nextElementSibling.nextElementSibling.classList.remove('hide');
        input.nextElementSibling.classList.add('hide');
      });
    });

    todoEdit.forEach((input) => {
      input.parentElement.addEventListener('mouseout', () => {
        input.parentElement.style.backgroundColor = '#fff';
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

    todoInComplete.forEach((todo) => {
      taskCompletionEvent(todo);
    });

    todoComplete.forEach((todo) => {
      taskCompletionEvent(todo);
    });
  };

  document.querySelector('.clear-todo').addEventListener('click',
    () => {
      clearCompleted(CRUD.todoObjects);
      CRUD.todoObjects = JSON.parse(localStorage.getItem('todoObjects')) || [];
      updateUI();
      registerListEvents();
    });

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
