import React from "react";
import "./topButtons.css";

class TopButtons extends React.Component {
  state = {
    assigned: ""
    // editLead: true
  };
  // Testing only:
  users = [
    { name: "Brett" },
    { name: "Aaron" },
    { name: "Luke" },
    { name: "Kev" },
    { name: "Spiros" }
  ];

  parseCategory = category => {
    switch (category) {
      case "In Progress":
        return "inProgress";
      case "Sold":
        return "sold";
      case "Archived":
        return "archived";
      default:
        return null;
    }
  };

  handleAssignLead = e => {
    const name = e.target.value;
    this.props.assignLead(name);
  };

  handleMoveLead = e => {
    const category = this.parseCategory(e.target.value);
    this.props.moveLead(category);
  };

  // handleClick = () => {
  //   this.props.editLead();
  // };

  // handleEditClick = e => {
  //   e.preventDefault();
  //   this.setState({
  //     editLead: false
  //   });
  //   this.props.showEditForm();
  // };

  // handleSubmitClick = e => {
  //   e.preventDefault();
  //   this.props.saveEditForm();
  // };

  render() {
    const { users } = this;
    return (
      <div className="job-top-buttons">
        <div className="button assign-lead">
          <p>Assigned to:</p>
          <select
            id="assigned"
            className="options"
            onChange={this.handleAssignLead}
          >
            {users.map((user, i) => (
              <option key={i}>{user.name}</option>
            ))}
          </select>
        </div>
        <div className="top-buttons-right">
          <div className="button move-lead">
            <p>Mark as:</p>
            <select className="options" onChange={this.handleMoveLead}>
              <option>In Progress</option>
              <option>Sold</option>
              <option>Archived</option>
            </select>
          </div>
          {/* {this.state.editLead ? (
            <div className="button edit-lead" onClick={this.handleEditClick}>
              <p>Edit Lead</p>
            </div>
          ) : (
            <div className="button edit-lead" onClick={this.handleSubmitClick}>
              <p>Submit Lead</p>
            </div>
          )} */}
        </div>
      </div>
    );
  }
}

export default TopButtons;
