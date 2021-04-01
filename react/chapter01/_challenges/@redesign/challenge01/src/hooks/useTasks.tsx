import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

interface ITask {
  id: number;
  title: string;
  isComplete: boolean;
}

interface TasksContextData {
  tasks: ITask[];
  addNewTask: (_title: string) => void;
  completeTask: (_id: number) => void;
  removeTask: (_id: number) => void;
}

const TasksContext = createContext<TasksContextData>({} as TasksContextData);

const TasksProvider: React.FC = ({ children }) => {
  const [tasks, setTasks] = useState<ITask[]>([
    { id: 1, title: 'Primeira tarefa', isComplete: true },
    { id: 2, title: 'Segunda tarefa', isComplete: false },
    { id: 3, title: 'Terceira tarefa', isComplete: false },
    { id: 4, title: 'Quarta tarefa', isComplete: false },
    { id: 5, title: 'Quinta tarefa', isComplete: false },
  ]);

  const addNewTask = useCallback((title: string) => {
    if (!title) return;

    setTasks(previousTasks => {
      const orderedTasks = previousTasks.sort((a, b) => b.id - a.id);

      let id = 0;

      if (orderedTasks.length === 0) id = 1;
      else id = orderedTasks[0].id + 1;

      const newTask = { id, title, isComplete: false };

      return [...previousTasks, newTask];
    });
  }, []);

  const completeTask = useCallback(
    (id: number) => {
      const updatedTasks = tasks.map(item =>
        item.id === id
          ? {
              ...item,
              isComplete: !item.isComplete,
            }
          : item,
      );

      setTasks(updatedTasks);
    },
    [tasks],
  );

  const removeTask = useCallback(
    (id: number) => {
      const filteredTasks = tasks.filter(item => item.id !== id);

      setTasks(filteredTasks);
    },
    [tasks],
  );

  const value = useMemo(
    () => ({ tasks, addNewTask, completeTask, removeTask }),
    [tasks, addNewTask, completeTask, removeTask],
  );

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};

function useTasks(): TasksContextData {
  const context = useContext(TasksContext);

  return context;
}

export { TasksProvider, useTasks };
