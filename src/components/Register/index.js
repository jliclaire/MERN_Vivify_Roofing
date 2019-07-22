import React from "react";
import "./register.css";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      role: "Sales",
      phone: "",
      email: ""
    };
  }

  handleClick = e => {
    e.preventDefault();
    this.props.authCall(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
    console.log(this.state);
  };

  render() {
    return (
      <div className="container-register">
        <div className="register">
          <h1>Sign Up User</h1>
          <form className="register-form">
            <p>
              <label htmlFor="email">E-mail</label>
              <br />
              <input
                onChange={this.handleChange}
                type="text"
                id="email"
                placeholder="You will use this to log in"
              />
            </p>
            <p>
              <label htmlFor="name">Name</label>
              <br />
              <input onChange={this.handleChange} type="text" id="name" />
            </p>
            <p>
              <label htmlFor="password">Password</label>
              <br />
              <input
                onChange={this.handleChange}
                type="password"
                id="password"
              />
            </p>
            <p>
              <label htmlFor="role">Role</label>
              <br />
              <select onChange={this.handleChange} id="role">
                <option>Sales</option>
                <option>Admin</option>
              </select>
            </p>
            <p>
              <label htmlFor="phone">Mobile Number</label>
              <br />
              <input onChange={this.handleChange} type="text" id="phone" />
            </p>
          </form>
          <div className="btn-register" onClick={this.handleClick}>
            <p className="button-text">Register</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
