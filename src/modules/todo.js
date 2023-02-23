export default class Todo {
  constructor(index, completed = false, description) {
    this.completed = completed;
    this.index = index;
    this.description = description;
  }
}