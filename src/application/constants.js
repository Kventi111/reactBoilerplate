import keyMirror from 'keymirror';

export const ACTIONS = keyMirror({
  APP_INIT : null,
  APP_INIT_SUCCESS : null,
  APP_INIT_FAIL : null,

  GET_USER_INFO_REQUEST : null,
  GET_USER_INFO_SUCCESS : null,
  GET_USER_INFO_FAIL : null,
})

export const APP = {
  RENDER_LOG : false
}