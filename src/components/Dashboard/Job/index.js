import React, { Component } from "react";

class Job extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>{this.props.job.name}</div>
    );
  }
}

export default Job;
