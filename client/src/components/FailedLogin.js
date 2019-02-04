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
          <div id="failed-box"><a id="message-text">login failed:(</a></div>
          <Link to="/login" id="back-button" className="btn btn-dark">back</Link>
        </div>
      </div>
    )
    ;
  }
}

export default FailedLogin;