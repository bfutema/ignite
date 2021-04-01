import React from 'react';

import { Container } from './styles';

const DefaultLayout: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default DefaultLayout;
