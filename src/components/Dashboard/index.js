import React, { Component } from "react";
import Sidebar from './Sidebar/';
import JobList from './JobList';
import Job from './Job';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        <Sidebar data={data}/>
        <JobList />
        <Job />
      </div>
    )
  }
}

export default Dashboard;