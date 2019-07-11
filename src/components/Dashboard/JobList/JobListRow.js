import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./JobListRow.css";

class JobListRow extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = e => {};

  render() {
    console.log(this.props.data)
    return (
      <div className="jobList-container">
        {this.props.data.map((job, index) => {
          return (
            <div className="jobList-row" key={index} onClick={this.handleClick}>
              <div className="jobList-list-left">
                <h4>{job.name}</h4>
                <h5>
                  Suburb:{" "}
                  {job.suburb
                    .toLowerCase()
                    .charAt(0)
                    .toUpperCase() + job.suburb.slice(1)}
                </h5>
              </div>
              <div className="jobList-list-right">
                <h5>{new Date(job.createdTime).toLocaleDateString()}</h5>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default JobListRow;
