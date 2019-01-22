import React, { Component } from "react";
import _ from "lodash";
import "./Intro.styles.scss";
import { connect } from "react-redux";
import { Intro, expandActions } from "../../redux/actions/IntroActions";
import Card from "../../components/Card";
import Data from "../../config/master.json";

class IntroCard extends Component {
  constructor() {
    super();
    this.state = {
      expand: false
    };
  }

  onButton = () => {
    this.setState({ expand: !this.state.expand });
  };

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
                <p className="title">{title}</p>
                {expand && this.props.id == index + 1 ? (
                  <div
                    className="button-detail"
                    onClick={() => this.props.expandActions()}
                  >
                    <i className="fa fa-angle-up color-icon" />
                  </div>
                ) : (
                  <div
                    className="button-detail"
                    onClick={() => this.props.Intro(master, id, true)}
                  >
                    <i className="fa fa-angle-down color-icon" />
                  </div>
                )}
              </div>
              {expand && this.props.id == index + 1
                ? data.map(detail => {
                    return (
                      <ul key={detail.title}>
                        <li className="text-detail">{detail.title} <i className="italic"> [see detail]</i></li>
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
  { Intro, expandActions }
)(IntroCard);
