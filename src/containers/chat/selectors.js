import { createSelector } from 'reselect'
import { List } from 'immutable';

const dialogsSelector = state => state.getIn(['ChatContainerReducer','dialogs']);
const currentDialogIdSelector = state => state.getIn(['ChatContainerReducer','currentDialogId']);
const messagesSelector = state => state.getIn(['ChatContainerReducer','messages']);

const currentDialogCreatedSelector = createSelector(
  messagesSelector,
  currentDialogIdSelector,
  (messages,id) => {
    if (id) {
      return messages.find(mes => mes.get('id') === id)
    } else {
      return List()
    }
  }
)

const mapStateToProps = state => ({
  dialogs: dialogsSelector(state).toJS(),
  messages : messagesSelector(state).toJS(),
  currentMessages : currentDialogCreatedSelector(state).toJS()
});

export default mapStateToProps;
