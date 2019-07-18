import React, { Component } from "react";
import TopButtons from "./TopButtons/";
import Enquiry from "./Enquiry/";
import Followups from "./Followups";
import FollowupForm from "./FollowupForm";
import ImageDisplay from "./ImageDisplay";
import EditJob from "./EditJob";
import "./job.css"

class Job extends Component {
  state = {
    editJob: false
  }
  
  handleAddNewFollowup = newFollowup => {
    this.props.data.followUps.push(newFollowup);
    this.props.addNewFollowUps(this.props.data.followUps);
  };

  handleEditLead = () => {
    this.setState({
      editJob: !this.state.editJob
    })
  }

  render() {
    const { data, assignLead, editLead, moveLead, back } = this.props;
    return (
      <div className="job">
        <div className="job-container">
          <TopButtons
            data={data}
            assignLead={assignLead}
            editLead={this.handleEditLead}
            moveLead={moveLead}
            back={back}
          />
          {
            this.state.editJob ?
            <EditJob />
            : 
            <Enquiry data={data} />
          }
          <ImageDisplay data={data} />
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
