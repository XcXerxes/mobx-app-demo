import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'mobx-react'
import store from './mobx/store'

ReactDOM.render(
  /*tslint:disable*/
  <Provider appState= {store}>
    <App appState= {store} />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
