import React, { Component } from "react";
import NewLeadForm from "./NewLeadForm";
import axios from "axios";

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

  handleAddNewLead = async newLead => {
    await axios.post(`${process.env.REACT_APP_API_URL}/jobs`, newLead);
  };

  render() {
    return (
      <div className="sidebar-add-lead">
        <button
          className="sidebar-add-lead-btn"
          onClick={this.toggleNewLeadPopup}
        >
          New
        </button>
        {this.state.showNewLeadPopup ? (
          <NewLeadForm
            closeNewLeadPopup={this.toggleNewLeadPopup}
            addNewLead={this.handleAddNewLead}
          />
        ) : null}
      </div>
    );
  }
}

export default NewLead;
