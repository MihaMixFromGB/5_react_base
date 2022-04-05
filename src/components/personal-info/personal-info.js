import { TextField, Button } from '@mui/material';
import { useState, useCallback } from "react";
import { useDispatch } from 'react-redux';
import { updateProfile } from "../../store/profile";

import styles from "./personal-info.module.css";

export function PersonalInfo({firstName, lastName}) {
    const [info, setInfo] = useState({firstName, lastName});

    const handleChangeInfo = (event) => {
        const field = event.target.getAttribute('data-name');
        setInfo({
            ...info,
            [field]: event.target.value
        });
    };

    const dispatch = useDispatch();
    const handlerUpdateProfile = useCallback(() => {
        dispatch(updateProfile({...info}));
    }, [info, dispatch]);

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
            <Button variant="contained" onClick={handlerUpdateProfile}>UPDATE</Button>
        </div>
    );
}