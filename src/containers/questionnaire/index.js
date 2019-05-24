import { connect } from 'react-redux';
import * as Actions from './actions';
import mapStateToProps from './selectors';
import Questionary from './container'

export default connect(
  mapStateToProps,
  {
    ...Actions,
  }
)(Questionary);
