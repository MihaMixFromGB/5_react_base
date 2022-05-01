// import { nanoid } from "nanoid";
import {
    UPDATE_PROFILE,
    TOGGLE_VISIBLE_PROFILE,
    SET_AUTH_PROFILE,
    SET_PROFILE_FIREBASE_START,
    SET_PROFILE_FIREBASE_SUCCESS,
    SET_PROFILE_FIREBASE_ERROR,
    GET_PROFILE_FIREBASE_START,
    GET_PROFILE_FIREBASE_SUCCESS,
    GET_PROFILE_FIREBASE_ERROR
} from "./types";

const initialState = {
    // id: nanoid(),
    // isVisibleProfile: false,
    // firstName: "Bruce",
    // lastName: "Wayne",
    // nickname: "BATMAN",
    // email: "batman@gmail.com",
    isAuth: false,
    pending: false,
    error: null
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PROFILE:
            return {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName
            };
        case TOGGLE_VISIBLE_PROFILE:
            return {
                ...state,
                isVisibleProfile: !state.isVisibleProfile
            };
        case SET_AUTH_PROFILE:
            return {
                ...state,
                isAuth: action.payload.isAuth
            };
        case SET_PROFILE_FIREBASE_START:
        case GET_PROFILE_FIREBASE_START:
            return {
                ...state,
                pending: true,
                error: null
            };
        case SET_PROFILE_FIREBASE_SUCCESS:
        case GET_PROFILE_FIREBASE_SUCCESS:
            return {
                ...state,
                ...action.payload.profile,
                pending: false
            };
        case SET_PROFILE_FIREBASE_ERROR:
        case GET_PROFILE_FIREBASE_ERROR:
            return {
                ...state,
                pending: false,
                error: action.payload.error
            };
        default:
            return state;
    }
};