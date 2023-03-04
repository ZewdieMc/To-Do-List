/**
 * @jest-environment jsdom
 */
import todoList from './todoCRUD.js';
import clearCompleted from './todoStatus.js';

document.body.innerHTML = `
<ul class="todo-list"></ul>
<div class="clear-todo">Clear All Completed </div>
`;
describe('Test Add function', () => {
  test('Add first Item', () => {
    todoList.addTodo('test 1');
    const list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(1);
  });
  test('Add second Item', () => {
    todoList.addTodo('test 2');
    const list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(2);
  });
});

describe('Test Remove function', () => {
  test('Remove first Item', () => {
    todoList.deleteTodo(0);
    const list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(1);
  });
  test('Remove second Item', () => {
    todoList.deleteTodo(0);
    const list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(0);
  });
});

describe('Test Edit function', () => {
  test('Edit first item', () => {
    todoList.addTodo('first todo item');
    todoList.updateTodo(0, 'First todo item');
    const firstTodoItem = document.querySelector('.todo-list li:first-child > input');
    expect(firstTodoItem.value).toEqual('First todo item');
  });
  test('Edit last item', () => {
    todoList.addTodo('second todo item');
    todoList.updateTodo(todoList.list.length - 1, 'Second todo item');
    const lastTodoItem = document.querySelector('.todo-list li:last-child > input');
    expect(lastTodoItem.value).toEqual('Second todo item');
  });
});

describe('Test updateTodoStatus function', () => {
  test('Check toggle completed status function', () => {
    todoList.completeTodo(0);
    let firstTodoItem = document.querySelector('.todo-list li:first-child');
    expect(firstTodoItem.dataset.completed).toBe('true');
    todoList.completeTodo(0);
    firstTodoItem = document.querySelector('.todo-list li:first-child');
    expect(firstTodoItem.dataset.completed).toBe('false');
  });
});

describe('Test clearAllCmpleted function', () => {
  test('Clear completed', () => {
    todoList.completeTodo(1);
    clearCompleted(todoList.list);
    todoList.populateList();
    let listItems = document.querySelectorAll('.todo-list li');
    expect(listItems.length).toBe(1);
    todoList.completeTodo(0);
    clearCompleted(todoList.list);
    todoList.populateList();
    listItems = document.querySelectorAll('.todo-list li');
    expect(listItems.length).toBe(0);
  });
});