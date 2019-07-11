import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login"
import Register from "./components/Register"
import Dashboard from "./components/Dashboard"
import Admin from "./components/Admin"

class Routes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      const { data } = this.props;
      return(
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route 
            exact path="/" 
            render={(props) => <Dashboard {...props} data={data} />} 
          />
          <Route path="/admin" component={Admin}/>
        </Switch>
      )
    }
}

export default Routes;