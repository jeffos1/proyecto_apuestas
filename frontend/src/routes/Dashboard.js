import React, { Component } from "react";

import Sidebar2 from "../components/Sidebar2";
import Navbar2 from "../components/Navbar2";
import HomeDashboard from "../components/HomeDashboard"

import "../assets/css/sb-admin-2.css"

export default class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="dashboard">
          <Sidebar2></Sidebar2>
          <div id="content-dashboard" className="d-flex flex-column">
            <div id="content">
              <Navbar2></Navbar2>
              <HomeDashboard></HomeDashboard>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
