import React, { useCallback, useRef, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { useTheme } from 'styled-components';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { useTasks } from '../../hooks/useTasks';
import { useAppTheme } from '../../hooks/useTheme';

import { getValidationErrors } from '../../utils';

import { Input } from '../../components/atoms';
import { Tasks, User } from '../../components/molecules';

import LeftNavigation from './LeftNavigation';
import RightNavigation from './RightNavigation';

import { Container, Main, Title, Form } from './styles';

const Dashboard: React.FC = () => {
  const { colors } = useTheme();
  const { toggleTheme } = useAppTheme();
  const { addNewTask } = useTasks();

  const [itemActive, setItemActive] = useState<string>('home');

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (formData: any) => {
      try {
        const schema = Yup.object().shape({
          task: Yup.string().required('Campo obrigatório!'),
        });

        await schema.validate(formData, { abortEarly: false });

        formRef.current?.setErrors({});

        addNewTask(formData.task);
      } catch (err) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    },
    [addNewTask],
  );

  return (
    <Container>
      <LeftNavigation itemActive={itemActive} setItemActive={setItemActive} />

      <Main>
        <Title>
          <div>
            <h1>Dashboard</h1>

            <p>Listagem de tarefas</p>
          </div>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <div>
              <Input
                name="task"
                type="text"
                placeholder="Adicionar novo todo"
              />
            </div>

            <button type="submit">
              <FiPlus color={colors.white} />
            </button>
          </Form>
        </Title>

        {itemActive === 'home' ? <Tasks /> : <User />}
      </Main>

      <RightNavigation>
        <button type="button" onClick={toggleTheme}>
          Alterar tema
        </button>
      </RightNavigation>
    </Container>
  );
};

export default Dashboard;
