import type React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ArticleRouter } from './components/article/article-router';
import { ErrorMessage } from './components/common/error-message';
import { HeaderMenu } from './components/common/header-menu';
import { WrappedIdleTimer } from './components/common/idle-timer';
import { SearchResults } from './components/common/search-results';
import { MainFooter } from './components/footer';
import { MetricsView } from './components/metrics';
import { SplitInvoiceForm } from './components/transaction';
import { UserRouter } from './components/user/user-router';
import { startLoadingSettings } from './store/reducers';

export const Layout: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    startLoadingSettings(dispatch);
  }, [dispatch]);

  return (
    <>
      <ErrorMessage />
      <HeaderMenu />
      <Switch>
        <Route path="/user" component={UserRouter} />
        <Route
          path="/articles"
          render={() => (
            <>
              <WrappedIdleTimer />
              <ArticleRouter />
            </>
          )}
        />
        <Route
          path="/split-invoice"
          render={() => (
            <>
              <WrappedIdleTimer />
              <SplitInvoiceForm />
            </>
          )}
        />
        <Route
          path="/metrics"
          render={() => (
            <>
              <WrappedIdleTimer />
              <MetricsView />
            </>
          )}
        />
        <Route
          path="/search-results"
          render={(props) => (
            <>
              <WrappedIdleTimer />
              <SearchResults {...props} />
            </>
          )}
        />
        <Redirect from="/" to="/user/active" />
      </Switch>
      <MainFooter />
    </>
  );
};
