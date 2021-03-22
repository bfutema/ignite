import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={() => <h1>Hello We Notes</h1>} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
