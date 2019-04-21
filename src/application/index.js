import Application from './container'
import { connect } from 'react-redux';
import * as Actions from './actions';
import mapStateToProps from './selectors';

export default connect(
  mapStateToProps,
  {
    ...Actions,
  }
)(Application);
