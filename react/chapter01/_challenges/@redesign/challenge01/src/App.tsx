import React from 'react';

import AppProvider from './hooks';

import GlobalStyles from './styles/global';

const App: React.FC = () => {
  return (
    <AppProvider>
      <h1>Hello We Notes</h1>
      <GlobalStyles />
    </AppProvider>
  );
};

export default App;
