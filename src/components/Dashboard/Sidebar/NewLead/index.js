import React, { Component } from "react";
import NewLeadForm from "./NewLeadForm";
import axios from "axios";
import '../sidebar.css'

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
        <div
          className="sidebar-bottom-button m-2"
          onClick={this.toggleNewLeadPopup}
        >
          <p className='button-text'>Add New Lead</p>
        </div>
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
