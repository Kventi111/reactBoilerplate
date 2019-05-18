import { createStore,applyMiddleware } from "redux"
import rootSaga from '../application/saga'
import createSagaMiddleware from 'redux-saga';

import rootReducers from '../application/combine-reducers'

const sagaMiddleware = createSagaMiddleware()

// Loger Settings
const createLogger = require('redux-logger').createLogger; // eslint-disable-line global-require
const logger = createLogger({
  level: 'log',
  collapsed: true,
  timestamp: false,
  stateTransformer: state => state && state.toJS(),
  colors: {
    title: ({ type }) => {
      if (/_FAIL$/.test(type)) return '#CC0000';
      return '#007586';
    },
    prevState: () => '#9E9E9E',
    action: () => '#03A9F4',
    nextState: () => '#4CAF50',
    error: () => '#F20404'
  }
});

export default () => {
  const store = createStore(rootReducers,applyMiddleware(logger,sagaMiddleware))
  sagaMiddleware.run(rootSaga)
  
  return store
}

