import { ACTIONS } from './constants'

export const mount = () => ({
  type : ACTIONS.QUESTIONARY_CONTAINER_MOUNT
})

export const mountSuccess = () => ({
  type : ACTIONS.QUESTIONARY_CONTAINER_MOUNT_SUCCESS
})

export const mountFail = () => ({
  type : ACTIONS.QUESTIONARY_CONTAINER_MOUNT_FAIL
})