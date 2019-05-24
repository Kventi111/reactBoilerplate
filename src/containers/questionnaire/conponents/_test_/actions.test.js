import {
  mount,
  mountSuccess,
  mountFail
} from '../../actions'
import { ACTIONS } from '../../constants'

describe('test actions',() => {
  it('test mount action',() => {
    expect(mount()).toEqual({
      type : ACTIONS.QUESTIONARY_CONTAINER_MOUNT
    })
  })
  it('test mountSuccess action',() => {
    expect(mountSuccess()).toEqual({
      type : ACTIONS.QUESTIONARY_CONTAINER_MOUNT_SUCCESS
    })
  })
  it('test mountFail action',() => {
    expect(mountFail()).toEqual({
      type : ACTIONS.QUESTIONARY_CONTAINER_MOUNT_FAIL
    })
  })
})