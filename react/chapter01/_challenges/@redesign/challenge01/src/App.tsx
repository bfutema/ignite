import React from 'react';

import AppProvider from './hooks';

import Routes from './routes';

import GlobalStyles from './styles/global';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Routes />
      <GlobalStyles />
    </AppProvider>
  );
};

export default App;
