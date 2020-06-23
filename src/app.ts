require('dotenv').config();
import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import config from './config';
import mockData from './mock-data/mock-data';
import productsRouter from './products/products-router';

const app = express();

const morganOpt =
  ( config.NODE_ENV === 'production' )
    ? 'tiny'
    : 'common';

const myFunc = (req: Request, res: Response, next: NextFunction) => {
  res.json(mockData);
};

app.use(
  morgan(morganOpt),
  helmet(),
  cors(config.CLIENT_ORIGIN)
);

app.get('/', myFunc);
app.use('/api/products', productsRouter);

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