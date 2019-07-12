import React from "react";
import './Login.css'


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        name: '',
        password: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value })
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.authCall(this.state);
  }

  render () {
    return (
      <div className="login-form">
        <h1 className="login-logo">VIVIFY</h1>
        <form className="inner-form-login">
            <input onChange={this.handleChange} type="text" id="name" placeholder="Name" />
            <input onChange={this.handleChange} type="text" id="password" placeholder="Password" />
            <button onClick={this.handleClick}>Log in</button>
        </form>
    </div>
    )
  }
}

export default Login;
