import { combineReducers }  from 'redux-immutable';
import Application from './reducers';

/**  
 *
 * @param injectedReducers
 * @returns {Function}
 */
export default combineReducers({
    Application,
})