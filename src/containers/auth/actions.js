import { ACTIONS } from './constants';

export const loginFromDataChangeAction = ({fieldId,fieldValue}) => ({
  type : ACTIONS.LOGIN_FORM_DATA_CHANGE_ACTION,
  payload : {fieldId, fieldValue}
})

export const registerFromDataChangeAction = ({fieldId,fieldValue}) => ({
  type : ACTIONS.REGISTER_FORM_DATA_CHANGE_ACTION,
  payload : {fieldId, fieldValue}
})