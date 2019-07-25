import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./deleteUser.css";

class DeleteUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteMessage: "",
      remainingUsers: ""
    };
  }

  handleDeleteUser = async e => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const userId = e.target.parentNode.id;
    const deletedUser = this.props.salesUsers.find(user => user._id === userId);
    const remainingUsers = this.props.salesUsers.filter(
      user => user._id !== userId
    );
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/users/${userId}`, {
        headers: { token: token }
      });
      const deleteMessage = `Successfully deleted account for ${
        deletedUser.name
      }!`;
      this.setState({
        deleteMessage,
        remainingUsers
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { salesUsers } = this.props;
    const { remainingUsers } = this.state;
    let data;
    {
      remainingUsers ? (data = remainingUsers) : (data = salesUsers);
    }
    if (window.innerWidth < 767) {
      return (
        <div className="delete-user-dashboard">
          <h1>All Sales Account</h1>
          {this.state.deleteMessage ? (
            <h4>{this.state.deleteMessage}</h4>
          ) : null}
          <div className="salesUser-container">
            <div className="user-row p-font comments">
              <div className="user-col">Name</div>
              <div className="user-col text-center">Delete Account</div>
            </div>
            {data.map((user, index) => {
              return (
                <div key={index} className="user-row p-font" id={user._id}>
                  <div className="user-col">{user.name}</div>
                  <i
                    className="far fa-trash-alt user-col text-center"
                    onClick={this.handleDeleteUser}
                  />
                </div>
              );
            })}
          </div>
          <div className="btn-register back-to-dashboard-btn">
            <Link to="/"> Back to Dashboard</Link>
          </div>
        </div>
      );
    } else {
      return (
        <div className="delete-user-dashboard">
          <h1>All Sales Account</h1>
          {this.state.deleteMessage ? (
            <h4>{this.state.deleteMessage}</h4>
          ) : null}
          <div className="salesUser-container">
            <div className="user-row p-font comments">
              <div className="user-col">Name</div>
              <div className="user-col">Role</div>
              <div className="user-col">Phone</div>
              <div className="col-width">Email</div>
              <div className="user-col text-center">Delete Account</div>
            </div>
            {data.map((user, index) => {
              return (
                <div key={index} className="user-row p-font" id={user._id}>
                  <div className="user-col">{user.name}</div>
                  <div className="user-col">{user.role}</div>
                  <div className="user-col">{user.phone}</div>
                  <div className="col-width">{user.email}</div>
                  <i
                    className="far fa-trash-alt user-col text-center"
                    onClick={this.handleDeleteUser}
                  />
                </div>
              );
            })}
          </div>
          <div className="btn-register back-to-dashboard-btn">
            <Link to="/"> Back to Dashboard</Link>
          </div>
        </div>
      );
    }
  }
}

export default DeleteUser;
