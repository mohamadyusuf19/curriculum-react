import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import "./Detail.styles.scss";
import {
  Intro,
  IntroNative,
  detailCurriculumActions
} from "../../redux/actions/IntroActions";
import { NavLink } from "react-router-dom";
import DetailCard from "../../components/DetailCard";
import Card from "../../components/Card";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

class Detail extends Component {
  //navigasi ke halaman selanjutnya atau sebelumnya
  onNavigate(params) {
    const { id, data, indexId, navigate, dataNative, idNative } = this.props;
    const indexMin = indexId - 1;
    const indexMax = indexId + 1;
    //back mengarah ke navigasi sebelumnya
    const indexRange = params == "back" ? indexMin : indexMax;
    const indexArray = params == "back" ? indexId - 2 : indexId;
    if (navigate == "reactnative") {
      return [
        this.props.IntroNative(dataNative, idNative, true, navigate),
        this.props.detailCurriculumActions(dataNative[indexArray], indexRange)
      ];
    } else if (navigate == "reactjs") {
      return [
        this.props.Intro(data, id, true, navigate),
        this.props.detailCurriculumActions(data[indexArray], indexRange)
      ];
    }
  }

  render() {
    const { dataDetail, indexId, navigate, data, dataNative } = this.props;
    // menghandle data pada button jika tidak ada data lagi
    const handleFinish = navigate == "reactjs" ? data : dataNative;
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
              <div className="row">
                <div className="wrapper-title">
                  <p className="title">{dataDetail.title}</p>
                </div>
                <div className="button-row">
                  <NavLink
                    to={indexId === 1 ? `/${navigate}` : "/detail"}
                    className="button-detail"
                    onClick={() => this.onNavigate("back")}
                  >
                    <i className="fa fa-angle-up color-icon" />
                  </NavLink>
                  {handleFinish.length == indexId ? (
                    <div className="button-detail-right white" />
                  ) : (
                    <NavLink
                      to="/detail"
                      className="button-detail-right"
                      onClick={() => this.onNavigate("next")}
                    >
                      <i className="fa fa-angle-up color-icon" />
                    </NavLink>
                  )}
                </div>
              </div>
              {dataDetail.competence.length > 0 ? (
                <div className="competence">
                  <div className="table-background">
                    <h4>Kompetensi</h4>
                  </div>                  
                  {dataDetail.competence.map((item,index)=> {
                    return (
                      <div className="table-competence" key={item}>
                        <div className="number">
                          <span>{index+1}.</span>                     
                        </div>
                        <div className={ index%2 == 0 ? "item" : "item background" } >
                          <span>{item}</span>                        
                        </div>                        
                      </div>
                    );
                  })}
                </div>
              ) : null}
              {dataDetail.course.length > 0 ? (
                <div className="wrapper-course">
                  {dataDetail.course.map(item => {
                    return (
                      <div key={item.title}>                        
                        <h4 className="title-course">{item.title}</h4>
                        <p className="content-course">{item.content}</p>
                      </div>
                    );
                  })}
                </div>
              ) : null}
              {dataDetail.notes.length > 0 ? (
                <div className="notes">
                  <div>
                    <i className="title">Catatan :</i>
                    {dataDetail.notes.map(item => {
                      return (
                        <i className="item" key={item}>
                          - {item}
                        </i>
                      );
                    })}
                  </div>
                  {dataDetail.keywords.length > 0 ? (
                    <div className="keywords">
                      <Card>
                        <p>Keywords</p>
                        {dataDetail.keywords.map(item => {
                          return (
                            <ul className="list" key={item}>
                              <li>{item}</li>
                            </ul>
                          );
                        })}
                      </Card>
                    </div>
                  ) : null}
                </div>
              ) : null}
              {dataDetail.useable_link.length > 0 ? (
                <div className="wrapper-source">
                  <div className="source">
                    <p className="source-belajar">Sumber Belajar : </p>
                    {dataDetail.useable_link.map(item => (
                      <ul className="div-url">
                        <li className="title-url">{item.title} </li>
                        <a href={item.url} target="_blank" className="text-url">
                          {item.url}
                        </a>
                      </ul>
                    ))}
                  </div>
                </div>
              ) : null}
              {/* {dataDetail.notes.length > 0 ? (
                <div className="exercise">
                  <i className="title-keyword">
                    Tugas : keyword harus ditulis di buku tulis dan dijabarkan
                    minimal 50 kata, tidak boleh copas harus ditulis sendiri.
                    Sesuai dengan pemahaman yang kalian pahami.
                  </i>
                </div>
              ) : null} */}
              {dataDetail.summarize.length > 0 ? (
                <div className="summarize">
                  <i className="title">kesimpulan : </i>
                  <i className="text-summarize">{dataDetail.summarize}</i>
                </div>
              ) : null}
            </DetailCard>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  const {
    dataDetail,
    data,
    id,
    indexId,
    navigate,
    dataNative,
    idNative
  } = state.introReducer;
  return {
    dataDetail,
    data,
    id,
    indexId,
    navigate,
    dataNative,
    idNative
  };
};

export default connect(
  mapStateToProps,
  { Intro, IntroNative, detailCurriculumActions }
)(Detail);
