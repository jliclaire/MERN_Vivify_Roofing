import React, { Component } from "react";
import CustomerInfo from "./CustomerInfo";
import CustomerComment from "./CustomerComment";
import ProjectInfo from "./ProjectInfo";
import "./enquiry.css";

class Enquiry extends Component {
  constructor(props) {
    super(props);
  }

  handleEditClick = () => {
    console.log("logging from Enquiry index.js");
    this.props.showEditForm();
  };

  render() {
    const { data } = this.props;
    return (
      <div className="job-enquiry">
        <button className="edit-button" onClick={this.handleEditClick}>
          Edit
        </button>
        <CustomerInfo data={data} />
        <CustomerComment data={data} />
        <ProjectInfo data={data} />
      </div>
    );
  }
}

export default Enquiry;
