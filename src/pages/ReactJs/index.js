import React, { Component } from "react";
import "../../styles/main.styles.scss";
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
          <p className="title-top">React JS Curriculum</p>
          <IntroCard />
        </div>
      </>
    );
  }
}

export default Index;
