import { fromJS } from "immutable";
import { ACTIONS } from "./constants";

const initialQuestionaryState = fromJS({
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
      title : 'Вопрос 1',
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
});

export const mount = state =>
  state.merge({
    loader: true
  });

export const mountFail = (state, { text }) =>
  state.merge({
    loader: false,
    error: {
      text,
      hasErorr: true
    }
  });

export const mountSuccess = state =>
  state.merge({
    loader: false,
    error: {
      hasErorr: false
    }
  });

export default function Questionary(state = initialQuestionaryState, action) {
  switch (action.type) {
    case ACTIONS.QUESTIONARY_CONTAINER_MOUNT:
      return mount(state);
    case ACTIONS.QUESTIONARY_CONTAINER_MOUNT_SUCCESS:
      return mountSuccess(state);
    default:
      return state;
  }
}
