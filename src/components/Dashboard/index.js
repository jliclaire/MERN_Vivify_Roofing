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
      activeJob: this.props.data[0],
      editJob: false,
      editedEnquiry: ""
    };
  }

  setActiveJob = async jobId => {
    const foundJob = await this.props.data.find(datum => {
      return datum._id === jobId;
    });
    if (window.innerWidth < 767) {
      this.setState({
        mobileShowList: false,
        activeJob: foundJob
      });
    } else {
      this.setState({
        activeJob: foundJob
      });
    }
    if (this.state.editJob) {
      this.setState({
        editJob: false
      });
    }
  };

  handleShowEditForm = () => {
    this.setState({
      editJob: !this.state.editJob
    });
  };

  back = () => {
    this.setState({
      mobileShowList: true
    });
  };

  // The below three functions are for the Top Buttons for the Job view

  handleMoveLead = async category => {
    const id = this.state.activeJob._id;
  
    const job = await axios.put(`${process.env.REACT_APP_API_URL}/jobs/${id}`, {
      // Set the existing status to false.
      [category]: true
    });
    console.log(job);
    this.setActiveJob(id);
  };

  handleAssignLead = async name => {
    const id = this.state.activeJob._id;
    const res = await axios.put(`${process.env.REACT_APP_API_URL}/jobs/${id}`, {
      assignedTrade: name
    });
    console.log(res);
    this.setActiveJob(id);
  };

  handleSaveEditedFollowup = async (comment, jobId, followupId) => {
    const response = await axios.put(
      `${process.env.REACT_APP_API_URL}/jobs/${jobId}/followups/${followupId}`,
      {
        newComment: comment
      }
    );
    this.setState({
      editedEnquiry: response,
    });
  };

  handleAddNewFollowUps = async newFollowUps => {
    const id = this.state.activeJob._id;
    const newFollowup = await axios.put(
      `${process.env.REACT_APP_API_URL}/jobs/${id}`,
      {
        followUps: newFollowUps
      }
    );
    this.setState({
      editedEnquiry: newFollowup
    });
  };

  handleAddUpdatedLead = async updatedLead => {
    const id = this.state.activeJob._id;
    const editedEnquiry = await axios.put(
      `${process.env.REACT_APP_API_URL}/jobs/${id}`,
      updatedLead
    );
    this.setState({
      editedEnquiry: editedEnquiry
    });
    this.setActiveJob(id);
  };

  handleClearEditData = () => {
    if (this.state.editedEnquiry_id !== this.state.activeJob._id) {
      this.setState({
        editedEnquiry: ""
      });
    }
  };

  progressFilter = data => {
    return data.filter(datum => {
      return (datum.assignedTrade && !datum.sold && !datum.archived);
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

  newFilter = data => {
    return data.filter(datum => {
      return (!datum.assignedTrade && !datum.sold && !datum.archived)
    })
  }

  filterData = data => {
    const { activeScreen } = this.state;
    if (activeScreen === "inbox") {
      return this.newFilter(data);
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

  authoriseData = (data) => {
    // Filter the data so that only leads assigned to the currentUser are shown
    const { currentUser } = this.props;
    if (currentUser.role === 'Admin') {
      return data;
    } else {
      const authData = data.filter(datum => {
        return currentUser.name === datum.assignedTrade;
      });
      return authData;
    }
  };

  render() {
    let { data, currentUser, newLead } = this.props;
    data = this.authoriseData(data);
    const { activeJob, mobileShowList, activeScreen } = this.state;
    return (
      <div className="dashboard">
        <Sidebar
          data={data}
          changeScreen={this.changeScreen}
          back={this.back}
          mobileShowList={mobileShowList}
          activeScreen={activeScreen}
          newLead={newLead}
          currentUser={currentUser}
        />
        <JobList
          data={this.filterData(data)}
          setActiveJob={this.setActiveJob}
          show={this.state.mobileShowList}
          activeId={this.state.activeJob._id}
          clearEditData={this.handleClearEditData}
        />
        {(this.state.mobileShowList && window.innerWidth < 767) || (
          <Job
            users={this.props.users}
            data={activeJob}
            addNewFollowUps={this.handleAddNewFollowUps}
            addUpdatedLead={this.handleAddUpdatedLead}
            moveLead={this.handleMoveLead}
            assignLead={this.handleAssignLead}
            editLead={this.handleEditLead}
            toggleEdit={this.handleShowEditForm}
            editJob={this.state.editJob}
            editedEnquiry={this.state.editedEnquiry}
            currentUser={currentUser}
            handleSaveEditedFollowup={this.handleSaveEditedFollowup}
          />
        )}
      </div>
    );
  }
}

export default Dashboard;
