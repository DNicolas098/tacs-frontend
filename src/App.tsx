import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginButton from "components/LoginButton";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Log In</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/login">
            <LoginButton></LoginButton>
          </Route>
          <Route path="/"></Route>
        </Switch>
      </div>
    </Router>
  );
}
