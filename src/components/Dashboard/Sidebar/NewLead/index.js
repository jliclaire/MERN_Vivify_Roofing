import React, { Component } from "react";
import NewLeadForm from "./NewLeadForm";

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
        <button
          className="sidebar-add-lead-btn"
          onClick={this.toggleNewLeadPopup}
        >
          New
        </button>
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
