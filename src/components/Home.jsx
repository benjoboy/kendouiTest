import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav>
          <ul>
            <li>
              <Link to="/calendar">Koledar</Link>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default Home;
<h1> hello</h1>;
