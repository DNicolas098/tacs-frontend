import LoginTemplateSideBar from "components/Login/LoginTemplateSideBar";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginTemplateSideBar></LoginTemplateSideBar>
        </Route>
        <Route path="/"></Route>
      </Switch>
    </Router>
  );
}
