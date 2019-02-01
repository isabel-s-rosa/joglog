import React from "react";
import Link from "react-router-dom/es/Link";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="container">
        <div id="welcome-image">
          <div id="joglog-box"><a id="joglog-text">joglog</a></div>
          <Link to="/login" id="login-button" className="btn btn-dark">login</Link>
        </div>
      </div>
    )
    ;
  }
}

export default Welcome;