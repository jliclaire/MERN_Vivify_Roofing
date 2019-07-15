import React, { Component } from "react";
import "./projectInfo.css";

class ProjectInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    return (
      <div className="job-enquiry-project-info margin-top-bottom">
        <div className="project-info-row">
          <p className="project-info-row-left p-font">
            <span className="comments">Project Type: </span>
            {data.projectType}
          </p>
          <p className="project-info-row-right p-font">
            <span className="comments">Roof Frame Type: </span>
            {data.roofFrameType}
          </p>
        </div>
        <div className="project-info-row">
          <p className="project-info-row-left p-font">
            <span className="comments">Home Size: </span>
            {data.sizeOfHome}
          </p>
          <p className="project-info-row-right p-font">
            <span className="comments">House Levels: </span>
            {data.houseLevels}
          </p>
        </div>
        <div className="project-info-row">
          <p className="project-info-row-left p-font">
            <span className="comments">Current Roof Material: </span>
            {data.currentRoofMaterial}
          </p>
          <p className="project-info-row-right p-font">
            <span className="comments">Desired Roof Material: </span>
            {data.desiredRoofMaterial}
          </p>
        </div>
        <div className="project-info-row border-bottom">
          <p className="project-info-row-left p-font">
            <span className="comments">Roof Type: </span>
            {data.roofType}
          </p>
          <p className="project-info-row-right p-font">
            <span className="comments">Gutter Downpipe Replacement: </span>
            {data.gutterDownpipeReplacement}
          </p>
        </div>
      </div>
    );
  }
}

export default ProjectInfo;
