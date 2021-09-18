import React from "react";
import Applied from "./Applied";
import Dashboard from "./Dashboard";
import "./Main.css";
import NavBar from "./NavBar";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyProfile from "./MyProfile";

function Main() {
  return (
      <div className="main">
        {/* <NavBar /> */}

        {/* <div className="main__content"> */}
          {/* <Switch>
            <Route exact path="/my-profile" component={MyProfile}></Route>
            <Route exact path="/applied-jobs" component={Applied}></Route>
            <Route exact path="/" component={Dashboard}></Route> 

         </Switch>/ */}

          {/* <Dashboard />
          <Applied />
          <MyProfile /> */}
        {/* </div> */}
      </div>
  );
}

export default Main;
