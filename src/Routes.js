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
    const { data, auth, currentUser, authCall } = this.props;
    return (
      <Switch>
        <Route path="/login" render={
          (props) => (
            <Login {...props} authCall={authCall} />
          )
        }/>

        <Route path="/register" render={
          (props) => (
            <Register {...props} authCall={authCall} />
          )
        } />
        
        <Route
          exact
          path="/"
          render={(props) => (
            auth ? (
              <Dashboard {...props} data={data} currentUser={currentUser} />
            ) : (
              <Redirect to='/login' />
            )
          )}
        />
        
        <Route path="/admin" component={Admin} />
      </Switch>
    );
  }
}

export default Routes;
