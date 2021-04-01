import React, { ButtonHTMLAttributes } from 'react';
import Ink from 'react-ink';

import { Container } from './styles';

export type ButtonVariants = 'secondary' | 'transparent';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  outline?: boolean;
  color: string;
}

const Button: React.FC<IButtonProps> = ({
  outline,
  color,
  children,
  ...rest
}) => (
  <Container type="button" outline={outline} color={color} {...rest}>
    {children}
    <Ink />
  </Container>
);

export default Button;
