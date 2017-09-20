import { combineReducers } from 'redux';
import messages from './messages';
import auth from './auth';

export default combineReducers({
  messages,
  auth,
  current: (state = {}) => state,
  // transmissions: (state = {}) => state,
  // engines: (state = {}) => state,
  // drivetrains: (state = {}) => state,
  // wheels: (state = {}) => state,
});
