import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import {AppUser} from "../model/app-user";
import React from 'react';
import {Box, ListItemButton, Typography} from "@mui/material";

export interface UserSelectionPanelProps {
    users: AppUser[]
    setSelectedUser: (user: AppUser) => void
}

export function UserSelectionPanel(props: UserSelectionPanelProps) {
    return (
        <Box>
            <Typography>Choose a user to chat</Typography>
            <List component="nav">
                {props.users.map(user => (
                    <React.Fragment key={user.id}>
                        <ListItem button>
                            <ListItemButton onClick={() => {
                                props.setSelectedUser(user)
                            }}>
                                <ListItemText primary={user.username}/>
                            </ListItemButton>
                        </ListItem>
                        <Divider/>
                    </React.Fragment>
                ))}
            </List>
        </Box>
    );
}
