import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';

const SERVER_PORT = process.env.SERVER_PORT;

const app = express();

app.listen(SERVER_PORT, () => {
  console.log(`Server running at http://localhost:${SERVER_PORT} 🔥`);
});
