import { combineReducers }  from 'redux-immutable';
import Application from './reducers';
import ChatContainerReducer from '../containers/chat/reducer'

/**  
 *
 * @param injectedReducers
 * @returns {Function}
 */
export default combineReducers({
    Application,
    ChatContainerReducer
})