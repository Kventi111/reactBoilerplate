import { put, takeEvery,select } from 'redux-saga/effects'
import { ACTIONS, LOCAL_REDUCER, FIELD_ID } from './constants'
import dialogApi from 'api/dialog'
import userApi from 'api/user'


export function* mount() {
  yield put({ type : ACTIONS.CHAT_CONTAINER_GET_DIALOGS })
  yield put({ type : ACTIONS.GET_USER_REQUEST })

  yield put({ type : ACTIONS.CHAT_CONTAINER_MOUNT_SUCCESS, payload : true })
}

export function* getDialogsSaga() {
  const result = yield dialogApi.getDialogs('get','/dialogs')

  yield put({ type : ACTIONS.CHAT_CONTAINER_GET_DIALOGS_SUCCESS, payload : result })
}

export function* getUserInfo() {
  const result = yield userApi.getMe('get','/user')

  yield put({ type : ACTIONS.GET_USER_SUCCESS, payload : result })
}

export default function* chatSaga() {
  yield takeEvery(ACTIONS.CHAT_CONTAINER_MOUNT,mount)
  yield takeEvery(ACTIONS.CHAT_CONTAINER_GET_DIALOGS,getDialogsSaga)
  yield takeEvery(ACTIONS.GET_USER_REQUEST,getUserInfo)
}