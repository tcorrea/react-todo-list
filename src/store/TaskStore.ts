import { create } from "zustand";
import Task from "../types/Task";
import { LOCAL_STORAGE_KEY } from "../constants";

type TaskStore = {
  tasks: Task[];
  addTask: (taskTitle: string) => void;
  deleteTask: (index: number) => void;
  toggleCompleted: (index: number) => void;
};

const useTaksStore = create<TaskStore>((set) => ({
  /** Tasks */
  tasks: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) ?? "[]"),

  /** Add a new task to the list */
  addTask: function (taskTitle: string) {
    set((state) => {
      const task: Task = {
        title: taskTitle,
        completed: false,
        createdAt: new Date().toLocaleDateString("en-us", {
          weekday: "long",
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
      };
      try {
        updateLocalStorage([...state.tasks, task]);
      } catch (e) {
        console.error("localStorage is not available", e);
      }
      return { tasks: [...state.tasks, task] };
    });
  },

  /** Delete a task from the list */
  deleteTask: function (index: number) {
    set((state) => {
      const newTasks = state.tasks.filter((_, i) => i !== index);
      try {
        updateLocalStorage(newTasks);
      } catch (e) {
        console.error("localStorage is not available", e);
      }
      return { tasks: newTasks };
    });
  },

  /** Toggle status of a task */
  toggleCompleted: function (index: number) {
    set((state) => {
      const newTasks = state.tasks.map((task, i) => {
        if (i === index) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
      try {
        updateLocalStorage(newTasks);
      } catch (e) {
        console.error("localStorage is not available", e);
      }
      return { tasks: newTasks };
    });
  },
}));

function updateLocalStorage(tasks: Task[]) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
}
export default useTaksStore;
