import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/Login/";
import Register from "./components/Register/";
import Dashboard from "./components/Dashboard";
import Admin from "./components/Admin";

class Routes extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data, auth, currentUser } = this.props;
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route
          exact
          path="/"
          render={(props) => (
            !auth ? (
              <Redirect to='/login' />
            ) : (
              <Dashboard {...props} data={data} currentUser={currentUser} />
            )
          )}
        />
        <Route path="/admin" component={Admin} />
      </Switch>
    );
  }
}

export default Routes;
