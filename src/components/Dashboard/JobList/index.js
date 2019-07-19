import React, { Component } from "react";
import JobListRow from "./JobListRow";

class JobList extends Component {
  state = {
    activeJob: {
      _id: null
    }
  }

  setActiveJob = async jobId => {
    const foundJob = await this.props.data.find(datum => {
      return datum._id === jobId;
    });
    this.setState({
      activeJob: foundJob
    });
    if (window.innerWidth < 767) {
      this.setState({
        mobileShowList: false
      });
    }
  };

  render() {
    const { data, setActiveJob, show } = this.props;
    if (show) {
      return <JobListRow data={data} setActiveJob={this.setActiveJob} activeId={this.state.activeJob._id} />;
    } else {
      return null;
    }
  }
}

export default JobList;
