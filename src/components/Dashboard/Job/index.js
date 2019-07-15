import React, { Component } from "react";
import TopButtons from "./TopButtons";
import Enquiry from "./Enquiry/";
import Followups from "./Followups";
import FollowupForm from "./FollowupForm";
import "./job.css";

class Job extends Component {
  constructor(props) {
    super(props);
  }

  handleAddNewFollowup = newFollowup => {
    // this.setState({ followups: [...this.state.followups, newFollowup] });

    this.props.data.followUps.push(newFollowup);
    // console.log(this.props.data.followUps);
    this.props.addNewFollowUps(this.props.data.followUps);
  };

  render() {
    const { data } = this.props;
    return (
      <div className="job">
        <div className="job-container">
          <TopButtons data={data} />
          <Enquiry data={data} />
          <Followups data={data} />
          <FollowupForm
            data={data}
            addNewFollowup={this.handleAddNewFollowup}
          />
        </div>
      </div>
    );
  }
}

export default Job;
