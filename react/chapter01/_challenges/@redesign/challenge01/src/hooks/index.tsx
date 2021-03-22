import React from 'react';

import { AppThemeProvider } from './AppTheme';

const AppProvider: React.FC = ({ children }) => {
  return <AppThemeProvider>{children}</AppThemeProvider>;
};

export default AppProvider;
