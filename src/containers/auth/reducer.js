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
  registerView : false,
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

export const authFormChangeData = (state,{fieldId,fieldValue}) => state.setIn(['loginForm',fieldId],fieldValue)

export default function authContainerReducer(state = initialState,{type,payload}) {
  switch (type) {
    case ACTIONS.FORM_DATA_CHANGE_ACTION:
      return authFormChangeData(state,payload)
    default:
      return state;
  }
}