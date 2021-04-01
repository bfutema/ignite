import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

interface PublicRouteProps extends RouteProps {
  isPrivate?: boolean;
  component: React.FC<RouteProps>;
}

const PublicRoute: React.FC<PublicRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { auth } = useAuth();

  if (auth.signed) {
    return <Redirect to="/dashboard" />;
  }

  return <Route {...rest} render={props => <Component {...props} />} />;
};

export default PublicRoute;
