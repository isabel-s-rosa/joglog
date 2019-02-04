import React from "react";
import Link from "react-router-dom/es/Link";

class FailedLogin extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="container">
        <div id="welcome-image">
          <div id="joglog-box"><a id="joglog-text">joglog</a></div>
          <div><a>login failed:(</a></div>
          <Link to="/login" id="login-button" className="btn btn-dark">back to login</Link>
        </div>
      </div>
    )
    ;
  }
}

export default FailedLogin;