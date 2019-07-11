import React, { Component } from "react";
import axios from "axios";
import Routes from "./Routes"
require("dotenv").config();

// import line that for future use

class App extends Component {
  async componentDidMount() {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/test`);
    const data = await response.data;
    console.log(data);
  }
  render() {
    return (
    <Routes />
    );
  }
}

export default App;
