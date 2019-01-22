import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import "./Detail.styles.scss";
import DetailCard from "../../components/DetailCard";
import Card from "../../components/Card";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

class Detail extends Component {
  render() {
    const { dataDetail } = this.props;
    return (
      <>
        <Header />
        <Navbar />
        <div className="container-modern-detail">
          <p className="title-top">Detail Curriculum</p>
          {_.isEmpty(dataDetail) ? (
            <DetailCard>
              <p>Maaf data yang anda cari kosong</p>
            </DetailCard>
          ) : (
            <DetailCard>
              <p className="title">{dataDetail.title}</p>
              <i className="title">catatan :</i>
              {dataDetail.notes.length > 0
                ? dataDetail.notes.map(item => {
                    return <p>{item}</p>;
                  })
                : null}
              {dataDetail.keywords.length > 0 ? (
                <Card>
                  <p>Keywords yang harus dicari :</p>
                  <ul>
                    <li>{dataDetail.keywords}</li>
                  </ul>
                </Card>
              ) : null}
              <i className="title">kesimpulan :</i>
            </DetailCard>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  const { dataDetail } = state.introReducer;
  return {
    dataDetail
  };
};

export default connect(mapStateToProps)(Detail);
