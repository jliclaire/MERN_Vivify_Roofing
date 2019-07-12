import React, { Component } from "react";
import JobListRow from "./JobListRow";

class JobList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data, setActiveJob } = this.props;
    return <JobListRow data={data} setActiveJob={setActiveJob} />;
  }
}

export default JobList;
