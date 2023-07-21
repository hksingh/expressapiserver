import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

export const port = 8081;
export const app: Express = express()
app.use(cors({ origin: '*' }), bodyParser.json());

