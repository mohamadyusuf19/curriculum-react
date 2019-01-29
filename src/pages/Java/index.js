import React, { Component } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  IntroJava,
  expandActions,
  detailCurriculumActions
} from "../../redux/actions/IntroActions";
import "../../styles/main.styles.scss";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import Data from "../../config/java.json";

class Index extends Component {
  render() {
    const { expandJava, dataJava } = this.props;
    return (
      <>
        <Header />
        <Navbar />
        <div className="container-modern-intro">
          <p className="title-top">Java Curriculum</p>
          {Data.map((item, index) => {
            const { id, title, master } = item;
            return (
              <Card key={id}>
                <div className="row">
                  <div className={expandJava && this.props.idJava == index + 1 ? "wrapper-title animasi" : "wrapper-title"}>
                    <p className="title">Session {index + 1} - {title}</p>
                  </div>
                  {expandJava && this.props.idJava == index + 1 ? (
                    <div
                      className="button-detail button-rotate-up"
                      onClick={() => this.props.expandActions()}
                    >
                      <i className="fa fa-angle-up color-icon" />
                    </div>
                  ) : (
                      <div
                        className="button-detail-active button-rotate"
                        onClick={() => this.props.IntroJava(master, id, true, 'java')}
                      >
                        <i className="fa fa-angle-up color-icon" />
                      </div>
                    )}
                </div>
                {expandJava && this.props.idJava == index + 1
                  ? dataJava.map((detail, indexId) => {
                    return (
                      <ul key={detail.title}>
                        <li className="text-detail">                  
                          <Link
                            to="/detail"
                            className="italic"
                            onClick={() =>
                              [this.props.detailCurriculumActions(detail, indexId + 1), this.props.IntroJava(master, id, true, 'reactnative')]
                            }
                          >
                            {detail.title}{" "}
                          </Link>
                        </li>
                        {_.isArray(detail.detail)
                          ? detail.detail.map((i, index) => {
                            return (
                              <ul key={index}>
                                <li className="text-detail">
                                  {index + 1}. {i}
                                </li>
                              </ul>
                            );
                          })
                          : null}
                      </ul>
                    );
                  })
                  : null}
              </Card>
            );
          })}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  const { dataJava, idJava, expandJava } = state.introReducer;
  return {
    dataJava,
    idJava,
    expandJava
  };
};

export default connect(
  mapStateToProps,
  {
    IntroJava,
    expandActions,
    detailCurriculumActions
  }
)(Index);
