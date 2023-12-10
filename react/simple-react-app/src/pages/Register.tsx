import React, {useEffect, useState} from 'react';
import {Button, TextField, Grid, Paper, Typography, Link} from '@mui/material';
import {useNavigate} from "react-router-dom";
import {useClient, useAxios, useRepository, ApiException} from "@apibrew/react";
import {AppUser, AppUserEntityInfo} from "../model/app-user";

export const Register: React.FC = () => {
    // You can add state and functions here
    const navigate = useNavigate()

    const client = useClient()

    useEffect(() => {
        if (client.isAuthenticated()) {
            navigate('/')
        }
    }, []);

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const appUserRepository = useRepository<AppUser>(AppUserEntityInfo)

    return (
        <Grid container alignItems="center" style={{minHeight: '100vh'}}>
            <Paper style={{padding: 20, width: 280, margin: "20px auto"}}>
                <Grid item>
                    <Typography component="h1" variant="h5">
                        Register
                    </Typography>
                </Grid>
                <form>
                    <Grid container direction="column" spacing={2}>
                        <Grid item>
                            <TextField
                                fullWidth
                                label="Email"
                                variant="outlined"
                                required
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                fullWidth
                                label="Password"
                                type="password"
                                variant="outlined"
                                required
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                // Add onChange to update state
                            />
                        </Grid>
                        <Grid item>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                onClick={() => {
                                    client.invalidateAuthentication()
                                    appUserRepository.create({
                                        username: username,
                                        password: password
                                    } as AppUser).then(() => {
                                        client.authenticateWithUsernameAndPassword(username, password).then(() => {
                                            navigate('/')
                                        }, (e: ApiException) => {
                                            console.error(e)
                                            alert(e.message)
                                        })
                                    }, (e: ApiException) => {
                                        console.error(e)
                                        alert(e.message)
                                    })
                                }}
                                // Add onClick to handle submit
                            >
                                Register
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                <Grid container>
                    <Grid item>
                        <Link onClick={() => {
                            navigate('/login')
                        }} variant="body2">
                            Login?
                        </Link>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
};