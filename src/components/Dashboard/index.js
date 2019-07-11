import React, { Component } from "react";
import { Link } from "react-router-dom";
import Sidebar from './Sidebar';
import JobList from './JobList';
import Job from './Job';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Sidebar data={this.props.data}/>
        <JobList data={this.props.data}/>
        <Job data={this.props.data}/>
      </>
    )
  }
}

export default Dashboard;