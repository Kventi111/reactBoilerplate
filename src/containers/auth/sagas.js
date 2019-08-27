import { put, takeEvery,select } from 'redux-saga/effects'
import { ACTIONS,LOCAL_REDUCER,FIELD_ID } from './constants'
import userApi from 'api/user'

const registerFormDataSelector = state => state.getIn([LOCAL_REDUCER,'registrationForm'])
const loginFormDataSelector = state => state.getIn([LOCAL_REDUCER,'loginForm'])

  
export function* createUserRequestSaga() {
  const data = yield select(registerFormDataSelector);

  const postData = JSON.stringify({
    fullname : data.get(FIELD_ID.FIRST_NAME) + data.get(FIELD_ID.LAST_NAME),
    email : data.get(FIELD_ID.EMAIL),
    password : data.get(FIELD_ID.PASSWORD)
  })
  
  const result = yield userApi.signup('post','/user/signup',postData)

  localStorage.setItem('authToken',result.token)  
}

export function* loginUserRequestSaga() {
  const data = yield select(loginFormDataSelector);

  const postData = JSON.stringify({
    email : data.get(FIELD_ID.EMAIL),
    password : data.get(FIELD_ID.PASSWORD)
  })
  
  const result = yield userApi.signin('post','/user/signin',postData)

  if (result.status === 'success' && result) {
    localStorage.setItem('authToken',result.token)
    window.location.replace('/chat')  
  }else {
    console.log('error');
  }
}


export function* registerFormChangeDataSaga({payload}) {
  const {fieldId} = payload;

  switch (fieldId) {
    case FIELD_ID.REGISTER_BTN:
      yield createUserRequestSaga()
      break;
    default:
      break;
  }
}

export function* loginFormChangeDataSaga({payload}) {
  const {fieldId} = payload;

  switch (fieldId) {
    case FIELD_ID.LOGIN_BTN:
      yield loginUserRequestSaga()
      break;
    default:
      break;
  }
}

export default function* authSaga() {
  yield takeEvery(ACTIONS.REGISTER_FORM_DATA_CHANGE_ACTION, registerFormChangeDataSaga)
  yield takeEvery(ACTIONS.LOGIN_FORM_DATA_CHANGE_ACTION, loginFormChangeDataSaga)
}