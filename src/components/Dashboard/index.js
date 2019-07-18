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
      mobileShowList: true,
      activeScreen: "inbox",
      activeJob: this.props.data[0]
    };
  }

  setActiveJob = jobId => {
    const foundJob = this.props.data.find(datum => {
      return datum._id === jobId;
    });
    this.setState({
      activeJob: foundJob
    });
    if (window.innerWidth < 767) {
      this.setState({
        mobileShowList: false
      })
    }
  };

  back = () => {
    this.setState({
      mobileShowList: true,
    })
  }

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
    console.log(this.state)
    const { data } = this.props;
    const { activeJob, mobileShowList } = this.state;
    return (
      <div className="dashboard">
        <Sidebar 
          data={data} 
          changeScreen={this.changeScreen}
          back={this.back}
          mobileShowList={mobileShowList}
        />
        <JobList
          data={this.filterData(data)}
          setActiveJob={this.setActiveJob}
          show={this.state.mobileShowList}
        />
        { (this.state.mobileShowList && window.innerWidth < 767) ||
        <Job 
          data={activeJob} 
          addNewFollowUps={this.handleAddNewFollowUps}
          moveLead={this.handleMoveLead}
          assignLead={this.handleAssignLead}
        />
        }
      </div>
    );
  }
}

export default Dashboard;
