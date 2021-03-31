import React from 'react';

import { AppThemeProvider } from './useTheme';
import { AuthProvider } from './useAuth';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AppThemeProvider>
      <AuthProvider>{children}</AuthProvider>
    </AppThemeProvider>
  );
};

export default AppProvider;
