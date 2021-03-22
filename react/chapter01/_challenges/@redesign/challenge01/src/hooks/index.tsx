import React from 'react';

import { AppThemeProvider } from './Theme';
import { AuthProvider } from './Auth';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AppThemeProvider>
      <AuthProvider>{children}</AuthProvider>
    </AppThemeProvider>
  );
};

export default AppProvider;
