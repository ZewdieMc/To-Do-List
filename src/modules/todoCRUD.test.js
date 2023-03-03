/**
 * @jest-environment jsdom
 */
import todoList from './todoCRUD.js';

document.body.innerHTML = `
<div class="todo-container">
<ul class="todo-list"></ul>
<div class="clear-todo">Clear All Completed </div>
</div>
`;
describe('Test Add and Remove functions of the ToDo', () => {
  test('Test first Add', () => {
    todoList.addTodo('test 1');
    const list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(1);
  });
  test('Test second Add', () => {
    todoList.addTodo('test 2');
    const list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(2);
  });
  test('Test third Add', () => {
    todoList.addTodo('test 3');
    const list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(3);
  });
});

describe('Test Remove', () => {
  test('Test first remove', () => {
    todoList.deleteTodo(0);
    const list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(2);
  });
  test('Test second remove', () => {
    todoList.deleteTodo(0);
    const list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(1);
  });
  test('Test third remove', () => {
    todoList.deleteTodo(0);
    const list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(0);
  });
  test('Test fourth remove', () => {
    todoList.deleteTodo(0);
    const list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(0);
  });
});