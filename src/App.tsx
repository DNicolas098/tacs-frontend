import LoginTemplateSideBar from "components/Login/LoginTemplateSideBar";
import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "components/Dashboard/Dashboard";
import { BaseWololoApiClient } from "api/client";

export default function App() {

  const baseApiClient = new BaseWololoApiClient();
  const [isLoggedIn, setLoggedIn] = React.useState(baseApiClient.userIsLoggedIn());

  const setUserLoggedIn = () => setLoggedIn(true);
  const setUserLoggedOut = () => setLoggedIn(false);

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginTemplateSideBar
            flagLoggedIn={setUserLoggedIn} />
        </Route>
        <Route path="/app">
          <Dashboard
            flagLoggedOut={setUserLoggedOut} />
        </Route>
      </Switch>
      {isLoggedIn ? <Redirect to="/app" /> : <Redirect to="/login" />}
    </Router>
  );
}
