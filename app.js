import express from 'express';

import { PORT } from './config/env.js';

const app = express();

app.get('/', (req, res) =>{
    res.send("Welcome to the Subscription Tracker API!");
});

app.listen(PORT, () => {
    console.log(`Subscription Tracker running on port http://localhost:${PORT}`);
})

export default app;