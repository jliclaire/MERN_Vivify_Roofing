import React, { Component } from "react";
import axios from "axios";
require("dotenv").config();

// import line that for future use
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Switch,
//   Redirect
// } from "react-router-dom";

class App extends Component {
  async componentDidMount() {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/test`);
    const data = await response.data;
    console.log(data);
  }
  render() {
    return (
      <div>
        <p>Hello, MERN</p>
        <p>Deployed yay!!!</p>
      </div>
    );
  }
}

export default App;
