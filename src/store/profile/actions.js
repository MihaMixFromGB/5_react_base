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

export const updateProfile = (profile) => {
    return { type: UPDATE_PROFILE, payload: profile };
};
export const toggleVisibleProfile = () => {
    return { type: TOGGLE_VISIBLE_PROFILE };
};
export const setAuthProfile = ({isAuth}) => {
    return { type: SET_AUTH_PROFILE, payload: {isAuth: !!isAuth} };
};

export const setProfileFbStart = () => {
    return { type: SET_PROFILE_FIREBASE_START };
};
export const setProfileFbSuccess = (profile) => {
    return { type: SET_PROFILE_FIREBASE_SUCCESS, payload: { profile } };
};
export const setProfileFbError = (error) => {
    return { type: SET_PROFILE_FIREBASE_ERROR, payload: { error } };
};

export const getProfileFbStart = () => {
    return { type: GET_PROFILE_FIREBASE_START };
};
export const getProfileFbSuccess = (profile) => {
    return { type: GET_PROFILE_FIREBASE_SUCCESS, payload: { profile } }
};
export const getProfileFbError = (error) => {
    return { type: GET_PROFILE_FIREBASE_ERROR, payload: { error } };
};