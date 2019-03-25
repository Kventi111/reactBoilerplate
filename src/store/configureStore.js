import { createStore,applyMiddleware } from "redux"
import logger from "redux-logger"
import thunk from  'redux-thunk'

import rootReducers from '../reducers'

export default () => {
  const store = createStore(rootReducers,applyMiddleware(logger,thunk))
  return store
}