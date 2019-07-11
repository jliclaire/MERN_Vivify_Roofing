import React, { Component } from "react";
import JobListRow from "./JobListRow";

class JobList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data } = this.props;
    return <JobListRow data={data} />;
  }
}

export default JobList;
