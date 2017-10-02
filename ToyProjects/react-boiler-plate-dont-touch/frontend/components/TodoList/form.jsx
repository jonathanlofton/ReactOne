import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      title: '',
      body: ''
    }
    // this will bind 'this' object to this event
    // making these functions be able to utilize
    // this.setState and other things that rely 
    // on this...
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(property) {
    return e => this.setState({[property]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    const { todos } = this.props
    let totos = Object.keys(todos).map(id => todos[id])
    const new_id = totos.length + 1
    console.log(totos)
    this.props.receiveTodo({ 
      id: new_id,
      title: this.state.title,
      body: this.state.body,
      done: false
     })
     this.setState({
       title: '',
       body: ''
     })
  }
  
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Title: 
          <input type='text' value={this.state.title} onChange={this.update('title')}/>
        </label>
        <label>Body: 
          <input type='comment' value={this.state.body} onChange={this.update('body')}/>
        </label>
        <button>Create Todo</button>
      </form>
    )
  }
}

export default Form;