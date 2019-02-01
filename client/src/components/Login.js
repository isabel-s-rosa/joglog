import React from "react";
import Link from "react-router-dom/es/Link";

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div id="container">
        <div id="welcome-image">
            <div id="joglog-box"><a id="joglog-text">joglog</a></div>
            <div id="form-div">
            <form id="input-form">
                <div className="form-group row">
                    <label className="col-sm-2 prompt-text">email:</label>
                    <div className="col-sm-10 input-box">
                        <input className="form-control text-input-box"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 prompt-text">password:</label>
                    <div className="col-sm-10 input-box">
                        <input className="form-control text-input-box"/>
                    </div>
                </div>
                <Link to="/login" id="signin-button" className="btn btn-dark">enter</Link>
            </form>
            </div>
        </div>
    </div>
    )
    ;
  }
}

export default Login;