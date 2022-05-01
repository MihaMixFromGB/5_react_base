import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormControlLabel, Checkbox } from "@mui/material";
import { toggleVisibleProfile, profileSelector } from "../store/profile";
import { PersonalInfo } from "../components";

export function ProfilePage() {
    const dispatch = useDispatch();
    const profile = useSelector(profileSelector);
    const handlerUpdateCheckbox = useCallback(() => {
        dispatch(toggleVisibleProfile())
    }, [dispatch]);
    
    return (
        <div>
            <h3>{profile.firstName} {profile.lastName}</h3>
            <FormControlLabel
                control={ <Checkbox checked={profile.isVisibleProfile}
                                    onChange={() => handlerUpdateCheckbox()} />}
                label="Update your profile" />
            { profile.isVisibleProfile &&  <PersonalInfo profile={profile} /> }
        </div>
    );
}