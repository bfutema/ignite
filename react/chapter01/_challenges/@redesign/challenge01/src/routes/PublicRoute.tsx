import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

interface PublicRouteProps extends RouteProps {
  isPrivate?: boolean;
  component: React.FC<RouteProps>;
}

const PublicRoute: React.FC<PublicRouteProps> = ({
  component: Component,
  ...rest
}) => {
  return <Route {...rest} render={props => <Component {...props} />} />;
};

export default PublicRoute;
