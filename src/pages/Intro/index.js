import React, { Component } from "react";
import "./Intro.styles.scss";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";

class Intro extends Component {
  render() {
    return (
      <>
        <Header />
        <Navbar />
        <div className="container-modern">
          <Card>
            <p className="title">Selamat Datang</p>            
          </Card>
        </div>
      </>
    );
  }
}

export default Intro;
