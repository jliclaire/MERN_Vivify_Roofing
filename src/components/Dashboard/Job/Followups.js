import React, { Component } from "react";

class Followups extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    console.log(data);
    if (data.followUps.length === 0) {
      return <h4>no followups</h4>;
    } else {
      return (
        <div className="job-followups">
          {/* Followups:
          {data.followUps[3].followupDate}
          {data.followUps[3].salesName}
          {data.followUps[3].tradeComments} */}
          {data.followUps.map((followup, index) => {
            return (
              <div key={index}>
                <p>{followup.followupDate}</p>
                <p>{followup.salesName}</p>
                <p>{followup.tradeComments}</p>
              </div>
            );
          })}
        </div>
      );
    }
  }
}

export default Followups;
