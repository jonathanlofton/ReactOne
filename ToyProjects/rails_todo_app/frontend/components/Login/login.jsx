import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      password: ''
    }
    this.signUp = this.signUp.bind(this);
  }

  signUp() {
    const { createUser } = this.props;

    createUser({
      user: {
        name: this.state.name,
        password: this.state.password
      }
    })
    this.props.history.push('/home');
  }

  changename = (e) => {
    this.setState({ name: e.target.value })
  }

  changePassword = (e) => {
    this.setState({ password: e.target.value })
  }

  render() {
    return(
      <div className="sign-up-container">
        <h1>Create Account</h1>
        <form onSubmit={() => this.signUp()} className="sign-up-form">
          <input type='text' value={this.state.name} onChange={(e) => this.changename(e)}/>
          <input type='text' value={this.state.password} onChange={(e) => this.changePassword(e)}/>
          <button>Create Account</button>
        </form>
      </div>
    )
  }
}

export default Login;