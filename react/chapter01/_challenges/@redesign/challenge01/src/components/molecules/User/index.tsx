import React, { useMemo } from 'react';
import { useTheme } from 'styled-components';
import format from 'date-fns/format';

import { useAuth } from '../../../hooks/useAuth';
import { useTasks } from '../../../hooks/useTasks';

import { removeHashFromColor } from '../../../utils';

import { Container, Perfil, TasksInformations } from './styles';

const User: React.FC = () => {
  const { auth } = useAuth();
  const { tasks } = useTasks();
  const { colors } = useTheme();

  const avatar_url = useMemo(() => {
    const queryParams = `
      rounded=true
      &format=svg
      &background=${removeHashFromColor(colors.gray.dark)}
      &color=${removeHashFromColor(colors.text)}
      &name=${auth.name}
    `;

    return `https://ui-avatars.com/api/?${queryParams}`;
  }, [auth, colors]);

  const parsedDate = useMemo(() => {
    const now = new Date();

    return format(now, 'dd MMM yyyy');
  }, []);

  const summary = useMemo(() => {
    const calculatedTasks = tasks.reduce(
      (acc, task) => {
        if (task.isComplete) {
          acc.completed += 1;
        } else {
          acc.notCompleted += 1;
        }

        return acc;
      },
      {
        completed: 0,
        notCompleted: 0,
        total: tasks.length,
      },
    );

    return calculatedTasks;
  }, [tasks]);

  return (
    <Container>
      <Perfil>
        <img src={avatar_url} alt={`Conta de ${auth.name}`} />

        <strong>{auth.name}</strong>

        <span>{parsedDate}</span>
      </Perfil>

      <TasksInformations>
        <div>
          Tarefas Concluídas:
          <strong>{summary.completed}</strong>
        </div>

        <div>
          Tarefas Não Concluídas:
          <strong>{summary.notCompleted}</strong>
        </div>

        <div>
          Total de Tarefas:
          <strong>{summary.total}</strong>
        </div>
      </TasksInformations>
    </Container>
  );
};

export default User;
