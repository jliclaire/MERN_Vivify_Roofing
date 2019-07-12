import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Routes from "./Routes";
require("dotenv").config();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      authenticated: false,
      currentUser: null
    };
  }

  authCall = async (creds) => {
    try {
      const authCall = await axios.post(
        `${process.env.REACT_APP_API_URL}/${creds.length > 3 ? 'register' : 'login'}`,
        creds
      )
      const { token } = authCall.data;
      localStorage.setItem('token', token)
      this.setState({
        authenticated: true
      })
    } catch (error) {
      this.setState({
        authenticated: false,
        error: error
      })
    }
  }

  getLeads = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/jobs`);
    const data = await response.data;
    this.setState({ data: data });
  }

  async componentDidMount() {
    try {
      // check if the user has a token and send to the back end to get user info
      const token = localStorage.getItem('token')
      const authCall = await axios.post(
        `${process.env.REACT_APP_API_URL}/users/current`,
        {
          headers: { token: token }
        }
      )
      // set state appropriately
      this.setState({
        authenticated: true,
        currentUser: authCall.data
      })
      // get jobs info
      this.getLeads();
    } catch (err) {
      console.log(err);
      // set state appropriately
      this.setState({
        authenticated: false,
        currentUser: null,
      })
    }
  }

  render() {
    const { data, authenticated, currentUser } = this.state;
    return (
      <Routes
      data={data}
      auth={authenticated}
      currentUser={currentUser}
      authCall={this.authCall}
      />
    )
  }
}
export default App;
