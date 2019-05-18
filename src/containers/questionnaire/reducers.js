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
      title : 'Вопрос 1',
      type : 'one',
      questions : ['1','2','3']
    },
    {
      title : 'Вопрос 2',
      type : 'one',
      questions : ['1','2','3']
    },
    {
      title : 'Вопрос 3',
      type : 'one',
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
    default:
      return state;
  }
}
