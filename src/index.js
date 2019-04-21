import React from 'react';
import ReactDOM from 'react-dom';

import Application from './application';
import {Provider} from 'react-redux'
import store from './store/configureStore'


ReactDOM.render(
  <Provider store={store()}>
    <Application />
  </Provider>, document.getElementById('root')
);
