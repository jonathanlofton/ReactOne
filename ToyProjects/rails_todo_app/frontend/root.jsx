import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import configureStore from './store/store';
import {signup, login} from './util/session_util';
import { createPost, deletePost } from './actions/blog_post_actions';

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
  window.deletePost = deletePost;
  
  const root = document.getElementById('root');

  ReactDOM.render(<App store={store}/>, root)
})