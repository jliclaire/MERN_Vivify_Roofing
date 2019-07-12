import React, { Component } from "react";
import { capitaliseMultiple } from "../../../utils/capitalise";
import "./JobListRow.css";

class JobListRow extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = e => {};

  render() {
    console.log(this.props.data);
    return (
      <div className="jobList-container">
        {this.props.data.map((job, index) => {
          return (
            <div className="jobList-row" key={index} onClick={this.handleClick}>
              <div className="jobList-list-left">
                <h4>{capitaliseMultiple(job.name)}</h4>
                <h5>{capitaliseMultiple(job.suburb)}</h5>
                <p>Project Type: {job.projectType} </p>
              </div>
              <div className="jobList-list-right">
                <p>{new Date(job.createdTime).toLocaleDateString()}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default JobListRow;
