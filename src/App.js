import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Routes from "./Routes";
import Loading from "./components/Loading/";
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

  authCall = async creds => {
    try {
      const authCall = await axios.post(
        `${process.env.REACT_APP_API_URL}/${
          Object.keys(creds).length > 2 ? "register" : "login"
        }`,
        creds
      );
      const { token } = authCall.data;
      localStorage.setItem("token", token);
      this.setState({
        authenticated: true
      });
    } catch (error) {
      console.log(error);
      this.setState({
        authenticated: true,
        error: error
      });
    }
  };

  getLeads = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/jobs`);
    const data = await response.data;
    this.setState({ data: data });
  };

  updateNewLeads = async lead => {
    await axios.post(`${process.env.REACT_APP_API_URL}/jobs`, lead);
  };

  getUser = async () => {
    try {
      // check if the user has a token and send to the back end to get user info
      const token = localStorage.getItem("token");
      const authCall = await axios.get(
        `${process.env.REACT_APP_API_URL}/identify-me`,
        {
          headers: { token: token }
        }
      );
      console.log(authCall);
      // set state appropriately
      this.setState({
        authenticated: true,
        currentUser: {
          email: authCall.data.email,
          name: authCall.data.name,
          role: authCall.data.role
        }
      });
      console.log(this.state);
    } catch (err) {
      console.log(err);
      // set state appropriately
      this.setState({
        authenticated: false,
        currentUser: null
      });
    }
  };

  getUsernames = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/users`
      );
      const users = response.data.map(user => user.name);
      this.setState({
        usernames: users
      });
    } catch (error) {
      console.log(error);
    }
  };

  async componentDidMount() {
    this.getUser();
    this.getUsernames();
    this.getLeads();
  }

  componentDidUpdate(prevState) {
    if (prevState.data !== this.state.data) {
      this.getLeads();
    }
  }
  render() {
    const { data, authenticated, currentUser, usernames } = this.state;
    if (data.length === 0) {
      return <Loading />;
    } else {
      return (
        <Routes
          data={data}
          authenticated={authenticated}
          currentUser={currentUser}
          users={usernames}
          authCall={this.authCall}
          newLead={this.updateNewLeads}
        />
      );
    }
  }
}
export default App;
