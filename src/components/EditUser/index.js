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
    console.log(this.props.currentUser._id)
    try {
      const token = localStorage.getItem('token')
      const { _id } = this.props.currentUser
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/users/${_id}`,
        data,
        {
          headers: { token: token }
        }
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
    let passwordError = "";

    if (this.state.password !== this.state.confirmPassword) {
      passwordError = "Passwords must match";
    }

    if (passwordError) {
      this.setState({
        passwordError,
      });
      return false;
    }
    return true;
  };

  handleClick = async e => {
    e.preventDefault();
    const isValid = this.validate();

    // if (isValid) {
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
    // }
  };

  render() {
    console.log(this.props.currentUser._id)
    return (
      <div className='edit-container'>
        <h1>Change your details</h1>
        <p className='explanation'>
          This page will allow you to modify your user details, such as email
          and password. Only enter the details you want to change.
        </p>
        <h3>{this.state.loginError}</h3>
        <form className='register-form'>
          <p>
            <label>New Name</label><br />
            <input
              type='text'
              id='name'
              onChange={this.handleChange}
              value={this.state.name}
              placeholder={this.state.nameError}
            />
          </p>

          <p>
            <label>New Email</label><br />
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
              type='password'
              id='password'
              onChange={this.handleChange}
              value={this.state.password}
              placeholder={this.state.passwordError}
            />
          </p>

          <p>
            <label>Confirm New Password</label><br />
            <input
              type='password'
              id='confirmPassword'
              onChange={this.handleChange}
              value={this.state.confirmPassword}
            />
          </p>

          <p>
            <label>New Phone</label><br />
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