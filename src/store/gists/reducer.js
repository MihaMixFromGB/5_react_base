import { GET_GISTS_START, GET_GISTS_SUCCESS, GET_GISTS_ERROR } from "./types";

const initialState = {
    gists: [],
    error: null,
    pending: false,
    username: "SmartFinn"
};

export const gistsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GISTS_START:
            return { ...state, error: null, pending: true };
        case GET_GISTS_SUCCESS:
            return { ...state, gists: action.payload.gists, pending: false };
        case GET_GISTS_ERROR:
            return { ...state, error: action.payload.error, pending: false };
        default:
            return state;
    }
};