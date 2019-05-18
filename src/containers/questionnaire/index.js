import Questionary from './container'
import { connect } from 'react-redux-immutable';
import * as Actions from './actions';
import mapStateToProps from './selectors';

export default connect(
  mapStateToProps,
  {
    ...Actions,
  }
)(Questionary);
