import { TextField, Button } from '@mui/material';
import { useState, useCallback } from "react";
import { useDispatch } from 'react-redux';
import {
    // updateProfile,
    setProfileFb
} from "../../store/profile";

import styles from "./personal-info.module.css";

export function PersonalInfo({profile}) {
    const [info, setInfo] = useState({
        firstName: profile.firstName, 
        lastName: profile.lastName,
        nickname: profile.nickname
    });

    const handleChangeInfo = (event) => {
        const field = event.target.getAttribute('data-name');
        setInfo({
            ...info,
            [field]: event.target.value
        });
    };

    const dispatch = useDispatch();
    const handleUpdateProfile = useCallback(() => {
        // dispatch(updateProfile({...info}));
        dispatch(setProfileFb({
            ...profile,
            ...info
        }));
    }, [profile, info, dispatch]);

    return (
        <div className={styles.profile}>
            <TextField label="First Name" variant="outlined"
                inputProps={{"data-name": "firstName"}}
                value={info.firstName}
                onChange={handleChangeInfo} />
            <TextField label="Last Name" variant="outlined"
                inputProps={{"data-name": "lastName"}}
                value={info.lastName}
                onChange={handleChangeInfo} />
            <TextField label="Nickname" variant="outlined"
                inputProps={{"data-name": "nickname"}}
                value={info.nickname}
                onChange={handleChangeInfo} />
            <Button variant="contained" onClick={handleUpdateProfile}>UPDATE</Button>
        </div>
    );
}