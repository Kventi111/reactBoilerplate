import keyMirror from 'keymirror';

export const ACTIONS = keyMirror({
  FORM_DATA_CHANGE_ACTION : null,
})

export const FIELD_ID = keyMirror({
  EMAIL : null,
  FIRST_NAME : null,
  LAST_NAME : null,
  PASSWORD : null,
  LOGIN_BTN : null
})

export const LOCAL_REDUCER = 'AuthContainerReducer'