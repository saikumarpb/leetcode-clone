import express, { Express } from 'express';
import { PORT, loadConfig } from './config';

loadConfig();

const app: Express = express();

app.get('/', (req, res) => {
    res.send(`NodeJs server running on port ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
