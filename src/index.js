import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import Application from './components/Application.jsx';

// require('./styles/main.less');

ReactDOM.render(
  <Provider store={store}>
    <Application/> 
  </Provider>,
  document.getElementById('content')
);