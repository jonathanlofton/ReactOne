import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from '../actions/todo_actions';

const defaultState = {
  1: {
    id: 1,
    title: 'first todo',
    body: 'get a life',
    done: false 
  },
  2: {
    id: 2,
    title: 'second todo',
    body: 'dont get down',
    done: false
  }
}

const todoReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TODO:
      console.log(action.todo)
      return Object.assign({}, state, {[action.todo.id]: action.todo});
    case REMOVE_TODO:
      const todoId = action.todo.id
      let totos = Object.keys(state).filter(id => id !== todoId)
      totos.filter(id => id !== todoId)
      console.log(totos)
    default:
      return state;
  }
}

export default todoReducer;