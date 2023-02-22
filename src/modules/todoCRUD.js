import Todo from './todo.js';

const todoObjects = [];

// *Add new todo object to todoObjects array
const addTodo = (event) => {
  todoObjects.push(
    new Todo(
      todoObjects.length,
      false,
      event.target.value,
    ),
  );
  event.target.value = '';
};

// !Remove todo object from todoObjects array
const deleteTodo = (index) => {
  todoObjects.splice(index, 1);
  todoObjects.forEach((todo, i) => {
    todo.index = i;
  });
  // console.log('after', todoObjects);
};

//  ?Update todo object in todoObjects array
const updateTodo = (index, value) => {
  todoObjects[index].description = value;
};

const completeTodo = (index) => {
  todoObjects[index].completed = true;
};

export {
  addTodo, deleteTodo, completeTodo, updateTodo, todoObjects,
};