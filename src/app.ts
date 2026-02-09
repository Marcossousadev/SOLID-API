import express from 'express';
import { router } from './routes';
import dotenv from 'dotenv';

const app = express();
app.use(express.json());
dotenv.config();
app.use(router);

export { app } 