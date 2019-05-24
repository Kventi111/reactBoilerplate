const application = state => state.Application;
const questionary = state => state.Questionary;


const mapStateToProps = state => ({
  application: application(state),
  questionary: questionary(state),
});

export default mapStateToProps;
