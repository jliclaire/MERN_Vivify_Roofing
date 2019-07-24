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
      return true;
    } catch (error) {
      console.log(error);
      this.setState({
        authenticated: true,
        error: error
      });
      return false;
    }
  };

  getLeads = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/jobs`);
    const data = await response.data;
    this.setState({ data: data });
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
      // set state appropriately
      this.setState({
        authenticated: true,
        currentUser: authCall.data,
      });
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
      const users = response.data;
      this.setState({
        usernames: users
      });
    } catch (error) {
      console.log(error);
    }
  };

  getSales = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/users/sales`,
        {
          headers: { token: token }
        }
      );
      const salesUsers = await response.data;
      this.setState({
        salesUsers: salesUsers
      });
    } catch (error) {
      console.log(error);
    }
  };

  async componentDidMount() {
    this.getUser();
    this.getUsernames();
    this.getLeads();
    this.historySettings();
    this.getSales();
  }

  historySettings = () => {
    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function() {
      window.history.go(1);
    };
  };

  render() {
    const {
      data,
      authenticated,
      currentUser,
      usernames,
      salesUsers
    } = this.state;
    if (data.length === 0) {
      return <Loading />;
    } else {
      return (
        <Routes
          data={data}
          authenticated={authenticated}
          currentUser={currentUser}
          users={usernames}
          salesUsers={salesUsers}
          authCall={this.authCall}
          getLeads={this.getLeads}
        />
      );
    }
  }
}
export default App;
