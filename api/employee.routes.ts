import express, { Express, Request, Response, Router } from 'express';
import { personList } from './models/personModel';
import { EMPLOYEE_API_ROUTE } from './routeParams';

const employeeRouter = Router();

employeeRouter.get(EMPLOYEE_API_ROUTE, (req: Request, res: Response) => {
    res.send(personList);
});

export default employeeRouter;