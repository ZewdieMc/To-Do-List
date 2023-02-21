export default (todoObjects) => todoObjects.map((todo) => {
  const li = document.createElement('li');
  li.classList.add('todo-item');
  li.setAttribute('data-index', todo.index);
  li.setAttribute('data-completed', todo.completed);

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');

  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.classList.add('todo-input');
  input.setAttribute('value', todo.description);

  const ellipsisIcon = document.createElement('i');
  ellipsisIcon.classList.add('fas', 'fa-ellipsis-v', 'todo-ellipsis');

  li.append(checkbox);
  li.append(input);
  li.append(ellipsisIcon);
  return li;
});