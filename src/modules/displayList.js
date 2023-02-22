export default (todoObjects) => todoObjects.map((todo) => {
  const li = document.createElement('li');
  li.classList.add('todo-item');
  li.setAttribute('data-index', todo.index);
  li.setAttribute('data-completed', todo.completed);

  li.innerHTML = `
  <input type='checkbox' class='todo-check'/>
  <i class='fa-regular fa-circle-check todo-completed fa-2x'></i>
  <input type='text' class='todo-edit' value='${todo.description}'/>
  <i class="fas fa-ellipsis-v todo-ellipsis"></i>
  <div class='todo-delete'><i class="fa-regular fa-trash-can"></i></div>
  `;
  return li;
});