import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/Login/";
import Register from "./components/Register/";
import Dashboard from "./components/Dashboard";
import Admin from "./components/Admin";

class Routes extends Component {
  render() {
    const {
      data,
      authenticated,
      currentUser,
      authCall,
      users,
      getLeads
    } = this.props;
    return (
      <Switch>
        <Route
          path="/login"
          render={props => <Login {...props} authCall={authCall} />}
        />

        {/* check if currentUser is admin */}

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
