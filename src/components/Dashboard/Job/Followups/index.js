import React, { Component } from "react";
import "./followups.css";

class FollowupEdit extends Component {
  state = {
    comment: this.props.followup.tradeComments | '',
  }

  handleChange = (event) => {
    this.setState({
      comment: event.target.value
    })
  }

  render () {
    const { followup, index, save } = this.props;
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
            <textarea className='edit-comment'>
              {followup.tradeComments}
            </textarea>
          </p>
          <p className='float-right'>
            <span className='button' onClick={save}>Save</span>
          </p>
        </div>
      </div>
    )
  }
}

const SingleFollowUp = (props) => {
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
          <p className='float-right'>
            <span className='button' onClick={edit}>Edit</span>
          </p>
        </p>
      </div>
    </div>
  )
}

class Followups extends Component {
  state = {
    edit: false,
  }

  handleClick = () => {
    this.setState({
      edit: !this.state.edit
    })
  }

  render() {
    const { edit } = this.state;
    const { data } = this.props;
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
                  save={this.handleClick} 
                  followup={followup} 
                  index={index} 
                />
              ) 
            } else {
              return (
                <SingleFollowUp 
                  edit={this.handleClick} 
                  followup={followup} 
                  index={index} 
                />
              ) 
            }
          })}
        </div>
      );
    }
  }
}

export default Followups;