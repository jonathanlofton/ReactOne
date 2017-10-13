import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_action';

const nullState = Object.freeze({
  currentUser: null,
  errors: [],
});

const SessionReducer = (state = nullState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER: 
      const { currentUser } = action;
      return Object.assign({}, nullState, {
        currentUser,
      });
    default:
      return state;
  }

};

export default SessionReducer;