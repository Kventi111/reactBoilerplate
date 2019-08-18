import { put, takeEvery,all } from 'redux-saga/effects'
import { ACTIONS } from './constants'

import AuthSaga from '../containers/auth/sagas'

export function* appInit() {
  yield put({ type: 'INCREMENT' })
}

export default function* rootSaga() {
  yield all([
    AuthSaga()
  ])
  yield takeEvery(ACTIONS.APP_INIT, appInit)
}