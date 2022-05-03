import { child, ref, set, get } from "firebase/database";
import { database } from "./firebase";

export const setProfileApi = (profile) => {
    return set(ref(database, `profiles/${profile.id}`), profile);
};

export const getProfilesApi = () => {
    return get(child(ref(database), `profiles`));
};