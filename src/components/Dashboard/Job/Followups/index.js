import React, { Component } from "react";
import "./followups.css";
import axios from "axios";

class FollowupEdit extends Component {
  state = {
    comment: this.props.followup.tradeComments | ""
  };

  handleClick = () => {
    const { save, followup, jobId } = this.props;
    const followupId = followup._id;
    const { comment } = this.state;
    save(comment, jobId, followupId);
  };

  handleChange = event => {
    this.setState({
      comment: event.target.value
    });
    console.log(this.state);
  };

  render() {
    const { followup, index } = this.props;
    return (
      <div key={index} className="job-followups-container">
        <div className="job-followups-info p-font">
          <p className="p-flex-center">
            <span className="comments">{followup.followupDate}</span>
          </p>
          <p className="p-border p-flex-center">
            <span className="comments">{followup.salesName}</span>
          </p>
          <p className="p-flex-center">
            <span className="comments">${followup.quoteAmount}</span>
          </p>
        </div>
        <div className="job-followups-comment p-font">
          <p>
            <div className="comments">Comment: </div>
            <textarea className="edit-comment" onChange={this.handleChange}>
              {followup.tradeComments}
            </textarea>
          </p>
          <p className="float-right">
            <span className="button" onClick={this.handleClick}>
              Save
            </span>
          </p>
        </div>
      </div>
    );
  }
}

const SingleFollowUp = props => {
  const { followup, index, edit } = props;
  return (
    <div key={index} className="job-followups-container">
      <div className="job-followups-info p-font">
        <p className="p-flex-center">
          <span className="comments">{followup.followupDate}</span>
        </p>
        <p className="p-border p-flex-center">
          <span className="comments">{followup.salesName}</span>
        </p>
        <p className="p-flex-center">
          <span className="comments">${followup.quoteAmount}</span>
        </p>
      </div>
      <div className="job-followups-comment p-font">
        <p>
          <div className="comments">Comment: </div>
          {followup.tradeComments}
          <p className="float-right">
            <span className="button" onClick={edit}>
              Edit
            </span>
          </p>
        </p>
      </div>
    </div>
  );
};

class Followups extends Component {
  state = {
    edit: false
  };

  saveFollowup = async (comment, jobId, followupId) => {
    const response = await axios.put(
      `${process.env.REACT_APP_API_URL}/jobs/${jobId}/followups/${followupId}`,
      {
        newComment: comment
      }
    );
    console.log(response);
    this.setState({
      edit: !this.state.edit
    });
  };

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    });
  };

  render() {
    const { edit } = this.state;
    const { data } = this.props;
    const jobId = data._id;
    if (data.followUps.length === 0) {
      return null;
    } else {
      return (
        <div className="job-followups">
          <h1>Follow Ups</h1>
          {data.followUps.map((followup, index) => {
            if (edit) {
              return (
                <FollowupEdit
                  key={index}
                  save={this.saveFollowup}
                  followup={followup}
                  jobId={jobId}
                />
              );
            } else {
              return (
                <SingleFollowUp
                  edit={this.toggleEdit}
                  followup={followup}
                  key={index}
                />
              );
            }
          })}
        </div>
      );
    }
  }
}

export default Followups;
