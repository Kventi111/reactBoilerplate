const application = state => state.get('Application');
const questionary = state => state.get('Questionary');


const mapStateToProps = state => ({
  application: application(state).toJS(),
  questionary: questionary(state).toJS(),
});

export default mapStateToProps;
