import React from "react";
import "../css/app.css";
import Route from "react-router-dom/es/Route";
import Switch from "react-router-dom/es/Switch";
import Welcome from "./Welcome";
import Login from "./Login";
import FailedLogin from "./FailedLogin";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user_email: null,
      user_password: null,
    }
  }

  login = (email, password) => {
    this.setState({
      user_email: email,
      user_password: password,
    });
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/login" render={() => <Login login = {this.login} />} />
          <Route exact path="/failedlogin" render={() => <FailedLogin />} />
        </Switch>
      </div>
    )
    ;
  }
}

export default App;