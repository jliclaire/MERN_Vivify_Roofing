import React, { Component } from "react";
// import Popup from "reactjs-popup";
import "./followupForm.css";
import CheckList from "./CheckList/index";

class FollowupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      followup: {
        followupDate: "",
        salesName: "",
        tradeComments: ""
      },
      showPopup: false
    };
  }

  handleAddFollowups = e => {
    e.preventDefault();
    const newFollowup = {
      followupDate: this.state.followupDate,
      salesName: this.state.salesName,
      tradeComments: this.state.tradeComments
    };
    this.props.addNewFollowup(newFollowup);
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    return (
      <div className="job-followup-form">
        <div className="job-followup-form-container">
          <div className="followup-info">
            <input
              className="job-followup-date"
              type="date"
              id="followupDate"
              placeholder="Follow up data"
              onChange={this.handleChange}
            />
            <input
              className="job-followup-by"
              type="text"
              id="salesName"
              placeholder="Follow up by"
              onChange={this.handleChange}
            />
            <button
              className="followup-quote-btn"
              onClick={this.togglePopup.bind(this)}
            >
              Add Quote
            </button>
            {this.state.showPopup ? (
              <CheckList
                className="checklist-component"
                closePopup={this.togglePopup.bind(this)}
              />
            ) : null}
          </div>
          <textarea
            id="tradeComments"
            className="followup-comment"
            placeholder="Write a comment"
            onChange={this.handleChange}
          />
          <div className="followup-upload-image">
            <button>Upload Image</button>
          </div>
          <button
            className="followup-add-btn"
            onClick={this.handleAddFollowups}
          >
            Add Follow Up
          </button>
        </div>
      </div>
    );
  }
}

export default FollowupForm;
