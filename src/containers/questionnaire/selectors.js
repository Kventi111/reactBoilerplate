const application = state => state.get('Application');
const questionary = state => state.get('Questionary');


const mapStateToProps = state => ({
  application: application(state),
  questionary: questionary(state),
});

export default mapStateToProps;
