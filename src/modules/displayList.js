export default (todoObjects) => todoObjects.map((todo) => {
  const li = document.createElement('li');
  li.classList.add('todo-item');
  li.setAttribute('data-index', todo.index);
  li.setAttribute('data-completed', todo.completed);

  li.innerHTML = `
  <div class='todo-check'><i class="fa-regular fa-square fa-2x"></i></div>
  <i class='fa-regular fa-circle-check todo-completed fa-2x hidden'></i>
  <input type='text' class='todo-edit' value='${todo.description}'/>
  <i class="fas fa-ellipsis-v todo-ellipsis hidden"></i>
  <div class='todo-delete'><i class="fa-regular fa-trash-can"></i></div>
  `;
  return li;
});