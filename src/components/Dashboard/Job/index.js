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
    this.state = {
      editedEnquiry: ""
    };
  }

  handleAddNewFollowup = newFollowup => {
    this.props.data.followUps.push(newFollowup);
    this.props.addNewFollowUps(this.props.data.followUps);
  };

  // handleSaveUpdatedLead = async updatedLead => {
  //   this.props.addUpdatedLead(updatedLead);
  //   this.props.toggleEdit();
  // };

  handleSaveUpdatedLead = async updatedLead => {
    const id = this.props.data._id;
    const editedEnquiry = await axios.put(
      `${process.env.REACT_APP_API_URL}/jobs/${id}`,
      updatedLead
    );
    this.props.addUpdatedLead(id);
    this.setState({
      editedEnquiry: editedEnquiry
    });
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
          {/* {this.props.editJob ? (
            <EditJob data={data} saveUpdatedLead={this.handleSaveUpdatedLead} />
          ) : (
            <Enquiry data={data} showEditForm={toggleEdit} />
          )} */}

          {this.props.editJob ? (
            this.state.editedEnquiry ? (
              <EditJob
                data={this.state.editedEnquiry.data}
                saveUpdatedLead={this.handleSaveUpdatedLead}
              />
            ) : (
              <EditJob
                data={data}
                saveUpdatedLead={this.handleSaveUpdatedLead}
              />
            )
          ) : this.state.editedEnquiry ? (
            <Enquiry
              data={this.state.editedEnquiry.data}
              showEditForm={toggleEdit}
            />
          ) : (
            <Enquiry data={data} showEditForm={toggleEdit} />
          )}

          {/* {data.imageUrls.length ? <ImageDisplay data={data} /> : null} */}
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
