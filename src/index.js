import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux'
import store from './store/configureStore';
import {routes} from './routes'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './style.css'



ReactDOM.render(
  <div className="mainWarapper">
  <Provider store={store()}>
    <Router>
      {routes.openRoute.map((route,i) => <Route key={i} {...route} />)}
    </Router>
  </Provider>
  </div>, document.getElementById('root')
);
