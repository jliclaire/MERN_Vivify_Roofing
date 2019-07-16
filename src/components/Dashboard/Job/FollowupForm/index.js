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
        tradeComments: "",
        quoteAmount: ""
      },
      showPopup: false
    };
  }

  handleAddFollowups = e => {
    e.preventDefault();
    const newFollowup = {
      followupDate: this.state.followupDate,
      salesName: this.state.salesName,
      tradeComments: this.state.tradeComments,
      quoteAmount: this.state.quoteAmount
    };
    console.log(newFollowup);
    this.props.addNewFollowup(newFollowup);
    // this.clearFormData();
  };

  // clearFormData = () => {
  //   this.setState({
  //     followup: {
  //       followupDate: null,
  //       salesName: null,
  //       tradeComments: null,
  //       quoteAmount: null
  //     }
  //   });
  // };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  togglePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup
    });
  };

  addQuoteAmount = amount => {
    this.setState({ quoteAmount: amount });
    console.log(amount);
  };

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
              {this.state.quoteAmount || "Add Quote"}
            </button>
            {this.state.showPopup ? (
              <CheckList
                className="checklist-component"
                closePopup={this.togglePopup.bind(this)}
                newQuoteAmount={this.addQuoteAmount}
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
