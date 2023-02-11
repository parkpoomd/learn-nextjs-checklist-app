import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

// const data = window.localStorage.getItem("st-todo-list");
// const initialTodo = data ? JSON.parse(data) : [];

export const useTodoStore = create((set) => ({
  todos: [],
  addTodo: () =>
    set((state) => ({
      todos: [
        ...state.todos,
        { id: uuidv4(), text: "new todo", complete: false },
      ],
    })),
  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  toggleComplete: (id) => {
    set((state) => ({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      }),
    }));
  },
  editTodo: (id, text) => {
    set((state) => ({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text };
        }
        return todo;
      }),
    }));
  },
}));
