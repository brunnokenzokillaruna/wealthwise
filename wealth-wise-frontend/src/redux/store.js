// wealth-wise-frontend/src/redux/store.js

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'; // Import thunk as default export
import { authReducer } from './reducers/authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  // Add other reducers here
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
