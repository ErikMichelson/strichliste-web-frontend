import { render } from '@testing-library/react';
import { MemoryHistory, createMemoryHistory } from 'history';
import * as React from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { DeepPartial, Store, createStore } from 'redux';

import { AppState, reducer } from '../store';

export function renderWithContext(
  ui: JSX.Element,
  initialState: DeepPartial<AppState>,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  store = createStore<any, any, any, any>(reducer, initialState),
  history: MemoryHistory = createMemoryHistory()
) {
  return render(
    <Provider store={store}>
      <Router history={history}>
        <IntlProvider locale="en">{ui}</IntlProvider>
      </Router>
    </Provider>
  );
}

export function renderAndReturnContext(
  ui: JSX.Element,
  initialState: DeepPartial<AppState>,
  store: Store<AppState> = createStore<any, any, any, any>(reducer, initialState),
  history: MemoryHistory = createMemoryHistory()
) {
  return {
    result: render(
      <Provider store={store}>
        <Router history={history}>
          <IntlProvider locale="en" textComponent={React.Fragment}>
            {ui}
          </IntlProvider>
        </Router>
      </Provider>
    ),
    store,
    history,
  };
}

export function renderWithIntl(ui: JSX.Element) {
  return render(
    <IntlProvider locale="en" textComponent={React.Fragment}>
      {ui}
    </IntlProvider>
  );
}
