import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import dashboardReducer from './reducers/dashboardReducer';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const rootReducer = combineReducers({ dashboard: dashboardReducer });

export default createStoreWithMiddleware(rootReducer);
