import Todo from './todo.js';

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
 };

 static deleteTodo = (index) => {
   this.todoObjects.splice(index, 1);
   this.todoObjects.forEach((todo, i) => {
     todo.index = i;
   });
 };

 static updateTodo = (index, value) => {
   this.todoObjects[index].description = value;
 };

 static completeTodo = (index) => {
   this.todoObjects[index].completed = !this.todoObjects[index].completed;
 };
}