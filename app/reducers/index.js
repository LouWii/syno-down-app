import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import profiles from './profiles';
import clients from './clients';
import tasks from './tasks';

const rootReducer = combineReducers({profiles, clients, tasks, routing: routerReducer});

export default rootReducer;
