import React from 'react';

import { AuthProvider } from './useAuth';
import { TasksProvider } from './useTasks';
import { AppThemeProvider } from './useTheme';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AppThemeProvider>
      <AuthProvider>
        <TasksProvider>{children}</TasksProvider>
      </AuthProvider>
    </AppThemeProvider>
  );
};

export default AppProvider;
