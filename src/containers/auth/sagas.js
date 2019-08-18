import { put, takeEvery,select } from 'redux-saga/effects'
import { ACTIONS,LOCAL_REDUCER,FIELD_ID } from './constants'

const registerFormDataSelector = state => state.getIn([LOCAL_REDUCER,'registrationForm'])


export function* createUserRequestSaga() {
  const data = yield select(registerFormDataSelector);

  const postData = JSON.stringify({
    fullname : data.get(FIELD_ID.FIRST_NAME) + data.get(FIELD_ID.LAST_NAME),
    email : data.get(FIELD_ID.EMAIL),
    password : data.get(FIELD_ID.PASSWORD)
  })

  console.log(postData);
  
  fetch("http://localhost:3333/user/create", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: postData
    })
    .then(response => {
      return response.text();
    })
    .then(data => {
      console.log(data);
    });
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

export default function* authSaga() {
  yield takeEvery(ACTIONS.REGISTER_FORM_DATA_CHANGE_ACTION, registerFormChangeDataSaga)
}