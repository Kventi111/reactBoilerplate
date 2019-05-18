import { all,put, takeEvery } from 'redux-saga/effects'
import { ACTIONS } from './constants'
import questionarySags from '../containers/questionnaire/sagas'

export function* appInit() {
  yield put({ type: 'INCREMENT' })
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* applicationSagas() {
  yield all([
    yield takeEvery(ACTIONS.APP_INIT, appInit),
    questionarySags(),
  ]);
}
