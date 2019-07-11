import React, { Component } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import JobList from "./JobList";
import Job from "./Job";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    return (
      <>
        <Sidebar data={data} />
        <JobList data={data} />
        <Job data={data} />
      </>
    );
  }
}

export default Dashboard;
