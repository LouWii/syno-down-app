import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main'

function mapStateToProps(state) {
  return {
    profiles: state.profiles,
    tasks: state.tasks,
    clients: state.clients,
    filters: state.filters
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

// App will link props directly to Main
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;

