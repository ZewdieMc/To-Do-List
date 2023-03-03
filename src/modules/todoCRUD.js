import Todo from './todo.js';
import { storeData, readData } from './localStorage.js';

class TodoList {
  constructor() {
    this.list = [];
  }

 addTodo = (data) => {
   this.list.push(
     new Todo(
       this.list.length,
       false,
       data,
     ),
   );
   storeData(this.list);
   this.populateList();
 };

 deleteTodo = (index) => {
   this.list.splice(index, 1);
   this.list.forEach((todo, i) => {
     todo.index = i;
   });
   storeData(this.list);
   this.populateList();
 };

 updateTodo = (index, value) => {
   if (this.list[index]) this.list[index].description = value;
   storeData(this.list);
   this.populateList();
 };

 completeTodo = (index) => {
   if (this.list[index]) { this.list[index].completed = !this.list[index].completed; }
   storeData(this.list);
   this.populateList();
 };

 getListsHTML = (lists) => lists.map((todo) => {
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
     this.updateTodo(li.dataset.index, todoDescription.value);
     this.populateList();
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
     this.deleteTodo(li.dataset.index);
     this.populateList();
   });

   completedIconContainer.addEventListener('click', () => {
     this.completeTodo(li.dataset.index);
     todoDescription.style.textDecoration = todo.completed ? 'line-through' : 'none';
     this.populateList();
   });

   incompleteIconContainer.addEventListener('click', () => {
     this.completeTodo(li.dataset.index);
     todoDescription.style.textDecoration = todo.completed ? 'line-through' : 'none';
     this.populateList();
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

 populateList = () => {
   const listContainer = document.querySelector('.todo-list');
   listContainer.innerHTML = '';
   listContainer.append(...this.getListsHTML(readData()));
 }
}

const todoList = new TodoList();
export default todoList;