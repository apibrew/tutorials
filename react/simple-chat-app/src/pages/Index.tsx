import {useClient, useRecordBy, useRecords} from "@apibrew/react";
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {AppUser, AppUserEntityInfo} from "../model/app-user";
import {Button, Grid} from "@mui/material";
import {UserSelectionPanel} from "../components/UserSelectionPanel";
import {ChatWindow} from "../components/ChatWindow";

export function Index() {
    const client = useClient()
    const navigate = useNavigate()

    useEffect(() => {
        if (!client.isAuthenticated()) {
            navigate('/login')
        }
    }, []);

    const users = useRecords<AppUser>(AppUserEntityInfo, {
        limit: 1000
    })

    const [selectedUser, setSelectedUser] = useState<AppUser>()

    const me = useRecordBy<AppUser>(AppUserEntityInfo, {
        id: client.getTokenBody()?.uid
    })

    if (!users || !me) {
        return <div>Loading...</div>
    }

    return <div>
        Welcome: {me.username}
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <UserSelectionPanel users={users}
                                    selectedUser={selectedUser}
                                    setSelectedUser={setSelectedUser}/>

                <br/>
                <br/>
                <br/>
                <Button onClick={() => {
                    client.invalidateAuthentication()
                    navigate('/login')
                }}>Logout</Button>
            </Grid>
            <Grid item xs={6}>
                {selectedUser && <ChatWindow me={me} user={selectedUser}/>}
            </Grid>
        </Grid>
    </div>
}