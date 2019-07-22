import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/Login/";
import Register from "./components/Register/";
import Dashboard from "./components/Dashboard";
import Admin from "./components/Admin";

class Routes extends Component {
  render() {
    const { data, authenticated, currentUser, authCall, users } = this.props;
    return (
      <Switch>
        <Route
          path="/login"
          render={props => <Login {...props} authCall={authCall} />}
        />

        <Route
          path="/register"
          render={props => <Register {...props} authCall={authCall} />}
        />

        <Route
          exact
          path="/"
          render={props =>
            authenticated ? (
              <Dashboard
                {...props}
                data={data}
                newLead={newLead}
                currentUser={currentUser}
                users={users}
              />
            ) : (
              <Redirect to="/login" />
            )
          }
        />

        <Route
          path="/admin"
          render={props => (
            <Admin {...props} data={data} currentUser={currentUser} />
          )}
        />
      </Switch>
    );
  }
}

export default Routes;
