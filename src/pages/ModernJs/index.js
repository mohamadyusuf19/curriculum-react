import React, { Component } from "react";
import "./Modern.styles.scss";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import Data from "../../config/modern.json";

class ModernJs extends Component {
  render() {
    return (
      <>
        <Header />
        <Navbar />
        <div className="container-modern">
          <Card>
            <p className="title">Modern Javasript</p>
            {Data.map(item => {
              return (
                <ul>
                  <li>
                    {item.title}<i className="italic"> [see detail]</i>                    
                  </li>
                </ul>
              );
            })}
          </Card>
        </div>
      </>
    );
  }
}

export default ModernJs;
