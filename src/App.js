import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Axios from "axios";
import "./assets/bootstrap/bootstrap.min.css";
import "./assets/bootstrap/bootstrap-rtl.min.css";
import * as ConnecctionString from "../src/database/connectionstring";
// Components
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import ProductItem from "./component/pages/ProductItem";
// import Product from "./component/pages/Product";
import Login from "./component/pages/Login";
import NoMatch from "./component/pages/NoMatch";
import UserPanel from "./component/pages/UserPanel";
import PrivateRoute from "./component/PrivateRoute";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: true,
    };
  }
  componentDidMount() {
    let apiToken = localStorage.getItem("api_token");
    if (apiToken != null) {
      Axios.get(
        ConnecctionString.SERVERCONNECTIONSTRING +
          `/auth/user?token=${apiToken}`
      )
        //Axios.get(ConnecctionString.LOCALCONNECTIONSTRING + `/auth/user?token=${apiToken}`)
        .then((response) => {
          if (response.data.userID !== -1) {
            this.setState({ isAuthenticated: true });
            // console.log("then",this.state.isAuthenticated);
          } else {
            this.setState({ isAuthenticated: false });
            // console.log("then-else",this.state.isAuthenticated);
          }
        })
        .catch((error) => {
          this.setState({ isAuthenticated: false });
          // console.log("error",this.state.isAuthenticated);
        });
    } else {
      this.setState({ isAuthenticated: false });
    }
  }
  handleLogout() {
    localStorage.removeItem("api_token");
    this.setState({ isAuthenticated: false });
  }
  handleLogin() {
    this.setState({ isAuthenticated: true });
  }
  render() {
    return (
      <Router>
        <div>
          <div className="container">
            <div style={{ paddingTop: 70 }}>
              <Switch>
                <Route path="/home" component={Home} />
                {/* <Route path="/productitem/:callingcode" component={ProductItem}/> */}
                <Route
                  path="/ProductItem/:callingcode"
                  component={ProductItem}
                />
                <Route path="/about" component={About} />
                <PrivateRoute
                  path="/contact"
                  component={Contact}
                  auth={this.state.isAuthenticated}
                />
                <Route path="/" exact={true} component={Home} />
                <Route
                  path="/login"
                  render={(props) => (
                    <Login
                      {...props}
                      auth={this.state.isAuthenticated}
                      Login={this.handleLogin.bind(this)}
                    />
                  )}
                />
                <PrivateRoute
                  path="/user-panel"
                  component={UserPanel}
                  auth={this.state.isAuthenticated}
                />
                <Route component={NoMatch} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
