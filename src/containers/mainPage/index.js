import Main from '../../components/main'

import { connect } from 'react-redux'
import { bindActionCreators } from "redux"

import * as testActions from '../../actions/test'

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(testActions,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(Main)