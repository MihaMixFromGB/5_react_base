import { TextField, Button } from '@mui/material';
import { useState, useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { updateProfile } from "../../store/profile";

import styles from "./personal-info.module.css";

export function PersonalInfo() {
    const profile = useSelector(
        (state) => state.profile
    );
    const [ firstName, setFirstName ] = useState(profile.firstName);
    const [ lastName, setLastName ] = useState(profile.lastName);

    const dispatch = useDispatch();
    const handlerUpdateProfile = useCallback(() => {
        dispatch(updateProfile({
            firstName: firstName,
            lastName: lastName
        }));
    }, [firstName, lastName, dispatch]);

    return (
        <div className={styles.profile}>
            <TextField id="firstName" label="First Name" variant="outlined"
                value={firstName}
                onChange={(event) => {
                    setFirstName(event.target.value);
                }} />
            <TextField id="lastName" label="Last Name" variant="outlined"
                value={lastName}
                onChange={(event) => {
                    setLastName(event.target.value);
                }} />
            <Button variant="contained" onClick={() => handlerUpdateProfile()}>UPDATE</Button>
        </div>
    );
}