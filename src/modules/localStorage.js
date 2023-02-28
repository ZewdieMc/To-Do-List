const storeData = (todoList) => {
  localStorage.setItem('todoObjects', JSON.stringify(todoList));
};

const readData = () => JSON.parse(localStorage.getItem('todoObjects')) || [];

export { storeData, readData };