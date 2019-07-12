import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Routes from "./Routes";
import { Redirect } from "react-router-dom";
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
    return <Routes data={data} auth={authenticated} currentUser={currentUser} />;
  }
}
export default App;
