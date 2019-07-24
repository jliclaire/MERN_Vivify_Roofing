import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/Login/";
import Register from "./components/Register/";
import DeleteUser from "./components/DeleteUser/";
import Dashboard from "./components/Dashboard";

class Routes extends Component {
  render() {
    const {
      data,
      authenticated,
      currentUser,
      authCall,
      users,
      getLeads,
      salesUsers
    } = this.props;
    return (
      <Switch>
        <Route
          path="/login"
          render={props => <Login {...props} authCall={authCall} />}
        />

        <Route
          path="/register"
          render={props =>
            currentUser && currentUser.role === "Admin" ? (
              <Register {...props} authCall={authCall} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />

        <Route
          path="/users/sales"
          render={props =>
            currentUser && currentUser.role === "Admin" ? (
              <DeleteUser
                {...props}
                authCall={authCall}
                salesUsers={salesUsers}
              />
            ) : (
              <Redirect to="/login" />
            )
          }
        />

        <Route
          exact
          path="/"
          render={props =>
            authenticated ? (
              <Dashboard
                {...props}
                data={data}
                currentUser={currentUser}
                users={users}
                getLeads={getLeads}
              />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
      </Switch>
    );
  }
}

export default Routes;
