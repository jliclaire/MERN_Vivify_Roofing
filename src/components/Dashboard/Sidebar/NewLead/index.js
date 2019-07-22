import React, { Component } from "react";
import NewLeadForm from "./NewLeadForm";
import "../sidebar.css";

class NewLead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNewLeadPopup: false
    };
  }

  toggleNewLeadPopup = e => {
    e.preventDefault();
    this.setState({
      showNewLeadPopup: !this.state.showNewLeadPopup
    });
  };

  render() {
    return (
      <div className="sidebar-add-lead">
        <div
          className="sidebar-bottom-button m-2"
          onClick={this.toggleNewLeadPopup}
        >
          <p className="button-text">Add New Lead</p>
        </div>
        {this.state.showNewLeadPopup ? (
          <NewLeadForm
            closeNewLeadPopup={this.toggleNewLeadPopup}
            newLead={this.props.newLead}
          />
        ) : null}
      </div>
    );
  }
}

export default NewLead;
