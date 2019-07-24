import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import './editUser.css'

const initialState = {
  name: "",
  password: "",
  phone: "",
  email: "",
  nameError: "",
  passwordError: "",
  phoneError: "",
  emailError: ""
}

class EditUser extends React.Component {
  initialState = {
    name: this.props.currentUser.name,
    password: '',
    phone: this.props.currentUser.phone,
    email: this.props.currentUser.email,
    nameError: "",
    passwordError: "",
    phoneError: "",
    emailError: ""
  }
  state = initialState

  editApiCall = async (data) => {
    try {
      const token = localStorage.getItem('token')
      const { _id } = this.props.currentUser
      console.log(_id)
      console.log(token)
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/users/${_id}`,
        {
          headers: { token: token }
        },
        data
      )
      console.log(response)
      const { newToken } = response.data;
      localStorage.setItem("token", newToken);
      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  }

  validate = () => {
    let nameError = "";
    let passwordError = "";
    let phoneError = "";
    let emailError = "";

    if (!this.state.name) {
      nameError = "Please enter your name";
    }
    if (!this.state.password) {
      passwordError = "Please enter a new password";
    }
    if (!this.state.phone) {
      phoneError = "Please enter your phone number";
    }
    if (!this.state.email) {
      emailError = "Please enter your email";
    }

    if (nameError || passwordError || phoneError || emailError) {
      this.setState({
        nameError,
        passwordError,
        phoneError,
        emailError
      });
      return false;
    }
    return true;
  };

  handleClick = async e => {
    e.preventDefault();
    const isValid = this.validate();

    if (isValid) {
      const { email, password, name, phone } = this.state;
      const res = await this.editApiCall({
        email,
        password,
        name,
        phone
      });
      if (res) {
        window.location = "/";
      } else {
        this.setState({
          loginError: "There was a problem changing your details"
        });
      }
    }
  };

  render() {
    console.log(this.props.currentUser)
    console.log(this.state)
    return (
      <div className='edit-container'>
        <h1>Change your details</h1>
        <p className='explanation'>
          This page will allow you to modify your user details, such as email
          and password.
        </p>
        <h3>{this.state.loginError}</h3>
        <form className='register-form'>
          <p>
            <label>Name</label><br />
            <input
              type='text'
              id='name'
              onChange={this.handleChange}
              value={this.state.name}
              placeholder={this.state.nameError}
            />
          </p>

          <p>
            <label>Email</label><br />
            <input
              type='text'
              id='email'
              onChange={this.handleChange}
              value={this.state.email}
              placeholder={this.state.nameError}
            />
          </p>

          <p>
            <label>New Password</label><br />
            <input
              type='text'
              id='password'
              onChange={this.handleChange}
              value={this.state.password}
              placeholder={this.state.passwordError}
            />
          </p>

          <p>
            <label>Phone</label><br />
            <input
              type='text'
              id='phone'
              onChange={this.handleChange}
              value={this.state.phone}
              placeholder={this.state.phoneError}
            />
          </p>
          <div className='buttons'>
            <div className="btn-register back-to-dashboard-btn" onClick={this.handleClick}>
              <p>Change Details</p>
            </div>
            <div className="btn-register back-to-dashboard-btn">
              <Link to="/"> Back to Dashboard</Link>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default EditUser