import React, { Component } from "react";
import "./newLeadForm.css";

class NewLeadForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleOnChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  // assign below method to the edit lead button
  handleSaveNewLeadClick = e => {
    e.preventDefault();
    const newLead = {
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
    this.props.addNewLead(newLead);

    this.props.closeNewLeadPopup(e);
  };

  render() {
    return (
      <div className="new-lead-popup">
        <div className="new-lead-popupinner">
          <form>
            <div className="new-lead-form-top">
              <div className="checkbox-close-icon">
                <i
                  className="far fa-window-close"
                  onClick={this.props.closeNewLeadPopup}
                />
              </div>

              {/* save enquiry info button */}
              <button
                className="edit-button"
                onClick={this.handleSaveNewLeadClick}
              >
                Save
              </button>
            </div>
            {/* customer info section */}
            <div className="job-enquiry job-enquiry-edit">
              <div className="job-enquiry-customer-edit margin-top-bottom">
                <div className="name-suburb-edit">
                  <label className="p-font" htmlFor="name">
                    <span className="comments">Name: </span>
                    <input
                      id="name"
                      type="text"
                      onChange={this.handleOnChange}
                    />
                  </label>
                  <label className="p-font" htmlFor="suburb">
                    <span className="comments">Suburb: </span>
                    <input
                      id="suburb"
                      type="text"
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
                      onChange={this.handleOnChange}
                    />
                  </label>
                  <label className="p-font" htmlFor="phone">
                    <span className="comments">Phone: </span>
                    <input
                      id="phone"
                      type="text"
                      onChange={this.handleOnChange}
                    />
                  </label>
                </div>
              </div>

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
                      onChange={this.handleOnChange}
                    />
                  </label>
                </div>
                <div className="project-info-row">
                  <label
                    className="project-info-row-left p-font"
                    htmlFor="roofType"
                  >
                    <span className="comments">Roof Type: </span>
                    <input
                      id="roofType"
                      type="text"
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
                      onChange={this.handleOnChange}
                    />
                  </label>
                  <label
                    className="project-info-row-right p-font"
                    htmlFor="gutterDownpipeReplacement"
                  >
                    <span className="comments">
                      Gutter Downpipe Replacement:{" "}
                    </span>
                    <input
                      id="gutterDownpipeReplacement"
                      type="text"
                      onChange={this.handleOnChange}
                    />
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NewLeadForm;
