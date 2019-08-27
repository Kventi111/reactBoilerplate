import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux'
import store from './store/configureStore';
import {routes} from './routes'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PrivateRoute from './components/global/privateRoute'

import './style.css'



ReactDOM.render(
  <div className="mainWarapper">
    <Provider store={store()}>
      <Router>
        <Switch>
          {routes.openRoutes.map((route,i) => <Route key={i} {...route} />)}
          {routes.secureRoutes.map((route,i) => <PrivateRoute key={i} {...route} />)}
        </Switch>
      </Router>
    </Provider>
  </div>, document.getElementById('root')
);
