// Router - Purchases
import { Router, json } from 'express';
const purchasesRouter = Router();
import mockData from '../mock-data/mock-data';

// Services
import PurchasesService from './purchases-service';

purchasesRouter

  // Get all purchases
  .route('/')
  .get( (req, res, next) => {
    PurchasesService.getPurchases(mockData)
      .then(response => res.json(response))
      .catch(next)
  });

export default purchasesRouter;