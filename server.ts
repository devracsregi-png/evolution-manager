
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { router } from './src/routes';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/', router);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Evolution API rodando na porta ' + port));
