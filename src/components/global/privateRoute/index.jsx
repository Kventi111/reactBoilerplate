import React from 'react';
import {Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component : Component, rest }) => (
  <Route
    {...rest}
    render={props => {
      const auth = !!localStorage.getItem('authToken');
      return auth ? <Component {...props} /> : <Redirect to={{pathname : '/login', state: {from : props.location}}} />
    }
    }
  />
)

export default PrivateRoute;