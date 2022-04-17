import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Pagination, CircularProgress, Paper, InputBase, IconButton } from "@mui/material";
import classNames from "classnames";
import SearchIcon from '@mui/icons-material/Search';
import { getPublicGists, getPublicGistsForUser, gistsSelector } from "../store/gists/";

import styles from "./gists.module.css";

export function GistsPage() {
    const { gists, error, pending } = useSelector(gistsSelector);
    const [ username, setUsername ] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        if (!gists.length) {
            dispatch(getPublicGists(1));
        }
    }, [dispatch, gists]);

    if (error) {
        return (
            <div className={styles.gists}>
                <h4>При отправке запроса произошла ошибка</h4>
                <p>{error.message}</p>
            </div>
        );
    }

    return (
        <div className={styles.gists}>
            <h1 className={styles.blockToCenter}>Gists From GitHub.com</h1>
            <Paper
                className={styles.blockToCenter}
                variant="outlined"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Gists By Username"
                    inputProps={{ 'aria-label': 'search gists by username' }}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search"
                            onClick={() => {
                                if(username) dispatch(getPublicGistsForUser(username))}}>
                    <SearchIcon />
                </IconButton>
            </Paper>

            <Pagination
                className={classNames(styles.gists__pagination, styles.blockToCenter)}
                count={10}
                onChange={(_, page) => dispatch(getPublicGists(page))} />
            
            {pending ? (
                <CircularProgress className={styles.blockToCenter} />
            ) : (
                gists?.map((gist, idx) => (
                <p key={idx}>{`${gist.owner.login} - ${gist.commits_url}`}</p>))
            )}
        </div>
    );
};