import React from 'react';
import {
  useLocation,
  Switch,
  Redirect,
  Route as RedirectRoute,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <AnimatePresence exitBeforeEnter={pathname === '/dashboard'}>
      <Switch location={location} key={pathname}>
        <PublicRoute path="/" exact component={SignIn} />

        <PrivateRoute path="/dashboard" component={Dashboard} />

        <RedirectRoute render={() => <Redirect to="/" />} />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
