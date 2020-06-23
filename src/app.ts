require('dotenv').config();
import express, { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import config from './config';

import { generateUsers, generateProducts } from './mock-data/generate-data';
import { Product, User } from './types/types';

const app = express();

const morganOpt =
  ( config.NODE_ENV === 'production' )
    ? 'tiny'
    : 'common';

const myFunc = (req: Request, res: Response, next: NextFunction) => {
  res.json(mockData);
};

let mockData = {
  products: generateProducts(10) as Product[],
  users: generateUsers(5) as User[],
  couponCode: "ABC123",
  couponInterval: 3
};

app.use(
  morgan(morganOpt),
  helmet(),
  cors(config.CLIENT_ORIGIN)
);

app.get('/', myFunc);

interface Error {
  message: string;
}

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  let response;
  if (config.NODE_ENV === 'production') {
    response = { 
      error: { 
        message: 'server error' 
      }
    };
  } else {
    // tslint:disable-next-line:no-console
    console.error(err);
    response = {
      message: err.message, err
    };
  }
  res.status(500).json(response)
};

app.use(errorHandler);

export default app;