import { getGistsStart, getGistsSuccess, getGistsError } from "./actions";

export const getPublicGists = page => async (dispatch, _, api) => {
    try {
        dispatch(getGistsStart());

        const { data } = await api.getPublicGistsApi(page);

        dispatch(getGistsSuccess(data));
    } catch(e) {
        console.log(e);
        dispatch(getGistsError(e));
    }
};

export const getPublicGistsForUser = name => async (dispatch, _, api) => {
    try {
        dispatch(getGistsStart());

        const { data } = await api.getPublicGistsForUserApi(name);

        dispatch(getGistsSuccess(data));
    } catch(e) {
        dispatch(getGistsError(e));
    }
};