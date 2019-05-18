import { put, takeEvery,delay } from 'redux-saga/effects'
import { ACTIONS } from './constants'

export function* appInit() {
  yield delay(1000);
  yield put({ type: ACTIONS.QUESTIONARY_CONTAINER_MOUNT_SUCCESS })
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* questionarySaga() {
  yield takeEvery(ACTIONS.QUESTIONARY_CONTAINER_MOUNT, appInit)
}