import express, { Express, Request, Response, Router } from 'express';
import { personList } from './models/personModel';
import { PERSON_API_ROUTE } from './routeParams';


const personRouter = Router();

personRouter.get(PERSON_API_ROUTE, (req: Request, res: Response) => {
    res.send(personList);
});

export default personRouter;

