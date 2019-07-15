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
        admin: false
    };
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.authCall(this.state);
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
        </form>
        <input type='submit' value='Register' className="bth-register" onClick={this.handleClick} />
      </div>
   )
  }
 }
 
 export default Register;

