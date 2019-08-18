import { ACTIONS } from './constants';

export const handleChangeAction = ({fieldId,fieldValue}) => ({
  type : ACTIONS.FORM_DATA_CHANGE_ACTION,
  payload : {fieldId, fieldValue}
})