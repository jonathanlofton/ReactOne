import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  createUser = () => {
    console.log("created user")
  }

  changeUsername = (e) => {
    this.setState({ username: e.target.value })
    console.log(this.state)
  }

  changePassword = (e) => {
    this.setState({ password: e.target.value })
    console.log(this.state)
  }

  render() {
    console.log(this.props)
    return(
      <div>
        <form onSubmit={() => this.createUser()}>
          <input type='text' value={this.state.username} onChange={(e) => this.changeUsername(e)}/>
          <input type='text' value={this.state.password} onChange={(e) => this.changePassword(e)}/>
          <button>Create Account</button>
        </form>
      </div>
    )
  }
}

export default Login;