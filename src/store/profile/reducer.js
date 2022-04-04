import { UPDATE_PROFILE, TOGGLE_VISIBLE_PROFILE } from "./types";

const initialState = {
    isVisibleProfile: false,
    firstName: "BATMAN",
    lastName: "WAYNE"
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
        default:
            return state;
    }
};