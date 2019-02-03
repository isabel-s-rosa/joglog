import React from "react";
import Link from "react-router-dom/es/Link";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        link: null,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    //this.props.login(document.getElementById("email").value, document.getElementById("password").value);
    const body = {email: document.getElementById("email").value, password: document.getElementById("password").value};
    fetch('/login', {
      method: 'POST',
      headers: {
          'Content-type': 'application/json'
      },
      body: JSON.stringify(body)
    });
  }

  componentDidMount() {
      let link_modal = (<Link to="/login" onClick={this.handleSubmit} id="signin-button" className="btn btn-dark">enter</Link>);
      this.setState({
          link: link_modal,
      });
  }

  render() {
    const body = {email: "l", password: "k"};
    fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(body)
      });
    const link_modal = this.state.link;
    return (
    <div id="container">
        <div id="welcome-image">
            <div id="joglog-box"><a id="joglog-text">joglog</a></div>
            <div id="form-div">
            <form onSubmit={this.handleSubmit} id="input-form">
                <div className="form-group row">
                    <label className="col-sm-2 prompt-text">email:</label>
                    <div className="col-sm-10 input-box">
                        <input name="username" id="email" className="form-control text-input-box"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 prompt-text">password:</label>
                    <div className="col-sm-10 input-box">
                        <input name="password" id="password" className="form-control text-input-box"/>
                    </div>
                </div>
                <button onClick={this.handleSubmit} id="signin-button" className="btn btn-dark">enter</button>
            </form>
            </div>
        </div>
    </div>
    )
    ;
  }
}

export default Login;