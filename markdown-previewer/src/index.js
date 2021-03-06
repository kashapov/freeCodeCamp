import React from 'react';
import ReactDOM from 'react-dom';

import AppStore from './AppStore';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import './styles/index.css';

ReactDOM.render(
  <AppStore>{(store) => <App {...store} />}</AppStore>,
  document.getElementById('root')
);

serviceWorker.unregister();
