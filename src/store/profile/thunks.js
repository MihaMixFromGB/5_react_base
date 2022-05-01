import { nanoid } from "nanoid";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../api/firebase";
import {
    setAuthProfile,
    setProfileFbStart,
    setProfileFbSuccess,
    setProfileFbError,
    getProfileFbStart,
    getProfileFbSuccess,
    getProfileFbError
} from "./actions";

export const subscribeAuthStateChanged = () => (dispatch) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            dispatch(getProfileFb(user.email));
            dispatch(setAuthProfile({isAuth: true}));
            return;
        }

        dispatch(setAuthProfile({isAuth: false})); 
    });
};
export const signOut = () => (dispatch) => {
    dispatch(setAuthProfile({isAuth: false}));
    auth.signOut();
};

export const setProfileFb = (profile) => async (dispatch, _, api) => {
    try {
        dispatch(setProfileFbStart());
        
        await api.setProfileApi(profile);
        
        dispatch(setProfileFbSuccess(profile));
    } catch (error) {
        dispatch(setProfileFbError(error));
    };
};

export const getProfileFb = (email) => async (dispatch, _, api) => {
    let profile = {};
    try {
        dispatch(getProfileFbStart());
        
        const snapshot = await api.getProfilesApi();
        snapshot.forEach(snap => {
            if (snap.val()?.email === email) {
                profile = snap.val();
            };
        });

        if (!profile.email) {
            dispatch(setProfileFb({
                id: nanoid(),
                email: email,
                firstName: email,
                lastName: "",
                nickname: "",
                isVisibleProfile: false
            }));
        }

        dispatch(getProfileFbSuccess(profile));
    } catch(error) {
        dispatch(getProfileFbError(error));
    };
};