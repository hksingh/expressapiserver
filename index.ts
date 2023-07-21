import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { personList } from './api/models/personModel';
import {app, port} from './api/baseAPI';


app.get("/api/person", (req: Request, res: Response) => {
    res.send(personList);
});

app.post('/api/person', (req: Request, res: Response) => {
    res.send('Got a POST request')
});

app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user')
});

app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
});
app.listen(port, () => console.log('API server listening at port number :', `${port}`));