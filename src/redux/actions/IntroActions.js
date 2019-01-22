import { GET_DATA_MASTER, GET_EXPAND } from '../constants';

export const Intro = (master, id, expand) => {
    return dispatch => {
        dispatch({
            type: GET_DATA_MASTER,
            payload: master,
            id,
            expand
        })
    }
}

export const expandActions = () => {
    return dispatch => {
        dispatch({
            type: GET_EXPAND,
            payload: false
        })
    }
}