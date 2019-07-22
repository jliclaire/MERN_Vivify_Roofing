import React from "react";
import "./register.css";

const initialState = {
  name: "",
  password: "",
  type: "",
  phone: "",
  email: "",
  nameError: "",
  passwordError: "",
  tyoeError: "",
  phoneError: "",
  emailError: "",
};

class Register extends React.Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
    this.state = initialState;
=======
    this.state = {
      name: "",
      password: "",
      role: "Sales",
      phone: "",
      email: ""
    };
>>>>>>> master
  }

  handleChange = e => {
    const isCheckbox = e.target.type === "checkbox";
    this.setState({ [e.target.id]: e.target.value });
    this.setState({
      [e.target.id]: isCheckbox
      ? e.target.checked
      : e.target.value
    });
    console.log(this.state);
  };

  validation= () => {
    let nameError = "";
    let passwordError = "";
    let tyoeError = "";
    let  phoneError = "";
    let emailError = "";

    
    if(!this.state.name) {
      nameError = "* name required";
    } 
    if(!this.state.password) {
      passwordError = "* password required";
    }
    if(!this.state.type) {
      tyoeError = "* type of role required";
    }
    if(!this.state.phone) {
      phoneError = "* phone number required";
    }
    if(!this.state.email) {
      emailError = "* email required";
    }
    
    if (nameError || passwordError || tyoeError || phoneError || emailError) {
      this.setState({ nameError, passwordError, tyoeError, phoneError, emailError});
      return false;
    }
    return true;
  }

  handleClick = e => {
    e.preventDefault();
    const isValid = this.validate()
    

    if (isValid) {
      console.log(this.state);
      this.setState(initialState);

      this.props.authCall(this.state);
    }
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
              type="text"
              id="email"
              placeholder="You will use this to log in"
              onChange={this.handleChange}
              value={this.state.email} />
            </p>
            <div className="validation-prompt">{this.state.emailError}</div>

            <p>
              <label htmlFor="name">Name</label>
              <br />
              <input 
              type="text" 
              id="name" 
              onChange={this.handleChange} 
              value={this.state.name} />
            </p>
            <div className="validation-prompt">{this.state.nameError}</div>
    
            <p>
              <label htmlFor="password">Password</label>
              <br />
              <input
                type="password"
                id="password"
                onChange={this.handleChange}
                value={this.state.password} />
            </p>
            <div className="validation-prompt">{this.state.passwordError}</div>

            <p>
              <label htmlFor="role">Role</label>
              <br />
<<<<<<< HEAD
              <select
              id="type"
              onChange={this.handleChange}
              value={this.state.type}>
=======
              <select onChange={this.handleChange} id="role">
>>>>>>> master
                <option>Sales</option>
                <option>Admin</option>
              </select>
            </p>
            <div className="validation-prompt">{this.state.typeError}</div>

            <p>
              <label htmlFor="phone">Mobile Number</label>
              <br />
              <input 
              type="text" 
              id="phone" 
              onChange={this.handleChange} 
              value={this.state.phone}/>
            </p>
            <div className="validation-prompt">{this.state.phoneError}</div>


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
