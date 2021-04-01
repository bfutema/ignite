import React, { useMemo } from 'react';
import { useTheme } from 'styled-components';
import { FiLogOut } from 'react-icons/fi';
import { format } from 'date-fns';

import { useAuth } from '../../../hooks/useAuth';
import { useTasks } from '../../../hooks/useTasks';
import { useAppTheme } from '../../../hooks/useTheme';

import { removeHashFromColor } from '../../../utils';

import {
  Container,
  SettingsContainer,
  Perfil,
  Content,
  NotCompletedTasks,
  CompletedTasks,
} from './styles';

const LeftNavigation: React.FC = () => {
  const { colors } = useTheme();
  const { auth, signOut } = useAuth();
  const { tasks } = useTasks();

  const { toggleTheme } = useAppTheme();

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

  const notCompletedTasks = useMemo(() => {
    return tasks.filter(item => !item.isComplete);
  }, [tasks]);

  const completedTasks = useMemo(() => {
    return tasks.filter(item => item.isComplete);
  }, [tasks]);

  const parsedDate = useMemo(() => {
    const now = new Date();

    return format(now, 'dd MMM yyyy');
  }, []);

  return (
    <Container>
      <SettingsContainer>
        <button type="button" onClick={toggleTheme}>
          Mudar tema
        </button>

        <button type="button" onClick={signOut}>
          <FiLogOut color={colors.text} />
        </button>
      </SettingsContainer>

      <Perfil>
        <img src={avatar_url} alt={`Conta de ${auth.name}`} />

        <strong>{auth.name}</strong>

        <div>
          {summary.completed}/{summary.total} tarefas feitas
        </div>

        <span>{parsedDate}</span>
      </Perfil>

      <Content>
        <div>
          <strong>Tarefas Não Concluídas</strong>

          <NotCompletedTasks>
            {notCompletedTasks.map(task => (
              <span key={task.id}>{task.title}</span>
            ))}
          </NotCompletedTasks>
        </div>

        <div>
          <strong>Tarefas Concluídas</strong>

          <CompletedTasks>
            {completedTasks.map(task => (
              <span key={task.id}>{task.title}</span>
            ))}
          </CompletedTasks>
        </div>
      </Content>
    </Container>
  );
};

export default LeftNavigation;
