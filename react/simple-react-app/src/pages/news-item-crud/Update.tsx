import React, {useEffect, useState} from "react";
import {NewsItem, NewsItemEntityInfo} from "../../model/news-item";
import TextField from "@mui/material/TextField";
import {useRepository} from "@apibrew/react";
import {Button} from "@mui/material";
import {useNavigate, useParams} from "react-router-dom";

export function Update() {
    const repository = useRepository<NewsItem>(NewsItemEntityInfo)
    const navigate = useNavigate()
    const params = useParams()

    const [record, setRecord] = useState<NewsItem>()

    useEffect(() => {
        repository.get(params.id as string).then(resp => {
            setRecord(resp)
        })
    }, []);

    if (!record) {
        return <div>Loading...</div>
    }

    return <div>
        Add
        <br/>
        <br/>

        <TextField label='Name' value={record.name} onChange={e => setRecord({
            ...record,
            name: e.target.value
        })}/>
        <br/>
        <br/>

        <TextField label='Title' value={record.title} onChange={e => setRecord({
            ...record,
            title: e.target.value
        })}/>
        <br/>
        <br/>

        <TextField label='Content' value={record.content} rows={5} multiline={true} onChange={e => setRecord({
            ...record,
            content: e.target.value
        })}/>
        <br/>
        <br/>

        <TextField label='Category' value={record.details?.category ?? ''} rows={5} multiline={true}
                   onChange={e => setRecord({
                       ...record,
                       details: {
                           ...record.details,
                           category: e.target.value
                       }
                   })}/>
        <br/>

        <Button onClick={() => {
            repository.update(record).then(() => {
                alert('Saved')

                navigate('/news-item-crud')
            })
        }}>Save</Button>
    </div>
}