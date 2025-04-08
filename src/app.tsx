import * as React from 'react';
import { Provider, useDispatch } from 'react-redux';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';

import { IntlProvider } from 'react-intl';
import { ArticleRouter } from './components/article/article-router';
import { ErrorMessage } from './components/common/error-message';
import { HeaderMenu } from './components/common/header-menu';
import { SearchResults } from './components/common/search-results';
import { MainFooter } from './components/footer';
import { SplitInvoiceForm } from './components/transaction';
import { UserRouter } from './components/user/user-router';
import { en } from './locales/en';
import { store } from './store';
import { startLoadingSettings } from './store/reducers';

import 'inter-ui';
import { ThemeProvider } from './bricks';
import { WrappedIdleTimer } from './components/common/idle-timer';
import { MetricsView } from './components/metrics';

const Layout = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
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

export const App = () => {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <IntlProvider textComponent={React.Fragment} locale="en" messages={en}>
          <HashRouter hashType="hashbang">
            <Layout />
          </HashRouter>
        </IntlProvider>
      </Provider>
    </ThemeProvider>
  );
};

// tslint:disable-next-line:no-default-export
export default App;
