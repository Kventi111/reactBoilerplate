import { ACTIONS } from "./constants";

export const initialQuestionaryState = {
  error: {
    text: "",
    hasError: false
  },
  loader: true,
  progress: "",
  count: "",
  list: [
    {
      id : 1,
      title : 'Вы любите кофе ?',
      type : 'one',
      questions : ['1','2','3']
    },
    {
      id : 2,
      title : 'Вопрос 2',
      type : 'two',
      questions : ['1','2','3']
    },
    {
      id : 3,
      title : 'Вопрос 3',
      type : 'three',
      questions : ['1','2','3']
    }
  ],
  rating: ""
};

export const mount = state => ({
  ...state,
  loader : true
})

export const mountFail = (state, payload) => ({
  ...state,
  loader: false,
  error: {
    text : payload,
    hasErorr: true
  }
})

export const mountSuccess = state => ({
  ...state,
  loader: false,
  error: {
    hasErorr: false
  }
})

export default function Questionary(state = initialQuestionaryState, action) {
  switch (action.type) {
    case ACTIONS.QUESTIONARY_CONTAINER_MOUNT:
      return mount(state);
    case ACTIONS.QUESTIONARY_CONTAINER_MOUNT_SUCCESS:
      return mountSuccess(state);
    case ACTIONS.QUESTIONARY_CONTAINER_MOUNT_FAIL:
      return mountFail(state,action.payload);
    default:
      return state;
  }
}
