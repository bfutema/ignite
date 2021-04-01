import React from 'react';
import { FiTrash } from 'react-icons/fi';

import { useTasks } from '../../../hooks/useTasks';

import { Container, Li, Label } from './styles';

const Tasks: React.FC = () => {
  const { tasks, completeTask, removeTask } = useTasks();

  return (
    <Container>
      {tasks
        .sort((a, b) => b.id - a.id)
        .map(task => (
          <Li key={task.id} isComplete={task.isComplete}>
            <div>
              <Label>
                <input
                  type="checkbox"
                  readOnly
                  checked={task.isComplete}
                  onClick={() => completeTask(task.id)}
                />

                <span />
              </Label>

              <p>{task.title}</p>
            </div>

            <button type="button" onClick={() => removeTask(task.id)}>
              <FiTrash size={16} />
            </button>
          </Li>
        ))}
    </Container>
  );
};

export default Tasks;
