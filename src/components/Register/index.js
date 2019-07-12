import React from "react";
import './Register.css'

// checkbox component
const Checkbox = props => (
  <>
    <input type="checkbox" {...props} />
  </>
)

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        name: '',
        password: '',
        type: '',
        phone: '',
        email: '',
        checked: false

    };
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.authCall(this.state);
  }

    // checkbox handler 
  handleCheckboxChange = (e) => {
  this.setState({ checked: e.target.checked })
  console.log(this.state)
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value})
    console.log(this.state)
  }

  
  render () {
 
   return (
     <div className="register">
    <h1>Register a new account</h1>
    <form className="register-form">
        <input onChange={this.handleChange} type="text" id="name" placeholder="Name" />
        <input onChange={this.handleChange} type="text" id="password" placeholder="Password" />
        <input onChange={this.handleChange} type="text" id="type" placeholder="Job Role" />
        <input onChange={this.handleChange} type="text" id="phone" placeholder="Mobile" />
        <input onChange={this.handleChange} type="text" id="email" placeholder="Email" />
        <label>
          <div className="admin-check-wrapper">
        <p className="admin-text">admin</p>
          <Checkbox 
            className="check-box"
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
          />
          </div>
        </label>
    </form>
    <button className="bth-register" onClick={this.handleClick}>Register New Account</button>
  </div>
   )
  }
 }
 
 export default Register;

