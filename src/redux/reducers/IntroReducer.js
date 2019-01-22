import { GET_DATA_MASTER, GET_EXPAND, GET_DETAIL_CURRICULUM } from '../constants';

const initialState = {
    data: [],   
    id: null,
    expand: false,
    dataDetail: []
}

export default (state=initialState,action) => {
    console.log(action)
    switch(action.type) {
        case GET_DATA_MASTER:
            return { ...state, data: action.payload, id: action.id, expand: action.expand }
        case GET_EXPAND:
            return { ...state, expand: action.payload }
        case GET_DETAIL_CURRICULUM:
            return { ...state, dataDetail: action.payload }
        default:
            return state
    }
}