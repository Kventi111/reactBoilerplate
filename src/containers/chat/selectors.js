const application = state => state.get('ChatContainerReducer');

const mapStateToProps = state => ({
  chat: application(state),
});

export default mapStateToProps;
