import React, { Component } from "react";
import "./followups.css";

class Followups extends Component {

  render() {
    const { data } = this.props;
    if (data.followUps.length === 0) {
      return null;
    } else {
      return (
        <div className="job-followups">
          <h1>Follow Ups</h1>
          {data.followUps.map((followup, index) => {
            return (
              <div key={index} className="job-followups-container">
                <div className="job-followups-info p-font">
                  <p className="p-flex-center">
                    <span className="comments">Follow up date:</span>
                    {followup.followupDate}
                  </p>
                  <p className="p-border p-flex-center">
                    <span className="comments">Follow up by:</span>
                    {followup.salesName}
                  </p>
                  <p className="p-flex-center">
                    <span className="comments">Quote Amount:</span>{" "}
                    {followup.quoteAmount}
                  </p>
                </div>
                <div className="job-followups-comment p-font">
                  <p>
                    <span className="comments">Comment: </span>
                    {followup.tradeComments}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  }
}

export default Followups;
