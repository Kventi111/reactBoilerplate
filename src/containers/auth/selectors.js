import { createSelector } from 'reselect'
import { LOCAL_REDUCER } from './constants'

const authContainerDataSelector = state => state.getIn([LOCAL_REDUCER]);


const mapStateToProps = state => ({
  authData: authContainerDataSelector(state).toJS(),
});

export default mapStateToProps;
