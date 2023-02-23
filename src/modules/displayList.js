export default (todoObjects) => todoObjects.map((todo) => {
  const li = document.createElement('li');
  li.classList.add('todo-item');
  li.setAttribute('data-index', todo.index);
  li.setAttribute('data-completed', todo.completed);

  li.innerHTML = todo.completed ? `
  <i class='fa-regular fa-circle-check todo-completed fa-2x'></i>` : `
  <div class='todo-check'><i class="fa-regular fa-square fa-2x"></i></div>  `;
  li.innerHTML += `
  <input type='text' class='todo-edit' value='${todo.description}'/>
  <i class="fas fa-ellipsis-v todo-ellipsis fa-2x hide"></i>
  <div class='todo-delete '><i class="fa-regular fa-trash-can fa-2x"></i></div>
  `;
  return li;
});