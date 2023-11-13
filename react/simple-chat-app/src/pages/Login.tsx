import React from 'react';
import {Button, TextField, Grid, Paper, Typography, Link} from '@mui/material';
import {useNavigate} from "react-router-dom";

export const Login: React.FC = () => {
    // You can add state and functions here
    const navigate = useNavigate()

    return (
        <Grid container alignItems="center" style={{minHeight: '100vh'}}>
            <Paper style={{padding: 20, width: 280, margin: "20px auto"}}>
                <Grid item>
                    <Typography component="h1" variant="h5">
                        Sign in
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
                                // Add onChange to update state
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                fullWidth
                                label="Password"
                                type="password"
                                variant="outlined"
                                required
                                // Add onChange to update state
                            />
                        </Grid>
                        <Grid item>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                // Add onClick to handle submit
                            >
                                Sign In
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                <Grid container>
                    <Grid item>
                        <Link onClick={() => {
                            navigate('/register')
                        }} variant="body2">
                            Register?
                        </Link>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
};