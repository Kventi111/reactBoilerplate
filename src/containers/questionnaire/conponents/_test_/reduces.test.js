import reducer, { initialQuestionaryState } from '../../reducers'
import { ACTIONS } from '../../constants'

describe('new test',() => {
  it('first1 test',() => {
    const action = {
      type : ACTIONS.QUESTIONARY_CONTAINER_MOUNT
    }

    expect(reducer(initialQuestionaryState,action)).toEqual({
      ...initialQuestionaryState,
      loader: true,
    })
  })
  it('first2 test',() => {
    const action = {
      type : ACTIONS.QUESTIONARY_CONTAINER_MOUNT_SUCCESS
    }

    expect(reducer(initialQuestionaryState,action)).toEqual({
      ...initialQuestionaryState,
      loader: false,
      error: {
        hasErorr: false
      }
    })
  })
  it('first3 test',() => {
    const action = {
      type : ACTIONS.QUESTIONARY_CONTAINER_MOUNT_FAIL,
      payload : 'someError'
    }

    expect(reducer(initialQuestionaryState,action)).toEqual({
      ...initialQuestionaryState,
      loader: false,
      error: {
        text : action.payload,
        hasErorr: true
      }
    })
  })
})
