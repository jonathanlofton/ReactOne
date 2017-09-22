import { combineReducers } from 'redux';

import todosReducer from './todo_reducer';

const RootReducer = combineReducers({
  todos: todosReducer,
});

export default RootReducer;