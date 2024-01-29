import { defineStore } from "pinia";
import { defaultTodos, MappedTodos } from "@/data/todos.js";
import { Todo, TodoStatus } from "@/types";

const initTodos = (): MappedTodos => {
  const cachedTodos = localStorage.getItem("todos");
  if (cachedTodos) {
    return JSON.parse(cachedTodos);
  }
  return defaultTodos;
};

export const useTodoStore = defineStore("todoStore", {
  state: () => ({
    todos: initTodos(),
  }),
  getters: {
    getAllTodos(state) {
      return state.todos;
    },
  },
  actions: {
    getByStatus(status: TodoStatus) {
      this.updateTodos(this.todos);
      return this.todos[status];
    },
    updateTodos(todos: MappedTodos) {
      this.todos = todos;
      localStorage.setItem("todos", JSON.stringify(todos));
    },
    addTodo(todo: Todo) {
      const tempTodos = this.todos;
      tempTodos[todo.status].push(todo);
      this.todos = tempTodos;

      this.updateTodos(this.todos);
    },
    removeTodo(todo: Todo) {
      const tempTodos = this.todos[todo.status].filter((item: Todo) => {
        return item.id !== todo.id;
      });
      this.todos[todo.status] = tempTodos;
    },
    removeMultiple(array: number[]) {
      let tempTodos = this.todos;
      tempTodos["Pending"] = tempTodos["Pending"].filter((item) => {
        return !array.includes(item.id);
      });
      tempTodos["Doing"] = tempTodos["Doing"].filter((item) => {
        return !array.includes(item.id);
      });
      tempTodos["Done"] = tempTodos["Done"].filter((item) => {
        return !array.includes(item.id);
      });
      this.todos = tempTodos;

      this.updateTodos(this.todos);
    },
  },
});
