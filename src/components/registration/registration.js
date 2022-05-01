import { useState, useCallback } from "react";
import { TextField, Button } from "@mui/material";

import styles from "./registration.module.css";

export function Registration({auth, type, sendRegistration}) {
    const [info, setInfo] = useState({email: "", password: ""});

    const handleChangeInfo = (event) => {
        const field = event.target.dataset.name;
        setInfo({
            ...info,
            [field]: event.target.value
        });
    };

    const handleClickBtn = useCallback(() => {
        if (!info.email || !info.password) return;
        
        sendRegistration(auth, info.email, info.password);
    }, [sendRegistration, auth, info]);
    
    return (
        <div className={styles.form}>
            <div className={styles.form__container}>
                <TextField
                    required
                    placeholder="email"
                    type="email"
                    inputProps={{"data-name": "email"}}
                    value={info.email}
                    onChange={handleChangeInfo} />
                <TextField
                    required
                    placeholder="password"
                    type="password"
                    inputProps={{"data-name": "password"}}
                    value={info.password}
                    onChange={handleChangeInfo} />
                <Button
                    variant="outlined"
                    onClick={handleClickBtn}>{type}</Button>
            </div>
        </div>
    );
}