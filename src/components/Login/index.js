import React from "react";
import "./login.css";

const initialState = {
  email: "",
  password: "",
  emailError: "",
  passwordError: ""
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleChange = e => {
    const isCheckbox = e.target.type === "checkbox";
    this.setState({ 
      [e.target.id]: e.target.value
      });

    this.setState({
      [e.target.name]: isCheckbox
      ? e.target.checked
      : e.target.value
      });
  };

  validate= () => {
    let emailError= "";
    let passwordError= "";

    if (this.state.password.length < 5) {
      passwordError = "* password requires more than 5 characters";
    }

    if(!this.state.password) {
      passwordError = "* password is empty";
    } 

    if(!this.state.email.includes('@') || !this.state.email) {
      emailError = "* invalid email";
    }

    if (emailError || passwordError) {
      this.setState({ emailError, passwordError});
      return false;
    }
    return true;
  }

  handleClick = e => {
    console.log(this.state);
    const { authCall } = this.props;
    e.preventDefault();
    authCall(this.state);
    const isValid = this.validate()
    if (isValid) {
      console.log(this.state);
      this.setState(initialState);
    }

  };

  render() {
    return (
      <div className="login-form">
        <h1 className="login-logo">VIVIFY</h1>
        <form className="inner-form-login">
          <input
            value={this.state.email}
            onChange={this.handleChange}
            type="text"
            id="email"
            placeholder="Email"
          />
          <div style={{ marginBottom: 20,fontSize: 12,color: "red" }}>{this.state.emailError}</div>
          <input
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
            id="password"
            placeholder="Password"
          />
          <div style={{ fontSize: 12,color: "red" }}>{this.state.passwordError}</div>
          <div className="btn-login" onClick={this.handleClick}>
            <p className="btn-text">Log In</p>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
