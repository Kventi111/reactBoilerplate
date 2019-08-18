import { combineReducers }  from 'redux-immutable';
import Application from './reducers';
import ChatContainerReducer from '../containers/chat/reducer'
import AuthContainerReducer from '../containers/auth/reducer'

/**  
 *
 * @param injectedReducers
 * @returns {Function}
 */
export default combineReducers({
    Application,
    ChatContainerReducer,
    AuthContainerReducer
})
