import React from "react";
import "./topButtons.css";

class TopButtons extends React.Component {
  state = {
    assigned: ""
  };

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

  handleFocus = e => {
    e.target.value = ''
  }

  render() {
    const { users, data } = this.props;
    console.log(data)
    return (
      <>
        <div className="job-top-buttons">
          <div className="top-options">
            <p>Assign to:</p>
            <select
              id="assigned"
              className="options"
              onChange={this.handleAssignLead}
              onFocus={this.handleFocus}
            >
              <option value=''>Select a user</option>
            {
              users &&
              users.map((user, i) => {
                console.log(data.assignedTrade)
                if (data.assignedTrade === user.name) {
                  return <option key={i}>{user}</option>
                } else {
                  return <option key={i}>{user}</option>
                }
              })
            }
            </select>
          </div>
          <div className="top-buttons-right">
            <div className="top-options">
              <p>Mark as:</p>
              <select className='options' onChange={ this.handleMoveLead }>
                <option>---</option>
                <option>Sold</option>
                <option>Archived</option>
              </select>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TopButtons;
