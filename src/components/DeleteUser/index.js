import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./deleteUser.css";

class DeleteUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteMessage: "",
      users: this.props.salesUsers
    };
  }

  handleDeleteUser = async e => {
    e.preventDefault();
    const userId = e.target.parentNode.id;
    const token = localStorage.getItem("token");
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/users/${userId}`, {
        headers: { token: token }
      });
      const deleteMessage = "Successfully deleted sales user account!";
      this.setState({
        deleteMessage
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { salesUsers } = this.props;
    const { users } = this.state;
    let data;
    {
      users ? (data = users) : (data = salesUsers);
    }
    return (
      <div className="delete-user-dashboard">
        <h1>All Sales Account</h1>
        {this.state.deleteMessage ? <h4>{this.state.deleteMessage}</h4> : null}
        <div className="salesUser-container">
          <div className="user-row">
            <div className="user-col">Name</div>
            <div className="user-col">Role</div>
            <div className="user-col">Phone</div>
            <div className="user-col">Email</div>
            <div className="user-col">Delete Account</div>
          </div>
          {data.map((user, index) => {
            return (
              <div key={index} className="user-row" id={user._id}>
                <div className="user-col">{user.name}</div>
                <div className="user-col">{user.role}</div>
                <div className="user-col">{user.phone}</div>
                <div className="user-col">{user.email}</div>
                <i
                  class="far fa-trash-alt user-col"
                  onClick={this.handleDeleteUser}
                />
              </div>
            );
          })}
        </div>

        <div className="btn-register back-to-dashboard-btn">
          <Link to="/">Back to Dashboard</Link>
        </div>
      </div>
    );
  }
}

export default DeleteUser;
