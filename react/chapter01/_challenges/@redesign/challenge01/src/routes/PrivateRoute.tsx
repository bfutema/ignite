import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

import { DefaultLayout } from '../pages/_layouts';

interface RouteWrapperProps extends RouteProps {
  isPrivate?: boolean;
  component: React.FC<RouteProps>;
}

const RouteWrapper: React.FC<RouteWrapperProps> = ({
  component: Component,
  ...rest
}) => {
  const { auth } = useAuth();

  if (!auth.signed) {
    return <Redirect to="/" />;
  }

  const Layout = DefaultLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export default RouteWrapper;
