import path from 'node:path';

import * as dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

import { router } from './router';

dotenv.config();

const MONGO_URL = process.env.MONGO_URL || '';
const ALLOW_ORIGIN_VALUES = process.env.ALLOW_ORIGIN_VALUES || '';
const ALLOW_METHODS_VALUES = process.env.ALLOW_METHODS_VALUES || '';
const ALLOW_HEADERS_VALUES = process.env.ALLOW_HEADERS_VALUES || '';

mongoose
  .connect(MONGO_URL)
  .then(() => {
    const app = express();
    const SERVER_PORT = process.env.SERVER_PORT;

    app.use((_, res) => {
      res.setHeader('Access-Control-Allow-Origin', ALLOW_ORIGIN_VALUES);
      res.setHeader('Access-Control-Allow-Methods', ALLOW_METHODS_VALUES);
      res.setHeader('Access-Control-Allow-Headers', ALLOW_HEADERS_VALUES);
    });

    app.use(
      '/uploads',
      express.static(
        path.resolve(__dirname, '..', 'uploads').replace('\\src', '')
      )
    );
    app.use(express.json());
    app.use(router);

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
