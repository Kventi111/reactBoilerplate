import { fromJS } from 'immutable'
import { ACTIONS } from './constants'

const initialState = fromJS({
  mount : false,
  loading : true,
  error : false,
  currentDialogId : null,
  dialogs : {
    list : []
  },
  user : {}
})

export const mount = state => state.merge({
  mount : true,
  loading : false
})

export const unmount = state => state.merge({
  mount : false
})

export const setCurrentDialog = (state,id) => state.mergeDeep({
  currentDialogId : id
})

export const setDialogs = (state,list) => state.setIn(['dialogs','list'],list)
export const setUser = (state,user) => state.mergeDeep({
  user
})

export default function chatContainerReducer(state = initialState,{type,payload}) {
  switch (type) {
    case ACTIONS.CHAT_CONTAINER_MOUNT_SUCCESS:
      return mount(state) 
    case ACTIONS.SET_CURRENT_DIALOG:
      return setCurrentDialog(state,payload)
    case ACTIONS.CHAT_CONTAINER_GET_DIALOGS_SUCCESS:
      return setDialogs(state,payload)
    case ACTIONS.GET_USER_SUCCESS:
      return setUser(state,payload)
    default:
      return state;
  }
}