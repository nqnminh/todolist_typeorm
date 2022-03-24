import 'dotenv/config'
import 'reflect-metadata';
import express from 'express'
import { routes } from './routes';
import'./database/index';


const app = express();
const PORT = process.env.PORT || 8080

app.use(express.json());

app.use(routes);

app.listen(PORT, () => console.log(`Server start on port ${PORT}`))