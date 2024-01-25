import { create } from "zustand";
import { Todo } from "../model";

interface TaskState {
  tasks: Todo[];
  addTask: (task: Todo) => void;
  checkedTasK: (task: Todo[]) => void;
}

export const useTask = create<TaskState>((set) => ({
  tasks: JSON.parse(localStorage.getItem("tasks") || "[]"),
  addTask: (task: Todo) => set((state) => ({ tasks: [...state.tasks, task] })),
  checkedTasK: (task: Todo[]) => set({tasks: task}),
}));

export default useTask;
