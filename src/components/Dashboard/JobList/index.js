import React, { Component } from "react";
import JobListRow from "./JobListRow";

class JobList extends Component {

  render() {
    const { data, setActiveJob, show } = this.props;
    if (show) {
      return <JobListRow data={data} setActiveJob={setActiveJob} />;
    } else {
      return null;
    }
  }
}

export default JobList;
