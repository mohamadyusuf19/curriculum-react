import React, { Component } from "react";
import "./Testing.styles.scss";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import Data from "../../config/testing.json";

class Testing extends Component {
  render() {
    return (
      <>
        <Header />
        <Navbar />
        <div className="container-modern">
          <Card>
            <p className="title">Introduction to Testing JS</p>   
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

export default Testing;
