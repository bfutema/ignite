import React from 'react';
import { useTheme } from 'styled-components';

import { AnimatedContainer } from './styles';

interface AuthLayoutProps {
  background: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ background, children }) => {
  const { colors } = useTheme();

  return (
    <AnimatedContainer
      initial={false}
      animate={{ background }}
      exit={{ background: colors.primary }}
      transition={{ duration: 0.35 }}
    >
      {children}
    </AnimatedContainer>
  );
};

export default AuthLayout;
