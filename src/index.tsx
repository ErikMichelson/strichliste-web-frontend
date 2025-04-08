import React from 'react';
import { render } from 'react-dom';
import App from './app';
import * as serviceWorker from './serviceWorker';

serviceWorker.register();
if (import.meta.env.DEV) {
  import('react-axe').then((axe) => {
    axe.default(React, { render }, 1000);
    render(<App />, document.getElementById('root'));
  });
} else {
  render(<App />, document.getElementById('root'));
}
