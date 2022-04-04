import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormControlLabel, Checkbox } from "@mui/material";
import { toggleVisibleProfile } from "../store/profile";
import { PersonalInfo } from "../components";

export function ProfilePage() {
    const dispatch = useDispatch();
    const { isVisibleProfile, firstName, lastName } = useSelector(
        (state) => state.profile
    );
    const handlerUpdateCheckbox = useCallback(() => {
        dispatch(toggleVisibleProfile())
    }, [dispatch]);
    
    return (
        <div>
            <h3>{firstName} {lastName}</h3>
            <FormControlLabel
                control={ <Checkbox checked={isVisibleProfile}
                                    onChange={() => handlerUpdateCheckbox()} />}
                label="Update your profile" />
            { isVisibleProfile &&  <PersonalInfo /> }
            
        </div>
    );
}