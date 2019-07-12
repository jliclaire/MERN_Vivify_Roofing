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
    this.setState({ [e.target.id]: e.target.value})
    console.log(this.state)
  }

  render () {
    return (
      <div className="login-form">
       <h1 className="login-logo">VIVIFY</h1>
      <form className="inner-form-login">
          <input onChange={this.handleChange} type="text" id="name" placeholder="name" />
          <input onChange={this.handleChange} type="text" id="password" placeholder="password" />
          <button onClick={this.handleClick}>LOGIN</button>
      </form>
    </div>
    )
  }
}

export default Login;
