import {useRepository, useWatcher} from "@apibrew/react";
import {NewsItem, NewsItemEntityInfo} from "../../model/news-item";
import React, {useEffect, useState} from "react";
import {Button, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import {useNavigate} from "react-router-dom";

export function Watch() {
    const navigate = useNavigate()

    const repository = useRepository<NewsItem>(NewsItemEntityInfo)
    const wi = useWatcher(NewsItemEntityInfo)

    const [newsItems, setNewsItems] = useState<NewsItem[]>([])

    function load() {
        repository.list()
            .then(resp => setNewsItems(resp.content))
    }

    useEffect(() => {
        load();
    }, [wi]);

    return <div>

        <Button onClick={() => {
            navigate('/news-item-crud/add')
        }}>Add</Button>

        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {newsItems.map((newsItem, index) => (
                    <TableRow>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{newsItem.id}</TableCell>
                        <TableCell>{newsItem.name}</TableCell>
                        <TableCell>{newsItem.title}</TableCell>
                        <TableCell>{newsItem.details?.category}</TableCell>
                        <TableCell>
                            <Button href={`/news-item-crud/${newsItem.id}/update`}>Update</Button>
                            <Button onClick={() => {
                                repository.delete(newsItem.id).then(() => {
                                    alert('Deleted')
                                    load()
                                })
                            }}>Delete</Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>
}