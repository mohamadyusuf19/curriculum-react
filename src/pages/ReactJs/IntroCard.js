import React, { Component } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import "../../styles/main.styles.scss";
import { connect } from "react-redux";
import { Intro, expandActions, detailCurriculumActions } from "../../redux/actions/IntroActions";
import Card from "../../components/Card";
import Data from "../../config/master.json";

class IntroCard extends Component {  
  render() {
    console.log(this.props.data);
    const { expand, data } = this.props;
    return (
      <>
        {Data.map((item, index) => {
          const { id, title, master } = item;
          return (
            <Card key={id}>
              <div className="row">
                <div className={expand && this.props.id == index + 1 ? "wrapper-title animasi" : "wrapper-title"}>
                  <p className="title">Session {index+1} - {title}</p>
                </div>                
                {expand && this.props.id == index + 1 ? (
                  <div
                    className="button-detail button-rotate-up"
                    onClick={() => this.props.expandActions()}
                  >
                    <i className="fa fa-angle-up color-icon" />
                  </div>
                ) : (
                  <div
                    className="button-detail-active button-rotate"
                    onClick={() => this.props.Intro(master, id, true)}
                  >
                    <i className="fa fa-angle-up color-icon" />
                  </div>
                )}
              </div>
              {expand && this.props.id == index + 1
                ? data.map((detail, indexId) => {
                    return (
                      <ul key={detail.title}>
                        <li className="text-detail">                  
                          <Link
                            to="/detail"
                            className="italic"                            
                            onClick={() => [this.props.detailCurriculumActions(detail,indexId+1), this.props.Intro(master, id, true, 'reactjs')]}
                          >                            
                          {detail.title} {" "}
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
      </>
    );
  }
}

const mapStateToProps = state => {
  const { data, id, expand } = state.introReducer;
  return {
    data,
    id,
    expand
  };
};

export default connect(
  mapStateToProps,
  { 
    Intro, 
    expandActions, 
    detailCurriculumActions
  }
)(IntroCard);
