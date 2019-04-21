import { fromJS } from 'immutable'
import { ACTIONS } from './constants'

const initialApp = fromJS({
  version : '',
  hasError : false,
  hasErrorMessage : '',
  loader :  false
})

export const appInit = state => state.merge({
  loader : true
})

export const appInitSuccess = state => state.merge({
  version : '1',
  hasError : false,
  hasErrorMessage : '',
  loader :  false
})

export const appInitFail = state => state.merge({
  version : '1',
  hasError : false,
  hasErrorMessage : '',
  loader :  false
})

export default function Application(state = initialApp, action) {
  switch (action.type) {
    case ACTIONS.APP_INIT:
      return appInit(state)
    default:
      return state
  }
}