import React, { Component } from "react";
import "./followupForm.css";

class FollowupForm extends Component {
  render() {
    return (
      <div className="job-followup-form">
        <div className="job-followup-form-container">
          <div className="followup-info">
            <input className="followup-date" placeholder="Follow up data" />
            <input className="followup-by" placeholder="Follow up by" />
            <button className="followup-quote-btn">Add Quote</button>
          </div>
          <textarea
            className="followup-comment"
            placeholder="Write a comment"
          />
          <div className="followup-upload-image">
            <button>Upload Image</button>
          </div>
          <button className="followup-add-btn">Add Follow Up</button>
        </div>
      </div>
    );
  }
}

export default FollowupForm;
