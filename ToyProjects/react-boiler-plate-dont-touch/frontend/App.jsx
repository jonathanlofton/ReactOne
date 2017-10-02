import React from 'react';
import TodoListContainer from './components/TodoList/todo_list_container';
import FormContainer from './components/TodoList/form_container';
class App extends React.Component {
  render() {
    return (
      <div>
        <TodoListContainer />
        <FormContainer />
        <h1>Hello React</h1>
      </div>
    )
  }
}

export default App;