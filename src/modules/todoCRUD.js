import Todo from './todo.js';
import { storeData, readData } from './localStorage.js';

export default class CRUD {
  constructor() {
    this.todoObjects = [];
  }

 static addTodo = (event) => {
   this.todoObjects.push(
     new Todo(
       this.todoObjects.length,
       false,
       event.target.value,
     ),
   );
   event.target.value = '';
   storeData(this.todoObjects);
 };

 static deleteTodo = (index) => {
   this.todoObjects.splice(index, 1);
   this.todoObjects.forEach((todo, i) => {
     todo.index = i;
   });
   storeData(this.todoObjects);
 };

 static updateTodo = (index, value) => {
   this.todoObjects[index].description = value;
   storeData(this.todoObjects);
 };

 static completeTodo = (index) => {
   this.todoObjects[index].completed = !this.todoObjects[index].completed;
   storeData(this.todoObjects);
 };

 static getListsHTML = (lists) => lists.map((todo) => {
   const li = document.createElement('li');
   li.classList.add('todo-item');
   li.setAttribute('data-index', todo.index);
   li.setAttribute('data-completed', todo.completed);

   const completedIconContainer = document.createElement('div');
   completedIconContainer.className = 'todo-completed';
   const incompleteIconContainer = document.createElement('div');
   incompleteIconContainer.className = 'todo-check';

   const completedIcon = document.createElement('i');
   completedIcon.className = 'fa-regular fa-circle-check fa-2x';
   const incompleteIcon = document.createElement('i');
   incompleteIcon.className = 'fa-regular fa-square fa-2x';

   completedIconContainer.appendChild(completedIcon);
   incompleteIconContainer.appendChild(incompleteIcon);

   const todoDescription = document.createElement('input');
   todoDescription.type = 'text';
   todoDescription.className = 'todo-edit';
   todoDescription.value = todo.description;

   const ellipsisIcon = document.createElement('i');
   ellipsisIcon.className = 'fas fa-ellipsis-v todo-ellipsis fa-2x';

   const trashIconContainer = document.createElement('div');
   trashIconContainer.className = 'todo-delete hide';

   todoDescription.addEventListener('input', () => {
     CRUD.updateTodo(li.dataset.index, todoDescription.value);
     CRUD.populateList();
   });

   todoDescription.addEventListener('mousedown', () => {
     li.style.backgroundColor = '#f1f8b5';
     trashIconContainer.classList.remove('hide');
     ellipsisIcon.classList.add('hide');
   });

   li.addEventListener('mouseout', () => {
     li.style.backgroundColor = '#fff';
   });

   trashIconContainer.addEventListener('click', () => {
     CRUD.deleteTodo(li.dataset.index);
     CRUD.populateList();
   });

   completedIconContainer.addEventListener('click', () => {
     CRUD.completeTodo(li.dataset.index);
     todoDescription.style.textDecoration = todo.completed ? 'line-through' : 'none';
     CRUD.populateList();
   });

   incompleteIconContainer.addEventListener('click', () => {
     CRUD.completeTodo(li.dataset.index);
     todoDescription.style.textDecoration = todo.completed ? 'line-through' : 'none';
     CRUD.populateList();
   });

   const trashIcon = document.createElement('i');
   trashIcon.className = 'fa-regular fa-trash-can fa-2x';
   trashIconContainer.appendChild(trashIcon);

   li.append(todo.completed ? completedIconContainer : incompleteIconContainer);
   li.append(todoDescription);
   li.append(ellipsisIcon);
   li.append(trashIconContainer);
   return li;
 });

 static populateList = () => {
   const listContainer = document.querySelector('.todo-list');
   listContainer.innerHTML = '';
   listContainer.append(...CRUD.getListsHTML(readData()));
 }
}