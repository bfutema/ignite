import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

interface RouteWrapperProps extends RouteProps {
  isPrivate?: boolean;
  component: React.FC<RouteProps>;
}

const RouteWrapper: React.FC<RouteWrapperProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const signed = false;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  return <Route {...rest} render={props => <Component {...props} />} />;
};

export default RouteWrapper;
