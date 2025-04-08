import * as React from 'react';
import { useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

const Component: React.FC<RouteComponentProps> = (props) => {
  // biome-ignore lint/correctness/useExhaustiveDependencies: required to scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.location.pathname]);
  return null;
};

export const ScrollToTop = withRouter(Component);
