import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {signup, login} from './util/session_util';
import { createPost } from './actions/blog_post_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.createPost = createPost;
  
  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store}/>, root)
})