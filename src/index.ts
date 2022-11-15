import * as dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

dotenv.config();

const MONGO_URL = process.env.MONGO_URL || '';

mongoose
  .connect(MONGO_URL)
  .then(() => {
    const app = express();
    const SERVER_PORT = process.env.SERVER_PORT;

    app.listen(SERVER_PORT, () => {
      console.log(
        `\nServer is running on http://localhost:${SERVER_PORT} 🔥\n`
      );
    });
  })
  .catch(() =>
    console.error(
      '\n🚨 Error connecting to Mongo, server was not started! 🚨\n'
    )
  );
