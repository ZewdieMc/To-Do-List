import Todo from './todo.js';

export default class CRUD {
  constructor() {
    this.todoObjects = [];
  }

  // *Add new todo object to todoObjects array
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

 // !Remove todo object from todoObjects array
 static deleteTodo = (index) => {
   this.todoObjects.splice(index, 1);
   this.todoObjects.forEach((todo, i) => {
     todo.index = i;
   });
 };

 //  ?Update todo object in todoObjects array
 static updateTodo = (index, value) => {
   this.todoObjects[index].description = value;
 };

 static completeTodo = (index) => {
   this.todoObjects[index].completed = !this.todoObjects[index].completed;
 };
}