import React, { Component } from "react";
import Sidebar from "./Sidebar/";
import JobList from "./JobList/";
import Job from "./Job/";
import axios from "axios";

import "./dashboard.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeScreen: "inbox",
      activeJob: this.props.data[0],
      editJob: false
    };
  }

  setActiveJob = jobId => {
    const foundJob = this.props.data.find(datum => {
      return datum._id === jobId;
    });
    this.setState({
      activeJob: foundJob
    });
  };

  // The below three functions are for the Top Buttons for the Job view

  handleMoveLead = async (category) => {
    const id = this.state.activeJob._id;
    const job = await axios.put(`${process.env.REACT_APP_API_URL}/jobs/${id}`, {
      // Set the existing status to false.
      [category]: true
    })
    console.log(job)
    this.setActiveJob(id);
  }

  handleAssignLead = async (name) => {
    const id = this.state.activeJob._id;
    const res = await axios.put(`${process.env.REACT_APP_API_URL}/jobs/${id}`, {
      assignedTrade: name
    })
    console.log(res)
    this.setActiveJob(id);
  }

  handleEditLead = () => {
    this.setState({
      editJob: !this.state.editJob
    })
  }

  handleAddNewFollowUps = async newFollowUps => {
    console.log(newFollowUps);
    const id = this.state.activeJob._id;
    await axios.put(`${process.env.REACT_APP_API_URL}/jobs/${id}`, {
      followUps: newFollowUps
    });
    this.setActiveJob(id);
  };

  progressFilter = data => {
    return data.filter(datum => {
      return datum.inProgress;
    });
  };

  soldFilter = data => {
    return data.filter(datum => {
      return datum.sold;
    });
  };

  archiveFilter = data => {
    return data.filter(datum => {
      return datum.archived;
    });
  };

  filterData = data => {
    const { activeScreen } = this.state;
    if (activeScreen === "inbox") {
      return data;
    } else if (activeScreen === "in progress") {
      return this.progressFilter(data);
    } else if (activeScreen === "sold") {
      return this.soldFilter(data);
    } else if (activeScreen === "archive") {
      return this.archiveFilter(data);
    } else {
      return data;
    }
  };

  changeScreen = screen => {
    this.setState({
      activeScreen: screen
    });
  };

  render() {
    const { data } = this.props;
    const { activeJob } = this.state;
    return (
      <div className="dashboard">
        <Sidebar data={data} changeScreen={this.changeScreen} />
        <JobList
          data={this.filterData(data)}
          setActiveJob={this.setActiveJob}
        />
        <Job 
          data={activeJob} 
          addNewFollowUps={this.handleAddNewFollowUps}
          moveLead={this.handleMoveLead}
          assignLead={this.handleAssignLead}
          editLead={this.handleEditLead}
        />
      </div>
    );
  }
}

export default Dashboard;
