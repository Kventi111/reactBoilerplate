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

const selectActiveDialogCreatedSelector = createSelector(
  dialogsSelector,
  currentDialogIdSelector,
  (dialogList,id) => {
    if (id) {
      return dialogList.map(di => (di.get('id') === id ? di.set('active',true) : di.set('active',false)))
    } else {
      return dialogList;
    }
  }
)

const selectActivetDialogAvatar = createSelector(
  dialogsSelector,
  currentDialogIdSelector,
  (dialogList,id) => {
    if (id) {
      const res = dialogList.find(di => di.get('id') === id);
      return res.get('avatar')
    } else {
      return dialogList;
    }
  }
)

const mapStateToProps = state => ({
  dialogs: selectActiveDialogCreatedSelector(state).toJS(),
  messages : messagesSelector(state).toJS(),
  currentMessages : currentDialogCreatedSelector(state).toJS(),
  currentDialogAvatar : selectActivetDialogAvatar(state).toJS()
});

export default mapStateToProps;
