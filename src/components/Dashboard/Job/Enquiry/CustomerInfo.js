import React, { Component } from "react";
import "./CustomerInfo.css";

class CustomerInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    return (
      <div className="job-enquiry-customer">
        <div className="name-suburb-left">
          <h3>{data.name}</h3>
          <h5>{data.suburb}</h5>
        </div>
        <div className="email-phone-date">
          <h5>{data.email}</h5>
          <h5>{data.phone}</h5>
          <h5>{new Date(data.createdTime).toLocaleDateString()}</h5>
        </div>
      </div>
    );
  }
}

export default CustomerInfo;
