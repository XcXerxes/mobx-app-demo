import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import store from './mobx/store'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <App appState= {store} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
