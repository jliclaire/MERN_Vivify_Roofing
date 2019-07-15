import React from "react";
import './login.css'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        email: '',
        password: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value })
  }

  handleClick = (e) => {
    console.log(this.state)
    const { authCall } = this.props;
    e.preventDefault();
    authCall(this.state);
  }

  render () {
    return (
      <div className="login-form">
        <h1 className="login-logo">VIVIFY</h1>
        <form className="inner-form-login">
            <input onChange={this.handleChange} type="text" id="email" placeholder="Email" />
            <input onChange={this.handleChange} type="password" id="password" placeholder="Password" />
            <div className='btn-login' onClick={this.handleClick}>
              <p className='btn-text'>Log In</p>
            </div>
        </form>
      </div>
    )
  }
}

export default Login;
