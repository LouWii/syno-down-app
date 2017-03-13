import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import client from './client';
import profiles from './profiles';
import ui from './ui';

const rootReducer = combineReducers({profiles, client, ui, routing: routerReducer});

export default rootReducer;
