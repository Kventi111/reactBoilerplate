import { ACTIONS } from './constants';

export const setCurrentDialog = id => ({
  type : ACTIONS.SET_CURRENT_DIALOG,
  payload : id
})

export const handleChangeAction = () => ({
  type : ACTIONS.HANDLE_CHANGE_ACTION,
  payload : {fieldId : '', fieldValue : ''}
})