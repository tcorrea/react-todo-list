import { create } from "zustand";
import Todo from "../types/Todo";
import { LOCAL_STORAGE_KEY } from "../constants";

type TodoStoreType = {
  todos: Todo[];
  addTodo: (todoTitle: string) => void;
  deleteTodo: (index: number) => void;
  toggleCompleted: (index: number) => void;
};

const useTodoStore = create<TodoStoreType>((set) => ({
  /** Todos */
  todos: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) ?? "[]"),

  /** Add a new todo to the list */
  addTodo: function (todoTitle: string) {
    set((state) => {
      const todo: Todo = {
        title: todoTitle,
        completed: false,
        createdAt: new Date().toLocaleDateString("en-us", {
          weekday: "long",
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
      };
      updateLocalStorage([...state.todos, todo]);
      return { todos: [...state.todos, todo] };
    });
  },

  /** Delete a todo from the list */
  deleteTodo: function (index: number) {
    set((state) => {
      const newTodos = state.todos.filter((_, i) => i !== index);
      updateLocalStorage(newTodos);
      return { todos: newTodos };
    });
  },

  /** Toggle status of a todo */
  toggleCompleted: function (index: number) {
    set((state) => {
      const newTodos = state.todos.map((todo, i) => {
        if (i === index) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      updateLocalStorage(newTodos);
      return { todos: newTodos };
    });
  },
}));

function updateLocalStorage(todos: Todo[]) {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  } catch (e) {
    console.error("localStorage is not available", e);
  }
}
export default useTodoStore;
