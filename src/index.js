import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../node_modules/@fortawesome/fontawesome-free/js/all.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import PupulateList from './modules/displayList.js';

const todoObjects = [
  { description: 'Do the dishes', completed: false, index: 0 },
  { description: 'Wash the car', completed: false, index: 1 },
  { description: 'Do the laundry', completed: false, index: 2 },
];

window.onload = () => {
  const todoList = document.querySelector('.todo-list');
  todoList.append(...PupulateList(todoObjects));
};