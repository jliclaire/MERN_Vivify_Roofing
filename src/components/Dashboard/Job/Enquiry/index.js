import React, { Component } from "react";
import CustomerInfo from "./CustomerInfo";
import CustomerComment from "./CustomerComment";
import ProjectInfo from "./ProjectInfo";
import "./enquiry.css";

class Enquiry extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="job-enquiry">
        <CustomerInfo data={data} />
        <CustomerComment data={data} />
        <ProjectInfo data={data} />
      </div>
    );
  }
}

export default Enquiry;
