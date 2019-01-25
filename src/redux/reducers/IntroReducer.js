import {
  GET_DATA_MASTER,
  GET_EXPAND,
  GET_DETAIL_CURRICULUM,
  GET_DATA_MASTER_NATIVE,
  GET_DATA_MASTER_JAVA
} from "../constants";

const initialState = {
  data: [],
  id: null,
  dataNative: [],
  idNative: null,
  dataJava: [],
  idJava: null,
  expand: false,
  expandNative: false,
  expandJava: false,
  dataDetail: [],
  indexId: null,
  navigate: ""
};

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case GET_DATA_MASTER:
      return {
        ...state,
        data: action.payload,
        id: action.id,
        expand: action.expand,
        navigate: action.navigate
      };
    case GET_DATA_MASTER_NATIVE:
      return {
        ...state,
        dataNative: action.payload,
        idNative: action.id,
        expandNative: action.expand,
        navigate: action.navigate
      };
    case GET_DATA_MASTER_JAVA:
      return {
        ...state,
        dataJava: action.payload,
        idJava: action.id,
        expandJava: action.expand,
        navigate: action.navigate
      };
    case GET_EXPAND:
      return { ...state, expand: action.payload, expandNative: action.payload, expandJava: action.payload };
    case GET_DETAIL_CURRICULUM:
      return { ...state, dataDetail: action.payload, indexId: action.indexId };
    default:
      return state;
  }
};
