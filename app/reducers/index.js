import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import clients from './clients';
import filters from './filters'
import profiles from './profiles';
import tasks from './tasks';

const rootReducer = combineReducers({profiles, clients, tasks, filters, routing: routerReducer});

export default rootReducer;
