import "@progress/kendo-theme-material";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import Calendar from "./components/Calendar";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact render={(props) => <Home {...props} />} />
          <Route
            path="/calendar"
            exact
            render={(props) => <Calendar {...props} />}
          />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
