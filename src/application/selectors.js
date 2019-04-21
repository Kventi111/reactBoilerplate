const application = state => state.get('Application');


const mapStateToProps = state => ({
  application: application(state),
});

export default mapStateToProps;
