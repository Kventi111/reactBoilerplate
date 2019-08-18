import { fromJS } from 'immutable'
import { ACTIONS, FIELD_ID } from './constants'

const initialRegisterState = {
  [FIELD_ID.EMAIL] : '',
  [FIELD_ID.FIRST_NAME] : '',
  [FIELD_ID.LAST_NAME] : '',
  [FIELD_ID.PASSWORD] : '',
  fullName : '',
}

const initialLoginState = {
  [FIELD_ID.EMAIL] : '',
  [FIELD_ID.PASSWORD] : ''
}

const initialState = fromJS({
  mount : false,
  loading : true,
  error : false,
  registerView : true,
  registrationForm : initialRegisterState,
  loginForm : initialLoginState
})


export const mount = state => state.merge({
  mount : true,
  loading : false
})

export const unmount = state => state.merge({
  mount : false
})

export const loginFormChangeData = (state,{fieldId,fieldValue}) => state.setIn(['loginForm',fieldId],fieldValue)
export const registerFormChangeData = (state,{fieldId,fieldValue}) => state.setIn(['registrationForm',fieldId],fieldValue)

export default function authContainerReducer(state = initialState,{type,payload}) {
  switch (type) {
    case ACTIONS.LOGIN_FORM_DATA_CHANGE_ACTION:
      return loginFormChangeData(state,payload)
    case ACTIONS.REGISTER_FORM_DATA_CHANGE_ACTION:
      return registerFormChangeData(state,payload)
    default:
      return state;
  }
}