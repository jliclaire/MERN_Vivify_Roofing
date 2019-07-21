import React, { Component } from "react";
import "./customerInfo.css";
import { capitalise, capitaliseMultiple } from '../../../../utils/capitalise'

class CustomerInfo extends Component {

  render() {
    const { data } = this.props;
    return (
      
      <div className="job-enquiry-customer margin-top-bottom">
        <div className="name-suburb">
          <h3>{capitaliseMultiple(data.name)}</h3>
          <h5>{capitalise(data.suburb)}</h5>
        </div>
        <div className="email-phone-date">
          <h5>{data.email}</h5>
          <h5>Ph# {data.phone}</h5>
          <h5>Received {new Date(data.createdTime).toLocaleDateString()}</h5>
        </div>
      </div>
    );
  }
}

export default CustomerInfo;
