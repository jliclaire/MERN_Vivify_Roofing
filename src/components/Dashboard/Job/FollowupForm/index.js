import React, { Component } from "react";
import Popup from "reactjs-popup";
import "./followupForm.css"
import CheckList from './CheckList/index';  


class FollowupForm extends Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: false };  
  }

  togglePopup() {  
    this.setState({  
         showPopup: !this.state.showPopup  
    });  
     } 

  componentDidMount() {}

  render() {
    return (
      <div className="job-followup-form">
        <div className="job-followup-form-container">
          <div className="followup-info">
            <input className="followup-date" placeholder="Follow up data" />
            <input className="followup-by" placeholder="Follow up by" />
            <button className="followup-quote-btn" onClick={this.togglePopup.bind(this)}>Add Quote</button>  
            {this.state.showPopup ?  
            <CheckList className="checklist-component" closePopup={this.togglePopup.bind(this)} />  
            : null }  
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
