import React, { Component } from "react";

import Navbar from "../components/Navbar";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";


import header from "../images/badge-header.svg";

import "./styles/BadgeNew.css";

class BadgeNew extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName="Jesus"
                lastName="Avendaño"
                avatarUrl="https://www.gravatar.com/avatar?d=identicon"
                jobTitle="Developer"
                twitter="sleeping_247"
              />
            </div>
            <div className="col-6">
              <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
