import { put, takeEvery,all } from 'redux-saga/effects'
import { ACTIONS } from './constants'
import userApi from 'api/user'

import AuthSaga from '../containers/auth/sagas'
import ChatSaga from '../containers/chat/sagas'

export function* appInit() {
  yield put({ type : ACTIONS.GET_USER_INFO_REQUEST })
}

export function* getUserInfo() {
  const result = yield userApi.getDialogs('get','/user')

  console.log(result);
}

export default function* rootSaga() {
  yield all([
    AuthSaga(),
    ChatSaga()
  ])
  yield takeEvery(ACTIONS.APP_INIT, appInit)
  yield takeEvery(ACTIONS.GET_USER_INFO_REQUEST, getUserInfo)
}