import React, {useEffect, useState} from 'react';
import './App.css';
import {useClient, useRecordBy} from "@apibrew/react";
import {Outlet, useNavigate} from "react-router-dom";
import {AppUser, AppUserEntityInfo} from "./model/app-user";
import {Button, Grid, Link} from "@mui/material";

function App() {
    const client = useClient()
    const navigate = useNavigate()

    useEffect(() => {
        if (!client.isAuthenticated()) {
            navigate('/login')
        }
    }, []);

    const [selectedUser, setSelectedUser] = useState<AppUser>()

    const me = useRecordBy<AppUser>(AppUserEntityInfo, {
        id: client.getTokenBody()?.uid
    })

    return (
        <div className="App">
            Welcome: {me?.username}
            <Grid container spacing={3}>
                <Grid item xs={2}>
                    <Link href='/news-item-crud'>News Item Crud</Link>
                    <br/>
                    <br/>
                    <Button onClick={() => {
                        client.invalidateAuthentication()
                        navigate('/login')
                    }}>Logout</Button>
                </Grid>
                <Grid item xs={8} mt={5}>
                    <Outlet/>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
