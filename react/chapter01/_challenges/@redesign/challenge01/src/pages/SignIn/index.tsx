import React, { ChangeEvent, useCallback, useRef, useState } from 'react';
import { transform } from 'framer-motion';
import { useTheme } from 'styled-components';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { useHistory } from 'react-router-dom';
import { AuthLayout } from '../_layouts';

import { Button, Input } from '../../components/atoms';

import { useAuth } from '../../hooks/useAuth';

import { getValidationErrors } from '../../utils';

import { AnimatedContainer, Unform } from './styles';

import { ANIMATION } from './animations';

interface ISignInCredentials {
  name: string;
}

const SignIn: React.FC = () => {
  const { title, colors } = useTheme();
  const { signIn } = useAuth();

  const history = useHistory();

  const [inputValue, setInputValue] = useState<string>('');

  const unformRef = useRef<FormHandles>(null);

  const inputRange = [0, 5];
  const outputRange = [colors.white, colors.primary];
  const animateBackground = transform(inputRange, outputRange);
  const animateColor = transform(inputRange, [
    title === 'light' ? colors.black : colors.white,
    colors.primary,
  ]);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;

    setInputValue(value);
  }, []);

  const handleSubmit = useCallback(
    async (formData: ISignInCredentials) => {
      try {
        unformRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Preencha seu nome para acessar o app!'),
        });

        await schema.validate(formData, { abortEarly: false });

        const { name } = formData;

        signIn(name);

        history.push('/dashboard');
      } catch (err) {
        const errors = getValidationErrors(err);

        unformRef.current?.setErrors(errors);
      }
    },
    [signIn, history],
  );

  return (
    <AuthLayout background={animateBackground(inputValue.length)}>
      <AnimatedContainer
        variants={ANIMATION}
        initial="unMounted"
        animate="mounted"
        exit="unMounted"
        color={animateColor(inputValue.length)}
      >
        <h1>We Notes</h1>

        <h2>
          Seja bem vindo ao We Notes seu aplicativo de to-dos e redesign da
          interface do meu desafio no
          <a
            href="https://pages.rocketseat.com.br/ignite"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ignite
          </a>
        </h2>

        <Unform ref={unformRef} onSubmit={handleSubmit}>
          <label htmlFor="name">
            <Input
              type="text"
              name="name"
              placeholder="Digite seu nome para entrar"
              value={inputValue}
              onChange={handleChange}
            />
          </label>

          <Button type="submit" color={colors.gradients.primary}>
            Entrar no App
          </Button>
        </Unform>
      </AnimatedContainer>
    </AuthLayout>
  );
};

export default SignIn;
