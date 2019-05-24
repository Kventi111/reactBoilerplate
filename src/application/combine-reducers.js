import { combineReducers }  from 'redux';
import Application from './reducers';
import Questionary from '../containers/questionnaire/reducers';

export default combineReducers({
    Application,
    Questionary
})