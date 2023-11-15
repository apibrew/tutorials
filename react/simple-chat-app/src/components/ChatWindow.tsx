import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Message, MessageEntityInfo} from "../model/message";
import {AppUser} from "../model/app-user";
import {Typography} from "@mui/material";
import {BooleanExpressionBuilder, useRecords, useRepository, useWatcher} from "@apibrew/react";
import {useState} from "react";

export interface ChatWindowProps {
    me: AppUser
    user: AppUser
}

export function ChatWindow(props: ChatWindowProps) {
    const wi = useWatcher(MessageEntityInfo)

    const repository = useRepository<Message>(MessageEntityInfo)

    const messages = useRecords<Message>(MessageEntityInfo, {
        query: BooleanExpressionBuilder.or(
            BooleanExpressionBuilder.and(
                BooleanExpressionBuilder.eq('from', props.user.username),
                BooleanExpressionBuilder.eq('to', props.me.username),
            ),
            BooleanExpressionBuilder.and(
                BooleanExpressionBuilder.eq('from', props.me.username),
                BooleanExpressionBuilder.eq('to', props.user.username),
            ),
        ),
    }, wi)

    const [message, setMessage] = useState<string>()

    return (
        <div>
            <Typography>Chatting with user: {props.user.username}</Typography>
            <List>
                {!messages && <div>Loading...</div>}
                {messages && messages.map((message, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={message.content} secondary={message.from}/>
                    </ListItem>
                ))}
            </List>
            <TextField value={message}
                       onChange={e => setMessage(e.target.value)}
                       label="Type a message" fullWidth margin="normal"/>
            <Button onClick={() => {
                repository.create({
                    from: props.me.username,
                    to: props.user.username,
                    content: message
                } as Message)
                setMessage('')
            }} variant="contained" color="primary">
                Send
            </Button>
        </div>
    );
}
