import type React from 'react';
import { Fragment } from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { en } from './locales/en';
import { store } from './store';
import 'inter-ui';
import { ThemeProvider } from './bricks';
import { Layout } from './layout';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <IntlProvider textComponent={Fragment} locale="en" messages={en}>
          <HashRouter hashType="hashbang">
            <Layout />
          </HashRouter>
        </IntlProvider>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
