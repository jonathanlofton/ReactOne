import SessionReducer from './session_reducer';
import BlogPostReducer from './blog_post_reducer';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  session: SessionReducer,
  posts: BlogPostReducer,
});

export default RootReducer;