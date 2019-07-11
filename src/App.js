import React, { Component } from "react";
import axios from "axios";
import Routes from "./Routes"
require("dotenv").config();

// import line that for future use


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
  }

  async componentDidMount() {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/jobs`);
    const data = await response.data;
    // console.log(data);
    this.setState({data: data})
  }
  render() {
    const data = this.state.data;
    // console.log(data);
    return (
      <Routes data={data} />
    );
  }
}

export default App;
