import { Todo } from "../model";
import { useTask } from "../store/useTask";

interface Props {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

const useAddTask = () => {
  const addingTask = useTask((state) => state.addTask);
  const task = useTask((state) => state.tasks);
  const handleSubmit = ({ input, setInput }: Props) => {
    if (!input) return;
    const data: Todo = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    localStorage.setItem("tasks", JSON.stringify([data, ...task]));
    addingTask(data);
    setInput("");
  };
  return handleSubmit;
};

export default useAddTask;
