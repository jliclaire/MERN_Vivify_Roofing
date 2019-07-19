import React, { Component } from "react";
import "./editJob.css";

class EditJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.data.name,
      suburb: this.props.data.suburb,
      email: this.props.data.email,
      phone: this.props.data.phone,
      projectType: this.props.data.projectType,
      roofFrameType: this.props.data.roofFrameType,
      houseLevels: this.props.data.houseLevels,
      sizeOfHome: this.props.data.sizeOfHome,
      desiredRoofMaterial: this.props.data.desiredRoofMaterial,
      roofType: this.props.data.roofType,
      currentRoofMaterial: this.props.data.currentRoofMaterial,
      gutterDownpipeReplacement: this.props.data.gutterDownpipeReplacement
    };
  }

  handleOnChange = e => {
    this.setState({ [e.target.id]: e.target.value });
    console.log(this.state);
  };

  // assign below method to the edit lead button
  handleSaveClick = e => {
    e.preventDefault();
    const updatedLead = {
      name: this.state.name,
      suburb: this.state.suburb,
      email: this.state.email,
      phone: this.state.phone,
      projectType: this.state.projectType,
      roofFrameType: this.state.roofFrameType,
      houseLevels: this.state.houseLevels,
      sizeOfHome: this.state.sizeOfHome,
      desiredRoofMaterial: this.state.desiredRoofMaterial,
      roofType: this.state.roofType,
      currentRoofMaterial: this.state.currentRoofMaterial,
      gutterDownpipeReplacement: this.state.gutterDownpipeReplacement
    };
    this.props.saveUpdatedLead(updatedLead);
  };

  render() {
    const { data } = this.props;
    return (
      <div className="job-enquiry job-enquiry-edit">
        {/* save enquiry info button */}
        <button className="edit-button" onClick={this.handleSaveClick}>
          Save
        </button>
        {/* customer info section */}
        <div className="job-enquiry-customer-edit margin-top-bottom">
          <div className="name-suburb-edit">
            <label className="p-font" htmlFor="name">
              <span className="comments">Name: </span>
              <input
                id="name"
                type="text"
                defaultValue={data.name || ""}
                onChange={this.handleOnChange}
              />
            </label>
            <label className="p-font" htmlFor="suburb">
              <span className="comments">Suburb: </span>
              <input
                id="suburb"
                type="text"
                defaultValue={data.suburb || ""}
                onChange={this.handleOnChange}
              />
            </label>
          </div>
          <div className="email-phone-date-edit">
            <label className="p-font" htmlFor="email">
              <span className="comments">Email: </span>
              <input
                id="email"
                type="email"
                defaultValue={data.email || ""}
                onChange={this.handleOnChange}
              />
            </label>
            <label className="p-font" htmlFor="phone">
              <span className="comments">Phone: </span>
              <input
                id="phone"
                type="text"
                defaultValue={data.phone || ""}
                onChange={this.handleOnChange}
              />
            </label>
            {/* <h5>{new Date(data.createdTime).toLocaleDateString()}</h5> */}
          </div>
        </div>

        {/* customer comment section */}
        {/* <p className="job-enquiry-customer-comment margin-top-bottom p-font">
          <span className="comments">Comments:</span> {data.comments}
        </p> */}

        {/* customer project info section */}
        <div className="job-enquiry-project-info margin-top-bottom">
          <div className="project-info-row">
            <label
              className="project-info-row-left p-font"
              htmlFor="projectType"
            >
              <span className="comments">Project Type: </span>
              <input
                id="projectType"
                type="text"
                defaultValue={data.projectType || ""}
                onChange={this.handleOnChange}
              />
            </label>
            <label
              className="project-info-row-right p-font"
              htmlFor="roofFrameType"
            >
              <span className="comments">Roof Frame Type: </span>
              <input
                id="roofFrameType"
                type="text"
                defaultValue={data.roofFrameType || ""}
                onChange={this.handleOnChange}
              />
            </label>
          </div>
          <div className="project-info-row">
            <label
              className="project-info-row-left p-font"
              htmlFor="houseLevels"
            >
              <span className="comments">House Levels: </span>
              <input
                id="houseLevels"
                type="text"
                defaultValue={data.houseLevels || ""}
                onChange={this.handleOnChange}
              />
            </label>
            <label
              className="project-info-row-right p-font"
              htmlFor="sizeOfHome"
            >
              <span className="comments">Approximate Size of Home: </span>
              <input
                id="sizeOfHome"
                type="text"
                defaultValue={data.sizeOfHome || ""}
                onChange={this.handleOnChange}
              />
            </label>
          </div>
          <div className="project-info-row">
            <label className="project-info-row-left p-font" htmlFor="roofType">
              <span className="comments">Roof Type: </span>
              <input
                id="roofType"
                type="text"
                defaultValue={data.roofType || ""}
                onChange={this.handleOnChange}
              />
            </label>
            <label
              className="project-info-row-right p-font"
              htmlFor="desiredRoofMaterial"
            >
              <span className="comments">Desired Roof Material: </span>
              <input
                id="desiredRoofMaterial"
                type="text"
                defaultValue={data.desiredRoofMaterial || ""}
                onChange={this.handleOnChange}
              />
            </label>
          </div>
          <div className="project-info-row border-bottom">
            <label
              className="project-info-row-left p-font"
              htmlFor="currentRoofMaterial"
            >
              <span className="comments">Current Roof Material: </span>
              <input
                id="currentRoofMaterial"
                type="text"
                defaultValue={data.currentRoofMaterial || ""}
                onChange={this.handleOnChange}
              />
            </label>
            <label
              className="project-info-row-right p-font"
              htmlFor="gutterDownpipeReplacement"
            >
              <span className="comments">Gutter Downpipe Replacement: </span>
              <input
                id="gutterDownpipeReplacement"
                type="text"
                defaultValue={data.gutterDownpipeReplacement || ""}
                onChange={this.handleOnChange}
              />
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default EditJob;
