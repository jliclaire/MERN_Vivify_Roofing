import React, { Component } from "react";
import TopButtons from "./TopButtons";
import Enquiry from "./Enquiry/";
import Followups from "./Followups";
import FollowupForm from "./FollowupForm";

class Job extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data } = this.props;
    return (
      <div className="job-container">
        <TopButtons data={data} />
        <Enquiry data={data} />
        <Followups data={data} />
        <FollowupForm data={data} />
      </div>
    );
  }
}

export default Job;
