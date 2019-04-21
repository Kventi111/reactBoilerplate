import { createStore,applyMiddleware } from "redux"
import logger from "redux-logger"
import rootSaga from '../application/saga'
import createSagaMiddleware from 'redux-saga';

import rootReducers from '../application/combine-reducers'

const sagaMiddleware = createSagaMiddleware()

export default () => {
  const store = createStore(rootReducers,applyMiddleware(logger,sagaMiddleware))
  sagaMiddleware.run(rootSaga)
  
  return store
}

