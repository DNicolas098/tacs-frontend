import LoginTemplateSideBar from "components/Login/LoginTemplateSideBar";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "components/Dashboard/Dashboard";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginTemplateSideBar></LoginTemplateSideBar>
        </Route>
        <Route path="/app">
          <Dashboard></Dashboard>
        </Route>
        <Route path="/"></Route>
      </Switch>
    </Router>
  );
}
