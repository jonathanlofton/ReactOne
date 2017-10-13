import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import RootReducer from '../reducers/root_reducer';

const defaultState = {
  currentUser: '',
}

const configureStore = (preloadedState = defaultState) => (
  createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(thunk, logger),
  )
)

export default configureStore;