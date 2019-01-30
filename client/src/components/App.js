import React from "react";
import "../css/app.css";
import Route from "react-router-dom/es/Route";
import Switch from "react-router-dom/es/Switch"
import Welcome from "./Welcome"

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Welcome} />
        </Switch>
      </div>
    )
    ;
  }
}

export default App;