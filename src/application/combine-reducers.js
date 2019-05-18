import { combineReducers }  from 'redux-immutable';
import Application from './reducers';
import Questionary from '../containers/questionnaire/reducers';

export default combineReducers({
    Application,
    Questionary
})