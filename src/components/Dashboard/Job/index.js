import React, { Component } from "react";
import TopButtons from "./TopButtons/";
import Enquiry from "./Enquiry/";
import Followups from "./Followups";
import FollowupForm from "./FollowupForm";
import ImageDisplay from "./ImageDisplay";
import EditJob from "./EditJob";
import axios from "axios";
import "./job.css";

class Job extends Component {
  constructor(props) {
    super(props);
  }

  handleAddNewFollowup = newFollowup => {
    this.props.data.followUps.push(newFollowup);
    this.props.addNewFollowUps(this.props.data.followUps);
  };

  handleSaveUpdatedLead = async updatedLead => {
    this.props.addUpdatedLead(updatedLead);
    this.props.toggleEdit();
  };

  render() {
    const { data, assignLead, moveLead, back, toggleEdit } = this.props;

    return (
      <div className="job">
        <div className="job-container">
          <TopButtons
            data={data}
            assignLead={assignLead}
            moveLead={moveLead}
            back={back}
          />

          {this.props.editJob ? (
            this.props.editedEnquiry ? (
              <EditJob
                data={this.props.editedEnquiry.data}
                saveUpdatedLead={this.handleSaveUpdatedLead}
              />
            ) : (
              <EditJob
                data={data}
                saveUpdatedLead={this.handleSaveUpdatedLead}
              />
            )
          ) : this.props.editedEnquiry ? (
            <Enquiry
              data={this.props.editedEnquiry.data}
              showEditForm={toggleEdit}
            />
          ) : (
            <Enquiry data={data} showEditForm={toggleEdit} />
          )}

          {this.props.editedEnquiry ? (
            <ImageDisplay data={this.props.editedEnquiry.data} />
          ) : (
            <ImageDisplay data={data} />
          )}

          {this.props.editedEnquiry ? (
            <Followups data={this.props.editedEnquiry.data} />
          ) : (
            <Followups data={data} />
          )}

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
