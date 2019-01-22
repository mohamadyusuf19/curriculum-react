import React, { Component } from "react";
import _ from "lodash";
import "./Intro.styles.scss";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import IntroCard from "./IntroCard";

class Index extends Component {
  render() {
    return (
      <>
        <Header />
        <Navbar />
        <div className="container-modern-intro">
          <p className="title-top">Javascript Curriculum</p>
          <IntroCard/>
        </div>
      </>
    );
  }
}

export default Index;
