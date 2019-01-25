import {
  GET_DATA_MASTER,
  GET_EXPAND,
  GET_DETAIL_CURRICULUM,
  GET_DATA_MASTER_NATIVE,
  GET_DATA_MASTER_JAVA
} from "../constants";

export const Intro = (master, id, expand, navigate) => {
  return dispatch => {
    dispatch({
      type: GET_DATA_MASTER,
      payload: master,
      id,
      expand,
      navigate
    });
  };
};

export const IntroNative = (master, id, expand, navigate) => {
  return dispatch => {
    dispatch({
      type: GET_DATA_MASTER_NATIVE,
      payload: master,
      id,
      expand,
      navigate
    });
  };
};

export const IntroJava = (master, id, expand, navigate) => {
  return dispatch => {
    dispatch({
      type: GET_DATA_MASTER_JAVA,
      payload: master,
      id,
      expand,
      navigate
    });
  };
};

export const expandActions = () => {
  return dispatch => {
    dispatch({
      type: GET_EXPAND,
      payload: false
    });
  };
};

export const detailCurriculumActions = (data, indexId) => {
  return dispatch => {
    dispatch({
      type: GET_DETAIL_CURRICULUM,
      payload: data,
      indexId
    });
  };
};
