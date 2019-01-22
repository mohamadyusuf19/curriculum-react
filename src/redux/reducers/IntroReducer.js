import { GET_DATA_MASTER, GET_EXPAND } from '../constants';

const initialState = {
    data: [],   
    id: null,
    expand: false
}

export default (state=initialState,action) => {
    console.log(action)
    switch(action.type) {
        case GET_DATA_MASTER:
            return { ...state, data: action.payload, id: action.id, expand: action.expand }
        case GET_EXPAND:
            return { ...state, expand: action.payload }
        default:
            return state
    }
}