import express, { Express, Request, Response } from 'express';

import {app, port} from './api/baseAPI';
import employeeRouter from "./api/employee.routes";
import personRouter from './api/person.routes';

app.use('/', employeeRouter);
app.use('/', personRouter);
app.listen(port, () => console.log('API server listening at port number :', `${port}`));